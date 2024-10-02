import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {FORGOT_PASSWORD} from '../../utls/api/AlancedApi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchResetPassword = async () => {
    setLoading(true);
    try {
      const formData = {
        email: email.trim(),
      };
      console.log(email);

      const response = await axios.post(FORGOT_PASSWORD, formData);
      if (response.status === 200) {
        setLoading(false);
        Alert.alert(
          'Success',
          'The email was sent. Please check it to reset your password',
        );
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.viewOuterContainer}>
      <ScrollView>
        <View>
          <View style={styles.resetOuterContainer}>
            <Text style={styles.txtResetPassword}>Reset Password</Text>
            <View style={styles.resetLine}></View>
          </View>
          <Text style={styles.txtReset}>
            Enter your email address and we will send you a link to reset your
            password.
          </Text>

          <View style={styles.inputPassword}>
            <MaterialCommunityIcons
              name="email"
              color={'black'}
              size={22}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Enter Email"
              style={{width: '90%', fontSize: 18}}
              value={email}
              onChangeText={text => setEmail(text.toLowerCase())}
              keyboardType="email-address"
            />
          </View>
          <LinearGradient
            style={{borderRadius: 10, height: 50}}
            colors={['#0909E9', '#00D4FF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              style={styles.buttonsign}
              onPress={fetchResetPassword}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color="#FFF"
                  style={{paddingTop: 15}}
                />
              ) : (
                <Text style={styles.txtApplySign}>Submit</Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};
export default ResetPassword;
