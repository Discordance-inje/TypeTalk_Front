import {createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import MainPage from '../page/MainPage';
import Test from '../page/Test'; 
import Test2 from '../page/Test2';
import UserDetail from '../page/userdetail/UserDetail'; 

export default () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Main" component={MainPage} />
        <Tab.Screen name="Test2" component={Test} />
        <Tab.Screen name="Test3" component={Test2} />
        <Tab.Screen name="UserDetail" component={UserDetail} />
        
      </Tab.Navigator>
    )
}
