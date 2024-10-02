import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import JobPost from '../screens/jobPostPages/PostJobClient';
import FindTalent from '../screens/home/FindTalent';
import JobClients from '../screens/home/JobClients';

const BottomTab = createBottomTabNavigator();
const HomeScreens = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'FindTalent') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'JobClients') {
          iconName = focused ? 'wallet-travel' : 'wallet-travel';
        } else if (route.name === 'JobPost') {
          iconName = focused ? 'person-add-alt-1' : 'person-add-alt';
        } else if (route.name === 'Message') {
          iconName = focused ? 'message' : 'message';
        }
        return <MaterialIcons name={iconName} size={22} color={color} />;
      },
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 12,
      },
    })}>
    <BottomTab.Screen
      name="FindTalent"
      component={FindTalent}
      options={{header: () => <FindTalent.Header />}}
    />
    <BottomTab.Screen
      name="JobPost"
      component={JobPost}
      options={{header: () => <JobPost.Header />}}
    />
    <BottomTab.Screen
      name="JobClients"
      component={JobClients}
      options={{header: () => <JobClients.Header />, tabBarLabel: 'AllJobs'}}
    />
    {/* <BottomTab.Screen name="Message" component={Messages} options={{ header: () => <Messages.Header /> }} /> */}
  </BottomTab.Navigator>
);

export default HomeScreens;
