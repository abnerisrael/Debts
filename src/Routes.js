import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import NewDebt from './pages/NewDebt';
import EditDebt from './pages/EditDebt';
import DebtList from './pages/DebtList';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: Home,
            NewDebt: NewDebt,
            EditDebt: EditDebt,
            DebtList: DebtList,
        },
        {
            initialRouteName: 'Home'
        }

    )
);

export default Routes;