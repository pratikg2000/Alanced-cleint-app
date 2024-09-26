import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import styles from '../../them/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const JobPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState();

  const navigation = useNavigation();

  const handlePostPagePress = () => {
    if (!title.trim()) {
      Alert.alert('Validation Error', 'Please enter a job title.');
      return;
    }

    if (!category) {
      Alert.alert('Validation Error', 'Please select a Job Category.');
      return;
    }

    navigation.navigate('AddPostSecondPage', {
      title,
      category,
    });
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={styles.viewOuterContainer}>
          <View>
            <Text style={styles.titlePost}>Your Job Post Title</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.txtDay}>Job Title</Text>
            <ScrollView>
              <View style={styles.txtInputProjectTitle}>
                <TextInput
                  style={styles.textInputProjectTitlePost}
                  placeholder="Enter Job Title"
                  placeholderTextColor="grey"
                  onChangeText={text => setTitle(text)}
                  value={title}
                />
              </View>
            </ScrollView>
          </View>
          <View style={{paddingVertical: 5}}>
            <Text style={styles.txtCategory}>Job Category</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={category}
                onValueChange={itemValue => setCategory(itemValue)}>
                <Picker.Item label="Select Category" value="" />
                <Picker.Item
                  label="Artificial Intelligence"
                  value="Artificial Intelligence"
                />
                <Picker.Item label="Blockchain" value="Blockchain" />
                <Picker.Item label="Cloud Computing" value="Cloud Computing" />
                <Picker.Item label="Content Writing" value="Content Writing" />
                <Picker.Item label="Cybersecurity" value="Cybersecurity" />
                <Picker.Item label="Data Entry" value="Data Entry" />
                <Picker.Item label="Data Science" value="Data Science" />
                <Picker.Item
                  label="Database Administration"
                  value="Database Administration"
                />
                <Picker.Item
                  label="Digital Marketing"
                  value="Digital Marketing"
                />
                <Picker.Item
                  label="Game Development"
                  value="Game Development"
                />
                <Picker.Item
                  label="Graphics Designing"
                  value="Graphics Designing"
                />
                <Picker.Item label="Logo Designing" value="Logo Designing" />
                <Picker.Item
                  label="Machine Learning"
                  value="Machine Learning"
                />
                <Picker.Item
                  label="Mobile App Development"
                  value="Mobile App Development"
                />
                <Picker.Item
                  label="Project Management"
                  value="Project Management"
                />
                <Picker.Item label="QA & Testing" value="QA & Testing" />
                <Picker.Item label="SEO Specialist" value="SEO Specialist" />
                <Picker.Item
                  label="Software Development"
                  value="Software Development"
                />
                <Picker.Item label="UI/UX Designing" value="UI/UX Designing" />
                <Picker.Item label="Video Editing" value="Video Editing" />
                <Picker.Item label="Web Designing" value="Web Designing" />
                <Picker.Item label="Web Development" value="Web Development" />
              </Picker>
            </View>
          </View>
          <View>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.toucViewDetails}>
              <TouchableOpacity
                onPress={handlePostPagePress}
                activeOpacity={0.7}>
                <Text style={styles.txtSave}>Next: Job Description</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

JobPost.Header = () => {
  const navigation = useNavigation();
  handleProfilePress = () => {
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
        {/* <Text style={styles.txtHeader}>Post A Job</Text> */}
        <Text style={styles.txtHeadercolor}>Post A Job</Text>
      </LinearGradient>
    </View>
  );
};

export default JobPost;
