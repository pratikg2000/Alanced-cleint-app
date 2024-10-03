import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../../them/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FREELANCER_HIRE} from '../../utls/api/AlancedApi';

const HirePage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [type, setType] = useState(['Hourly', 'Fixed']);
  const [hiringBudget, setHiringBudget] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setloading] = useState(false);
  const route = useRoute();
  const {id} = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No Token found');
        }

        const response = await axios.get(
          'https://www.api.alanced.com/freelance/view-all/hirer-self/Project',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.data && Array.isArray(response.data.data)) {
          const titles = response.data.data.map(item => ({
            title: item.title,
            id: item.id,
          }));
          setData(titles);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const fetchFreelancerHire = async () => {
    setloading(true); // Set loading to true at the start
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No Token found');
      }

      const payload = {
        hiring_budget: hiringBudget,
        hiring_budget_type: selectedType,
        message: message,
        project: selectedId,
        project_title: selectedValue,
      };

      const url = `${FREELANCER_HIRE}/${id}`;
      // console.log('Payload:', payload);

      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (
        response.status === 200 &&
        response.message === 'Hiring Request Sent successfully'
      ) {
        Alert.alert('Hiring Request Sent successfully');
        navigation.goBack();
      }
    } catch (error) {
      if (error.response.status === 400) {
        Alert.alert(
          'You have already sent a Hiring Request to this freelancer',
        );
        // console.error('Error fetching freelancer hire:', error.response.data);
        // console.error('Status Code:', error.response.status);
      } else {
        console.error('Error fetching freelancer hire:', error.message);
      }
    } finally {
      setloading(false);
    }
  };

  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.viewOuterContainer}>
        <Text style={styles.freelancerNameTxt}>Add Data</Text>

        <View style={{marginVertical: 15, marginTop: 30}}>
          <Text style={styles.txtFirst}>Project Title</Text>

          <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
              // console.log('Selected Item:', selectedItem);
              setSelectedValue(selectedItem.title);
              setSelectedId(selectedItem.id);
            }}
            defaultButtonText="Select an item"
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {selectedItem ? selectedItem.title : 'Choose Project Title'}
                  </Text>
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>

        <View style={{marginBottom: 5}}>
          <Text style={styles.txtFirst}>Hiring Budget</Text>
          <View style={styles.inputPassword}>
            <FontAwesome
              name="dollar"
              color={'black'}
              size={22}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Hiring Budget"
              style={{width: '94%', fontSize: 18, color: 'black'}}
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={hiringBudget}
              onChangeText={text => setHiringBudget(text.trim())}
            />
          </View>
        </View>

        <View style={{marginBottom: 15}}>
          <Text style={styles.txtFirst}>Project Title</Text>
          <SelectDropdown
            data={type}
            onSelect={(selectedItem, index) => {
              setSelectedType(selectedItem);
            }}
            defaultButtonText="Select a type"
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {selectedItem || 'Select a type'}
                  </Text>
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && {backgroundColor: '#D2D9DF'}),
                  }}>
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.txtFirst}>Message</Text>
          <View style={styles.inputPassword}>
            <MaterialCommunityIcons
              name="message-reply-text"
              color={'black'}
              size={22}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Message"
              style={{width: '94%', fontSize: 18, color: 'black'}}
              keyboardType="numbers-and-punctuation"
              placeholderTextColor="grey"
              value={message}
              onChangeText={text => setMessage(text.trim())}
            />
          </View>
        </View>
        <View style={styles.txtHourlyPayment}>
          <TouchableOpacity
            style={styles.touchbtnLiner}
            onPress={fetchFreelancerHire}>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{borderRadius: 5, padding: 1}}>
              <Text style={styles.txtSaveHire}>Hire</Text>
            </LinearGradient>
          </TouchableOpacity>
          <LinearGradient
            colors={['#0909E9', '#00D4FF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{borderRadius: 5, padding: 1}}>
            <TouchableOpacity
              style={styles.BackBtnLiner}
              onPress={() => navigation.goBack()}>
              <Text style={styles.txtCategoryLinerCancel}>Cancel</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

HirePage.Header = () => {
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
        <Text style={styles.txtHeadercolor}>Hire</Text>
      </LinearGradient>
    </View>
  );
};

export default HirePage;
