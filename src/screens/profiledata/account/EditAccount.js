import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import styles from '../../../them/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {CLIENT_PROFILE_UPDATE} from '../../../utls/api/AlancedApi';
import qs from 'qs'; // Make sure to import qs

const EditAccount = () => {
  const route = useRoute();
  const {profileData} = route.params;
  const [loading, setLoading] = useState(false);
  const [first_Name, setFirst_Name] = useState(profileData.first_Name);
  const [last_Name, setLast_Name] = useState(profileData.last_Name);
  const [email, setEmail] = useState(profileData.email);

  const fetchUpdateProfile = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token Not Found');
      }

      // Constructing URL-encoded data
      const data = {
        first_Name: first_Name,
        last_Name: last_Name,
        email: email,
        availableStatus: 'off',
      };

      const response = await axios.put(CLIENT_PROFILE_UPDATE, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log('Error Response:', error.response.data);
      } else if (error.request) {
        console.log('Error Request:', error.request);
      } else {
        console.log('Error Message:', error.message);
      }
    } finally {
      setLoading(false); // Ensure loading state is stopped
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white', height: '1005'}}>
      <View style={styles.viewOuterContainer}>
        <Text style={styles.txtFindOppor}>Edit Account</Text>

        <View>
          <Text style={[styles.txtFirst, {marginTop: 20}]}>First Name</Text>
          <View style={styles.inputPassword}>
            <FontAwesome5
              name="user-alt"
              color={'black'}
              size={18}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Enter First Name"
              style={{width: '90%', fontSize: 18, color: 'black'}}
              value={first_Name}
              placeholderTextColor="grey"
              onChangeText={setFirst_Name}
            />
          </View>
        </View>

        <View>
          <Text style={styles.txtFirst}>Last Name</Text>
          <View style={styles.inputPassword}>
            <FontAwesome5
              name="user-alt"
              color={'black'}
              size={18}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Enter Last Name"
              style={{width: '90%', fontSize: 18, color: 'black'}}
              value={last_Name}
              placeholderTextColor="grey"
              onChangeText={setLast_Name}
            />
          </View>

          <View>
            <Text style={styles.txtFirst}>Email</Text>
            <View style={styles.inputPassword}>
              <MaterialCommunityIcons
                name="email"
                color={'black'}
                size={22}
                style={{marginVertical: 14, paddingRight: 10}}
              />
              <TextInput
                placeholder="Enter Email"
                style={{width: '90%', fontSize: 18, color: 'black'}}
                value={email}
                placeholderTextColor="grey"
                onChangeText={text => setEmail(text.toLowerCase())}
              />
            </View>
          </View>

          <View style={[styles.socialMedia, {justifyContent: 'space-between'}]}>
            <LinearGradient
              style={{
                borderRadius: 5,
                height: 47,
                marginTop: 10,
                padding: 1,
              }}
              colors={['#0909E9', '#00D4FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <TouchableOpacity activeOpacity={0.5}>
                <Text
                  style={[
                    styles.txtcolorSave,
                    {color: 'black', backgroundColor: 'white', borderRadius: 5},
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              style={{
                borderRadius: 5,
                height: 48,
                marginTop: 10,
              }}
              colors={['#0909E9', '#00D4FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.txtcolorSave}> Save </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
