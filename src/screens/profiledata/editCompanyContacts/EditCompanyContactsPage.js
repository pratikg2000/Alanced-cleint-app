import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../../them/Styles';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const EditCompanyContactsPage = () => {
  const route = useRoute();
  const {profileData} = route.params;
  const [type, setType] = useState([
    'Indore',
    'Ujjain',
    'Bhopal',
    'Delhi',
    'Gujarat',
    'Pune',
    'Surat',
    'Punjab',
    'Mumbai',
    'Bombay',
    'Bengaluru',
    'Prettier',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Kanpur',
    'Varanasi',
    'Srinagar',
    'Nagpur',
    'Vadodara',
    'Guwahati',
    'Chandigarh',
    'Noida',
    'Ranchi',
    'Amritsar',
    'Dehradun',
    'Jodhpur',
  ]);

  const [selectedType, setSelectedType] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(profileData.contact);
  console.log(route.params);
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.viewOuterContainer}>
        <Text style={styles.txtFindOppor}>Edit Company Contacts</Text>
        <View>
          <Text style={[styles.txtFirst, {marginTop: 10}]}>Phone</Text>
          <View style={styles.inputPassword}>
            <FontAwesome5
              name="phone-alt"
              color={'black'}
              size={18}
              style={{marginVertical: 14, paddingRight: 10}}
            />
            <TextInput
              placeholder="Enter Company Name"
              style={{width: '90%', fontSize: 18, color: 'black'}}
              value={phoneNumber}
              placeholderTextColor="grey"
              onChangeText={text => {
                const formattedText = text.replace(/[^0-9]/g, '');
                setPhoneNumber(formattedText.slice(0, 10));
              }}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
        </View>

        <View style={{marginBottom: 15}}>
          <Text style={styles.txtFirst}>Address</Text>
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
    </ScrollView>
  );
};

export default EditCompanyContactsPage;
