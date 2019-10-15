import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, SectionList} from 'react-native';
import Card from '../components/Card';

export default class DebtList extends Component {

  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    headerTitle: "Debit List",
    headerTransparent: true,
    headerRight: (
      <TouchableOpacity onPress={ () => {} }> 
        <Text style={ {paddingRight:20, color:"#9d00dE", fontSize:15} }>Filter</Text>
      </TouchableOpacity>
      ),
  };

  render() {

    const { navigation } = this.props;

    //TODO: O que acontece se nao existir debitos? getParam('paramName', default)
    const debts = navigation.getParam('debts');

    console.log(debts);
    console.log(debts.lenght);

    const DATA = [
      {
        title: 'all',
        data: debts,
      },
    ];

    // const DATA = [
    //   {
    //     title: 'Food',
    //     data: [
    //       { id:0, description: "Pizza no Fds", value: 15 ,category: "Food", createdAt: '11/09/2019' },
    //       { id:1, description: "Refri Coca cola no araujo", value: 5 ,category: "Food", createdAt: '11/09/2019' },
    //     ],
    //   },

    //   {
    //     title: 'Personal',
    //     data: [
    //       { id:2, description: "Bola", value: 10, category: "Personal", createdAt: '12/09/2019' },
    //     ],
    //   },

    //   {
    //     title: 'Travel',
    //     data: [
    //       { id:3, description: "Passagem para Paris", value: 5000, category: "Travel", createdAt: '13/09/2019' },
    //       { id:4, description: "Passagem para Guaramiranca-Ce", value: 100, category: "Travel", createdAt: '15/09/2019' },
    //     ],
    //   },

    //   {
    //     title: 'Life',
    //     data: [
    //       { id:5, description: "Remedio Benegripe na farmacia", value: 5, category: "Life", createdAt: '15/09/2019' },
    //     ],
    //   },
    // ];

    let pageContent;

    if (debts.lenght != null) {

      pageContent = <SectionList 
        style={styles.list}
        sections={ DATA } 
        keyExtractor={ (item, index) => index }
        renderSectionHeader={ ( {section} ) => <Text style={styles.sectionList}>{ section.title }</Text> } 
        renderItem={ ( { item } ) => <ItemList debt = { item } actionOnTouch={ () => this.props.navigation.navigate('EditDebt', item) } /> } 
      />
            
    } else {

      pageContent = <Text>No debts to display.</Text>

    }

    return (
      <View style={styles.container}>

        {pageContent}

      </View>
    );
  }
}

const ItemList = props => {
  const { id, description, value, category, createdAt } = props.debt;
  return (
    <TouchableOpacity onPress={ () => props.actionOnTouch() }> 
      <View style={styles.itemList}>
        <Text style={styles.listItemValue}>R$ {value}</Text>
        <Text>{description}</Text>
        <Text>{category} - {createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
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
    paddingTop: 0, // 0
    backgroundColor: '#F9F9F9',
  },
  list: {
   // Layout
   marginTop: 60
  },
  sectionList: {
    //Alignment
    alignSelf: "center",

    //Layout
    marginTop: 20,
    fontWeight: "bold",
    fontSize:20
  },
  itemList: {
    paddingTop:10,
    paddingBottom: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#D2D2D2",
  },
  listItemValue: {
    fontWeight: "bold",
    fontSize: 18
   }
});