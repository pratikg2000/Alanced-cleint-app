import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from '../../them/Styles';

type RootStackParamList = {
  SignNavigation: undefined;
  HomeScreens: undefined;
};

const SplaceScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
