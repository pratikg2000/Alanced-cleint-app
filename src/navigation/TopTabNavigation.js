import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import AllJob from '../screens/allJobsInvitedContacts/AllJobs';
import InvitedFreelancer from '../screens/allJobsInvitedContacts/InvitedFreelancres';
import AllContractClient from '../screens/allJobsInvitedContacts/AllContractClient';

const TabTop = createMaterialTopTabNavigator();

function TabTopJobClient() {
  return (
    <TabTop.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}>
      {/* <TabTop.Screen
        name="AllJob"
        component={AllJob}
        options={{tabBarLabel: 'All Job'}}
      /> */}
      <TabTop.Screen
        name="InvitedFreelancer"
        component={InvitedFreelancer}
        options={{tabBarLabel: 'Invited Freelancer'}}
      />
      <TabTop.Screen
        name="AllContractClient"
        component={AllContractClient}
        options={{tabBarLabel: 'All Contracts'}}
      />
    </TabTop.Navigator>
  );
}

export default TabTopJobClient;
