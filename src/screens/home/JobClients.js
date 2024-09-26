import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../them/Styles';
import TabTopJobClient from '../../navigation/TopTabNavigation';
import LinearGradient from 'react-native-linear-gradient';

const JobClients = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TabTopJobClient />
    </View>
  );
};

JobClients.Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.profileContainer}>
      <LinearGradient
        colors={['#0909E9', '#00D4FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.profileContainer}>
        <TouchableOpacity onPress={handleProfilePress}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={30}
            style={styles.styleProfile}
          />
        </TouchableOpacity>
        <Text style={styles.txtHeadercolor}>Job Clients</Text>
      </LinearGradient>
    </View>
  );
};

export default JobClients;
