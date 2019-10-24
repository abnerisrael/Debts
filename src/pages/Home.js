import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import ActionButton from 'react-native-action-button';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {

  constructor(props) {

    super(props);

    this.state = { 
      id:'',
      description: '',
      value: '',
      category: '',
      createdAt:'',
      debts: [
        // { id:0, description: "Pizza no Fds", value: 15 ,category: "Food", createdAt: '11/09/2019' },
        // { id:1, description: "Refri Coca cola no araujo", value: 5 ,category: "Food", createdAt: '11/09/2019' },
        // { id:2, description: "Bola", value: 10, category: "Personal", createdAt: '12/09/2019' },
        // { id:3, description: "Passagem para Paris", value: 5000, category: "Travel", createdAt: '13/09/2019' },
        // { id:4, description: "Passagem para Guaramiranca-Ce", value: 100, category: "Travel", createdAt: '15/09/2019' },
        // { id:5, description: "Remedio Benegripe na farmacia", value: 5, category: "Life", createdAt: '15/10/2019' },
      ]
    }

  }

  handleChange = input => {

    const { name, value } = input;

    this.setState({
      [name]: value
    })

  }


  handleSubmit = ()  => {

    const {id, description, value, category, createdAt} = this.state;

    this.storeDebt({
      id: id,
      description: description,
      value: value,
      category: category,
      createdAt: '24/10/2019'
    });

  }
  

  storeDebt = (debt) => {

    if(debt.id == '') { 

      if(this.state.debts.length == 0) {
        debt.id = 0;
      }

      if(this.state.debts.length > 0) {
        
        let lastIdFound = 0;
        this.state.debts.map((debt) => {
          
          if(debt.id > lastIdFound){
            lastIdFound = debt.id;
          }

        })

        debt.id = lastIdFound + 1;

      }

      this.setState({debts: [...this.state.debts, debt]});

    };

  }


  static navigationOptions = {
    headerTransparent: true,
  };


  render() {

    const events = {
      onHandleChange: this.handleChange,
      onHandleSubmit: this.handleSubmit,
    }

    const { debts } = this.state;

    let debts_total = 0;
    let debts_thisMonth = 0;

    debts.forEach((debt) => {
      debts_total = Number(debts_total) + Number(debt.value);

      //Get the actualy and Debt Month
      var dateSplited = debt.createdAt.split('/');
      var debtDate = new Date(dateSplited[2], dateSplited[1], dateSplited[0]);
      var currentDate = new Date();

      // Count the Debts of actualy month
      if ( debtDate.getFullYear() == currentDate.getFullYear() ) 
      {
        if ( debtDate.getMonth() == currentDate.getMonth() + 1 ) 
        {
          debts_thisMonth =  Number(debts_thisMonth) + Number(debt.value);
        }
      }
      
    });
    
    return( 
      <View style={styles.container}>

        <Text style={styles.hello}>Hello, You.</Text>

        <Card>

          <View style={styles.cardBody}>
            <View style={styles.section}>
              <Text style={styles.cardTitle}>Your Debts</Text>
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>This Month</Text>
              <Text style={styles.sectionValue}>$ {debts_thisMonth}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Total</Text>
              <Text style={styles.sectionValue}>$ {debts_total}</Text>
            </View>
          </View>

          
          <View style={styles.cardFooter}>

            <TouchableNativeFeedback onPress={()=>{}} >
              <View style={styles.button}>
                <View style={styles.buttonLabel}>
                  <Icon name="line-chart" style={styles.buttonLabelIcon} />
                  <Text style={styles.buttonLabelText}>View Analysis Debts</Text>
                </View>
                <Icon name="angle-right" style={styles.buttonRightIcon} />
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={ () => this.props.navigation.navigate('DebtList', { debts: this.state.debts, events: events }) } >
              <View style={styles.button}>
                <View style={styles.buttonLabel}>
                  <Icon name="dollar" style={styles.buttonLabelIcon} />
                  <Text style={styles.buttonLabelText}>View your Debts</Text>
                </View>
                <Icon name="angle-right" style={styles.buttonRightIcon} />
              </View>
            </TouchableNativeFeedback>

          </View>

        </Card>

        <ActionButton
          buttonColor="#9d00dE"
          onPress={ () => this.props.navigation.navigate('NewDebt', { events: events }) }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Flex
    flex:1,

    // Alignment

    // Layout
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: '#F9F9F9'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  hello: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: "bold"
  },
  cardBody:{
    // Layout
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  section:{
    marginBottom:20
  },
  sectionLabel:{
    fontSize:14
  },
  sectionValue:{
    fontSize:28
  },
  button: {
    // Flex
    flexDirection: "row",

    // Alignment
    justifyContent: "space-between",
    
    // Layout
    backgroundColor: '#F6F6F6',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonLabel:{
    flexDirection: "row"
  },
  buttonLabelIcon: {
    fontSize: 18
  },
  buttonLabelText:{
    marginLeft: 10
  },
  buttonRightIcon: {
    alignSelf: "center",
    fontSize: 15
  }
});
