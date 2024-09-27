import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from '../../them/Styles';

const SplaceScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignNavigation');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View>
      <Image source={require('../../assets/appImages/Alanced.png')} />
    </View>
  );
};

export default SplaceScreen;

// import {Image, View} from 'react-native';
// import React, {useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import styles from '../../them/Styles';

// const SplaceScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const checkTokenAndNavigate = async () => {
//       const token = await AsyncStorage.getItem('accessToken');
//       console.log('Token:', token);
//       if (token) {
//         navigation.replace('HomeScreens', {animationEnabled: false});
//       } else {
//         navigation.replace('SignNavigation', {animationEnabled: false});
//       }
//     };

//     const timer = setTimeout(() => {
//       checkTokenAndNavigate();
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/appImages/Alanced.png')}
//         style={{width: '100%', height: '100%', resizeMode: 'contain'}}
//       />
//     </View>
//   );
// };

// export default SplaceScreen;
