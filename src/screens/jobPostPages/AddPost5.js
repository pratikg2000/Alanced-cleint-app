import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Animated,
} from 'react-native';
import styles from '../../them/Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {POST_FREELANCER_POST} from '../../utls/api/AlancedApi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddPostFifthPage = () => {
  const navigation = useNavigation();
  const [experience_level, setExperience_level] = useState('');
  const [deadline, setDeadline] = useState('');

  const route = useRoute();
  const {
    title,
    category,
    description,
    skills_required,
    min_hourly_rate,
    max_hourly_rate,
    fixed_budget,
    rate,
  } = route.params;

  const lineWidth = useRef(new Animated.Value(0)).current;

  const animateLine = () => {
    Animated.timing(lineWidth, {
      toValue: 300,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateLine();
  }, []);

  const formatDateInput = text => {
    let formattedText = text.replace(/\D/g, '');

    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + '-' + formattedText.slice(2);
    }
    if (formattedText.length > 5) {
      formattedText = formattedText.slice(0, 5) + '-' + formattedText.slice(5);
    }
    if (formattedText.length > 10) {
      formattedText = formattedText.slice(0, 10);
    }

    setDeadline(formattedText);
  };

  const handlePostPagePress = async () => {
    if (deadline.length === 0) {
      Alert.alert('Validation Error', 'Please enter a valid deadline.');
      return;
    }

    if (experience_level === '') {
      Alert.alert('Validation Error', 'Please select an experience level.');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No token found.');
      }

      const Data = {
        title: title,
        category: category,
        description: description,
        skills_required: skills_required,
        min_hourly_rate: min_hourly_rate,
        max_hourly_rate: max_hourly_rate,
        fixed_budget: fixed_budget,
        deadline: deadline,
        rate: rate,
        experience_level: experience_level,
      };

      console.log('Posting job with token:', token);
      console.log('Data', Data);

      const response = await axios.post(POST_FREELANCER_POST, Data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 3000,
      });

      console.log('Post Job Response:', response.data);
      Alert.alert('Success', 'Job posted successfully');
      navigation.navigate('JobPost');
    } catch (error) {
      console.error(
        'Error posting job:',
        error.response ? error.response.data : error.message,
      );
    }
  };

  const handlePostBackPagePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.viewOuterContainer}>
      <ScrollView>
        <View
          style={{
            borderWidth: 1,
            height: 5,
            borderRadius: 5,
            marginTop: 15,
            marginBottom: 15,
          }}>
          <Animated.View style={[styles.linestyle, {width: lineWidth}]} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.txtCategory}>Deadline</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 10,
              borderColor: 'rgb(210, 212, 233)',
              paddingHorizontal: 10,
              color: 'black',
            }}
            placeholder="dd-mm-yyyy"
            placeholderTextColor="grey"
            keyboardType="numeric"
            onChangeText={formatDateInput}
            value={deadline}
            maxLength={10}
          />
        </View>
        <View style={{padding: 3, marginVertical: 10}}>
          <Text style={styles.txtCategory}>Experience Level</Text>
          <View style={styles.styleLine}>
            <Picker
              style={styles.pickerstyle}
              selectedValue={experience_level}
              onValueChange={itemValue => setExperience_level(itemValue)}>
              <Picker.Item
                label="Select Experience Level"
                value=""
                style={styles.pickerStyle}
              />
              <Picker.Item
                label="Entry Level"
                value="Entry_Level"
                style={styles.pickerStyle}
              />
              <Picker.Item
                label="Intermediate"
                value="Intermediate"
                style={styles.pickerStyle}
              />
              <Picker.Item
                label="Expert"
                value="Expert"
                style={styles.pickerStyle}
              />
            </Picker>
          </View>
        </View>
        <View style={styles.closedContainer}>
          <View style={styles.txtHourlyPayment}>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5, padding: 1}}>
              <TouchableOpacity
                style={styles.BackBtnLiner}
                onPress={handlePostBackPagePress}>
                <Text style={styles.txtCategoryLiner}>Back</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5}}>
              <TouchableOpacity onPress={handlePostPagePress}>
                <Text style={styles.txtSave}>Next: Deadline</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

AddPostFifthPage.Header = () => {
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
            size={30}
            style={styles.styleProfile}
          />
        </TouchableOpacity>
        <Text style={styles.txtHeadercolor}>Tell us about your budget</Text>
      </LinearGradient>
    </View>
  );
};

export default AddPostFifthPage;
