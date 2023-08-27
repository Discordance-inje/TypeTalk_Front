import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useLanding } from '../../use-landing';
import ChatPage from '../page/chat/ChatPage';
import MainPage from '../page/main/MainPage';
import MatchPage from '../page/match/MatchPage';
import UserDetail from '../page/userdetail/UserDetail';

export default () => {
  const Tab = createBottomTabNavigator();
  const {
    CustomIcon
  } = useLanding();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={MainPage}
        options={{ tabBarIcon: () => (
        <CustomIcon name={"home"} size={15} color={"black"} />
        )}}/>

      <Tab.Screen name="Match" component={MatchPage}
        options={{ tabBarIcon: () => (
        <CustomIcon name={"meh"} size={15} color={"black"} />
        )}}/>

      <Tab.Screen name="Chat" component={ChatPage} 
        options={{ tabBarIcon: () => (
        <CustomIcon name={"message1"} size={15} color={"black"} />
        )}}/>
        
      <Tab.Screen name="UserDetail" component={UserDetail}
        options={{ tabBarIcon: () => (
        <CustomIcon name={"user"} size={15} color={"black"} />
        )}}/>

    </Tab.Navigator>
  )
}
