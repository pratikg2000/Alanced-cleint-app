import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from 'react-native-screens';
import SplaceScreen from '../screens/splacePage/SplaceScreen';
import SignNavigation from '../screens/signNavigationPage/SignNavigation';
import SignUp from '../screens/registration/SignUp';
import Login from '../screens/loginPage/LoginScreen';
import HomeScreens from './BottomTabNavigation';
import AddPostSecondPage from '../screens/jobPostPages/AddPost2';
import AddPostThirdPage from '../screens/jobPostPages/AddPost3';
import AddPostFourthPage from '../screens/jobPostPages/AddPost4';
import AddPostFifthPage from '../screens/jobPostPages/AddPost5';
import ViewProposal from '../screens/allJobsInvitedContacts/ViewProposal';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import ViewDetails from '../screens/details/ViewDetails';
import DetailsPortfolio from '../screens/viewDetailsPortfolio/DetailsPortfolio';
import HirePage from '../screens/hire/HirePage';
import ProfilePage from '../screens/profiledata/Profile/ProfilePage';
import EditAccount from '../screens/profiledata/account/EditAccount';
import EditCompanyDetailsPage from '../screens/profiledata/editcompanyDetails/EditCompanyDetailsPage';
import EditCompanyContactsPage from '../screens/profiledata/editCompanyContacts/EditCompanyContactsPage';

const Stack = createNativeStackNavigator();

const ClientNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplaceScreen"
        component={SplaceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignNavigation"
        component={SignNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPostSecondPage"
        component={AddPostSecondPage}
        options={{header: () => <AddPostSecondPage.Header />}}
      />
      <Stack.Screen
        name="AddPostThirdPage"
        component={AddPostThirdPage}
        options={{header: () => <AddPostThirdPage.Header />}}
      />
      <Stack.Screen
        name="AddPostFourthPage"
        component={AddPostFourthPage}
        options={{header: () => <AddPostFourthPage.Header />}}
      />
      <Stack.Screen
        name="AddPostFifthPage"
        component={AddPostFifthPage}
        options={{header: () => <AddPostFifthPage.Header />}}
      />
      <Stack.Screen
        name="ViewProposal"
        component={ViewProposal}
        options={{header: () => <ViewProposal.Header />}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{header: () => <ViewDetails.Header />}}
      />
      <Stack.Screen
        name="DetailsPortfolio"
        component={DetailsPortfolio}
        options={{header: () => <DetailsPortfolio.Header />}}
      />
      <Stack.Screen
        name="HirePage"
        component={HirePage}
        options={{header: () => <HirePage.Header />}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{header: () => <ProfilePage.Header />}}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{header: () => <ProfilePage.Header />}}
      />
      <Stack.Screen
        name="EditCompanyDetailsPage"
        component={EditCompanyDetailsPage}
        options={{header: () => <ProfilePage.Header />}}
      />
      <Stack.Screen
        name="EditCompanyContactsPage"
        component={EditCompanyContactsPage}
        options={{header: () => <ProfilePage.Header />}}
      />
    </Stack.Navigator>
  );
};

export default ClientNavigation;
