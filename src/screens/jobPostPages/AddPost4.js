import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../../them/Styles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddPostFourthPage = () => {
  const [rateType, setRateType] = useState(0);
  const [min_hourly_rate, setMin_hourly_rate] = useState('');
  const [max_hourly_rate, setMax_hourly_rate] = useState('');
  const [fixed_budget, setFixed_budget] = useState('');

  const route = useRoute();
  const {title, category, description, skills_required} = route.params;
  const rate = rateType === 0 ? 'Hourly' : 'Fixed';
  const navigation = useNavigation();

  // const handlePostPagePress = () => {
  //   navigation.navigate('AddPostFifthPage', {
  //     title: title,
  //     category: category,
  //     description: description,
  //     skills_required: skills_required,
  //     min_hourly_rate: min_hourly_rate,
  //     max_hourly_rate: max_hourly_rate,
  //     fixed_budget: fixed_budget,
  //     rate: rate,
  //   });
  // };

  const handlePostPagePress = () => {
    if (rateType === 0) {
      if (min_hourly_rate.length === 0) {
        Alert.alert(
          'Validation Error',
          'Please select your minimum hourly rate.',
        );
        return;
      }
      if (max_hourly_rate.length === 0) {
        Alert.alert(
          'Validation Error',
          'Please select your maximum hourly rate.',
        );
        return;
      }
      if (parseFloat(min_hourly_rate) > parseFloat(max_hourly_rate)) {
        Alert.alert(
          'Validation Error',
          'Minimum hourly rate cannot be greater than maximum hourly rate.',
        );
        return;
      }
    } else {
      if (fixed_budget.length === 0) {
        Alert.alert('Validation Error', 'Please enter your fixed budget.');
        return;
      }
    }

    navigation.navigate('AddPostFifthPage', {
      title: title,
      category: category,
      description: description,
      skills_required: skills_required,
      min_hourly_rate: min_hourly_rate,
      max_hourly_rate: max_hourly_rate,
      fixed_budget: fixed_budget,
      rate: rate,
    });
  };

  const handlePostBackPagePress = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SegmentedControl
        values={['Hourly Rate', 'Fixed Budget']}
        selectedIndex={rateType}
        onChange={event => setRateType(event.nativeEvent.selectedSegmentIndex)}
        style={styles.segmentedControl}
      />
      {rateType === 0 && (
        <View style={styles.viewOuterContainer}>
          <View>
            <Text style={styles.txtDay}>From</Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={styles.txtInputProjectRate}>
                <TextInput
                  style={styles.textInputProjectTitle}
                  placeholder="Min. Cost"
                  placeholderTextColor={'grey'}
                  onChangeText={text => setMin_hourly_rate(text)}
                  value={min_hourly_rate}
                  keyboardType="numeric"
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontSize: 18,
                  color: 'black',
                }}>
                /hr
              </Text>
            </View>
          </View>

          <View style={{paddingVertical: 10}}>
            <Text style={styles.txtDay}>To</Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={styles.txtInputProjectRate}>
                <TextInput
                  style={styles.textInputProjectTitle}
                  placeholder="Max. Cost"
                  placeholderTextColor={'grey'}
                  onChangeText={text => setMax_hourly_rate(text)}
                  value={max_hourly_rate}
                  keyboardType="numeric"
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontSize: 18,
                  color: 'black',
                }}>
                /hr
              </Text>
            </View>
            <Text style={styles.txtDay}>Set your Hourly Rate</Text>
          </View>

          <View style={styles.closedContainer}>
            <View style={styles.txtHourlyPayment}>
              <LinearGradient
                colors={['#0909E9', '#00D4FF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{borderRadius: 5, padding: 1}}>
                <TouchableOpacity
                  style={styles.BackBtnLiner}
                  onPress={handlePostBackPagePress}>
                  <Text style={styles.txtCategoryLinerBack}>Back</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#0909E9', '#00D4FF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{borderRadius: 5}}>
                <TouchableOpacity onPress={handlePostPagePress}>
                  <Text style={styles.txtSaveSkill}>Next: Deadline</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      )}
      {rateType === 1 && (
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.txtDay}>Maximum Budget</Text>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <View style={styles.txtInputProjectRate}>
              <TextInput
                style={styles.textInputProjectTitle}
                placeholder="Max. Cost"
                placeholderTextColor={'grey'}
                onChangeText={text => setFixed_budget(text)}
                value={fixed_budget}
                keyboardType="numeric"
              />
            </View>
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 18,
                color: 'black',
              }}>
              /hr
            </Text>
          </View>
          <Text style={styles.txtDay}>Set your Project Budget</Text>

          <View style={styles.closedContainer}>
            <View style={styles.txtHourlyPayment}>
              <LinearGradient
                colors={['#0909E9', '#00D4FF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{borderRadius: 5, padding: 1}}>
                <TouchableOpacity
                  style={styles.BackBtnLiner}
                  onPress={handlePostBackPagePress}>
                  <Text style={styles.txtCategoryLinerBack}>Back</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#0909E9', '#00D4FF']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{borderRadius: 5}}>
                <TouchableOpacity onPress={handlePostPagePress}>
                  <Text style={styles.txtSaveSkill}>Next: Deadline</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

AddPostFourthPage.Header = () => {
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
        {/* <Text style={styles.txtHeader}>Post A Job</Text> */}
        <Text style={styles.txtHeadercolor}>Tell us about your budget</Text>
      </LinearGradient>
    </View>
  );
};

export default AddPostFourthPage;
