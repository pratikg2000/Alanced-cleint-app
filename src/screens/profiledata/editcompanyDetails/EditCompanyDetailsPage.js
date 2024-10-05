import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../../them/Styles';
import DatePicker from 'react-native-date-picker';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const EditCompanyDetailsPage = () => {
  const route = useRoute();
  const {profileData} = route.params;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState(profileData.Company_Name);
  const [websiteName, setWebsiteName] = useState(profileData.social_media);
  const [data, setdata] = useState(''); // ise me date select ho kr aa rhi he
  console.log('Date', data);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <View style={styles.viewOuterContainer}>
      <Text style={styles.txtFindOppor}>Edit Company Details</Text>
      <View>
        <Text style={[styles.txtFirst, {marginTop: 20}]}>Company Name</Text>
        <View style={styles.inputPassword}>
          <FontAwesome6
            name="building-user"
            color={'black'}
            size={18}
            style={{marginVertical: 14, paddingRight: 10}}
          />
          <TextInput
            placeholder="Enter Company Name"
            style={{width: '90%', fontSize: 18, color: 'black'}}
            value={companyName}
            placeholderTextColor="grey"
            onChangeText={setCompanyName}
          />
        </View>
      </View>

      <View>
        <Text style={[styles.txtFirst, {marginTop: 10}]}>Establish</Text>

        <View style={styles.inputPassword}>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
              setdata(formatDate(selectedDate)); // Store only the formatted date
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Text
            style={{width: '90%', fontSize: 18, color: 'black', marginTop: 10}}>
            {date.toDateString()}
          </Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <FontAwesome
              name="calendar-o"
              color={'black'}
              size={18}
              style={{marginVertical: 14, paddingRight: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={[styles.txtFirst, {marginTop: 10}]}>Website</Text>
        <View style={styles.inputPassword}>
          <Feather
            name="link"
            color={'black'}
            size={18}
            style={{marginVertical: 14, paddingRight: 10}}
          />
          <TextInput
            placeholder="Enter Company Name"
            style={{width: '90%', fontSize: 18, color: 'black'}}
            value={websiteName}
            placeholderTextColor="grey"
            onChangeText={setWebsiteName}
          />
        </View>
      </View>

      <View style={[styles.socialMedia, {justifyContent: 'space-around'}]}>
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
  );
};

export default EditCompanyDetailsPage;
