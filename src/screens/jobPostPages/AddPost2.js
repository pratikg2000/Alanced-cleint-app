import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from '../../them/Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddPostSecondPage = () => {
  const route = useRoute();
  const {title, category} = route.params;

  const [description, setdescription] = useState('');

  const navigation = useNavigation();

  const handlePostPagePress = () => {
    if (!description.trim()) {
      Alert.alert('Validation Error', 'Please enter a job description.');
      return;
    }

    navigation.navigate('AddPostThirdPage', {
      title,
      category,
      description,
    });
  };

  const handlePostBackPagePress = () => {
    navigation.navigate('JobPost');
  };

  return (
    <View style={styles.viewOuterContainer}>
      <View style={{marginTop: 15}}>
        <Text style={styles.txtCategory}>Job Description</Text>
        <ScrollView>
          <View style={styles.txtInputAbout}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={6} // Adjusted for better visibility of the input field
              placeholder="Write Your Job Description Here"
              onChangeText={text => setdescription(text)}
              value={description}
            />
          </View>
        </ScrollView>
      </View>
      {/* <View style={{ marginVertical: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={handlePostBackPagePress} style={styles.BackBtn}>
                        <Text style={styles.txtCategory}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePostPagePress} style={styles.touchSaveStyle}>
                        <Text style={styles.txtSave}>Next: Skills</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
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
              <Text style={styles.txtSaveSkill}>Next: Skills</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

AddPostSecondPage.Header = () => {
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
        {/* <Text style={styles.txtHeader}>Post A Job</Text> */}
        <Text style={styles.txtHeadercolor}>Your Job Description</Text>
      </LinearGradient>
    </View>
  );
};

export default AddPostSecondPage;
