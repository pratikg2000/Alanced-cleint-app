import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CLIENT_ACCOUNT_SELFPROFILE} from '../../../utls/api/AlancedApi';
import {launchImageLibrary} from 'react-native-image-picker';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = () => {
  const [loading, setloading] = useState(false);
  const [imageUri, setImageUri] = useState('');
  const [profileData, setProfileData] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProfileData = async () => {
      setloading(true);
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          throw new Error('Token not Found');
        }
        const response = await axios.get(CLIENT_ACCOUNT_SELFPROFILE, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.data && response.data.data.length > 0) {
          setProfileData(response.data.data[0]);

          if (response.data.data[0].images_logo) {
            setImageUri(
              `https://www.api.alanced.com${response.data.data[0].images_logo}`,
            );
          }
        }
        // console.log('profile Response', response);
      } catch (error) {
        console.log(error);
        setloading(true);
      } finally {
        setloading(false);
      }
    };
    fetchProfileData();
  }, []);

  const selectImage = async () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
      };

      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        } else if (response.errorCode) {
          console.error('ImagePicker Error: ', response.errorCode);
          return;
        } else if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0];
          if (selectedImage && selectedImage.uri) {
            setImageUri(selectedImage.uri);
          } else {
            console.error('ImagePicker Error: Image URI not found');
          }
        } else {
          console.error('ImagePicker Error: No assets found');
        }
      });
    } catch (error) {
      console.error('Error in image picker:', error.message);
    }
  };

  const handleAccountNaviagtion = profileData => {
    navigation.navigate('EditAccount', {
      profileData: profileData,
    });
  };

  const handleCompanyDetailsNaviagtion = profileData => {
    navigation.navigate('EditCompanyDetailsPage', {
      profileData: profileData,
    });
  };

  const handleCompanyContactsNaviagtion = profileData => {
    navigation.navigate('EditCompanyContactsPage', {
      profileData: profileData,
    });
  };

  const {
    first_Name,
    last_Name,
    Address,
    email,
    Company_Establish,
    social_media,
    experience_level,
    contact,
    hourly_rate,
    qualification,
    category,
  } = profileData;

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      console.log('Token removed');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error removing token', error);
    }
  };

  return (
    <ScrollView style={styles.viewOuterContainer}>
      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        style={{
          borderRadius: 10,
          padding: 1,
          marginVertical: 10,
          marginTop: 20,
        }}>
        <View style={styles.profileImageNameContainer}>
          <View style={styles.arrowStyles}>
            {imageUri && (
              <Image
                source={{uri: imageUri}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginHorizontal: 10,
                }}
              />
            )}
            <View style={{width: '25%'}}>
              <TouchableOpacity
                onPress={selectImage}
                style={styles.imageEditContainer}>
                <MaterialCommunityIcons
                  name="pencil-circle-outline"
                  size={30}
                  color={'gray'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 20}}>
            <Text style={styles.txtFindOppor}>Verifications</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtpaymentProfile}>ID:</Text>
              <Text style={[styles.txtpostMonth, {marginTop: 7}]}>
                Verified
              </Text>
              <MaterialIcons
                name="verified"
                size={15}
                color={'green'}
                style={{paddingVertical: 12, paddingHorizontal: 2}}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
        <View style={styles.postContractsAllJobConatiner}>
          <View style={styles.styelVerified}>
            <Text
              style={[
                styles.txtprofileYour,
                {color: 'blue', paddingBottom: 10},
              ]}>
              Account
            </Text>
            <TouchableOpacity
              onPress={() => handleAccountNaviagtion(profileData)}>
              <MaterialCommunityIcons
                name="pencil-circle-outline"
                size={25}
                color={'black'}
                style={{padding: 2}}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.txtprofileYour, {paddingBottom: 15}]}>
            {first_Name || ''} {last_Name || ''}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Client</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {first_Name || ''} {last_Name || ''}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Email</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {email || ''}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
        <View style={styles.postContractsAllJobConatiner}>
          <View style={styles.styelVerified}>
            <Text
              style={[
                styles.txtprofileYour,
                {color: 'blue', paddingBottom: 10},
              ]}>
              Company Details
            </Text>
            <TouchableOpacity
              onPress={() => handleCompanyDetailsNaviagtion(profileData)}>
              <MaterialCommunityIcons
                name="pencil-circle-outline"
                size={25}
                color={'black'}
                style={{padding: 2}}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.txtprofileYour, {paddingBottom: 15}]}>
            {first_Name || ''} {last_Name || ''}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Website</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {social_media || 'NA'}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Establish</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {Company_Establish || ''}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
        <View style={styles.postContractsAllJobConatiner}>
          <View style={styles.styelVerified}>
            <Text
              style={[
                styles.txtprofileYour,
                {color: 'blue', paddingBottom: 10},
              ]}>
              Company Contacts
            </Text>
            <TouchableOpacity
              onPress={() => handleCompanyContactsNaviagtion(profileData)}>
              <MaterialCommunityIcons
                name="pencil-circle-outline"
                size={25}
                color={'black'}
                style={{padding: 2}}
              />
            </TouchableOpacity>
          </View>

          <Text style={{color: 'grey', fontSize: 18}}>Owner</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {first_Name || ''} {last_Name || ''}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Phone</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {contact || 'NA'}
          </Text>
          <Text style={{color: 'grey', fontSize: 18}}>Address</Text>
          <Text style={[styles.txtSaved, {paddingBottom: 15}]}>
            {Address || 'NA'}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
        <View style={styles.postContractsAllJobConatiner}>
          <TouchableOpacity onPress={removeToken}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={removeToken}>
                <SimpleLineIcons
                  name="logout"
                  size={25}
                  color={'blue'}
                  style={{padding: 4, paddingRight: 20}}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.txtprofileYour,
                  {color: 'blue', paddingBottom: 10},
                ]}>
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

ProfilePage.Header = () => {
  const navigation = useNavigation();
  handleProfilePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.profileContainer}>
      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.profileContainer}>
        <TouchableOpacity onPress={handleProfilePress}>
          <FontAwesome6
            name="angle-left"
            size={25}
            style={styles.styleProfile}
          />
        </TouchableOpacity>
        <Text style={styles.txtHeadercolor}>Profile</Text>
      </LinearGradient>
    </View>
  );
};

export default ProfilePage;
