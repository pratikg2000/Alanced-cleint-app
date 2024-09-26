import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

const SignNavigation: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignUpPress = () => {
    navigation.navigate('Login');
  };
  const handleLoginNavigationPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView style={styles.viewOuterContainer}>
      <View>
        <View style={styles.outerContainer}>
          <Image source={require('../../assets/appImages/Alanced.png')} />
        </View>
        <View style={styles.imglaptopStyle}>
          <Image
            source={require('../../assets/appImages/Laptop.png')}
            style={styles.imglaptopStyle}
          />
        </View>
        <View>
          <Text style={styles.txtFindOppor}>
            Find The Right Person For Your Project
          </Text>
          <Text style={styles.txtSearch}>
            Work with the largest network of independent professionals to get
            things done. Find your go-to talent or start building your team.
          </Text>
        </View>

        <LinearGradient
          style={{borderRadius: 10, height: 50}}
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.txtApplySign}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.touchNew}>
          <TouchableOpacity onPress={handleLoginNavigationPress}>
            <Text style={styles.txtNew}>New to Alanced? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignNavigation;
