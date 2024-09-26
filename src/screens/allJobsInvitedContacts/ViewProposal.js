import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../them/Styles';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {POST_FREELANCER_HIRE} from '../../utls/api/AlancedApi';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ViewProposal = ({route}) => {
  const {Job, Proposals, Title} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [hiring_Budget, setHiring_Budget] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  const isFormValid =
    hiring_Budget && message && selectedProject && selectedFreelancer;

  const openModal = freelancerId => {
    setSelectedFreelancer(freelancerId);
    setModalVisible(true);
  };

  const handleSendProposalPress = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const postData = {
      hiring_budget: hiring_Budget,
      hiring_budget_type: selectedProject,
      message: message,
      project: Job,
      project_title: Title,
    };

    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No token found.');
      }

      setLoading(true);

      const url = `${POST_FREELANCER_HIRE}/${selectedFreelancer}`;
      console.log('api', `${POST_FREELANCER_HIRE}/${selectedFreelancer}`);
      const response = await axios.post(url, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Proposal submitted successfully!');
      } else {
        Alert.alert(
          'Error',
          `Failed to submit proposal. Status: ${response.status}`,
        );
      }
    } catch (error) {
      Alert.alert('Error', `${error.response?.data.message}`);
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderProposalItem = ({item}) => {
    const image = item.freelancer_profilepic
      ? `https://www.api.alanced.com/${item.freelancer_profilepic}`
      : '';

    let skills = [];
    try {
      skills = JSON.parse(item.freelancer_skills.replace(/'/g, '"'));
    } catch (error) {
      console.error('Error parsing freelancer_skills:', error);
    }

    return (
      <View style={styles.contractsAllJobConatiner}>
        <View style={styles.locationIcon}>
          <View>
            {image ? (
              <Image source={{uri: image}} style={styles.imagePost} />
            ) : (
              <Text>No Image Available</Text>
            )}
          </View>

          <View style={{paddingHorizontal: 15, width: '80%'}}>
            <Text style={styles.postTxt}>{item.freelancer_name}</Text>
            <View style={styles.freelancerPostStyle}>
              <Text style={styles.txtSkill}>${item.bid_amount}</Text>
              <Text style={styles.txtSkill}>{item.bid_type}</Text>
              <Text style={styles.txtSkill}>
                {item.freelancer_address || 'NA'}
              </Text>
            </View>
            <Text style={{fontSize: 16, textAlign: 'justify', color: 'black'}}>
              Cover Letter:{' '}
              <Text style={{color: 'gray'}}>{item.description}</Text>
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginVertical: 10,
            }}>
            {skills.map(skill => (
              <View key={skill} activeOpacity={1} style={styles.linerTouch}>
                <LinearGradient
                  colors={['#0909E9', '#00D4FF']}
                  style={{borderRadius: 5, padding: 1}}>
                  <Text style={styles.txtHourlysLiner}>{skill}</Text>
                </LinearGradient>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.closedContainer}>
          <View style={styles.txtHourlyPayment}>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5}}>
              <TouchableOpacity>
                <Text style={styles.txtSave}>Message</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5, padding: 1}}>
              <TouchableOpacity
                style={styles.BackBtnLiner}
                onPress={() => openModal(item.freelancer_id)}>
                <Text style={styles.txtCategoryLiner}>Hire</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.viewOuterContainer}>
      <Text style={styles.postTxt}>{Title}</Text>
      {Proposals && Proposals.length > 0 ? (
        <FlatList
          data={Proposals}
          renderItem={renderProposalItem}
          keyExtractor={item => item.freelancer_id.toString()}
        />
      ) : (
        <View style={styles.viewFrelancerContainer}>
          <Text style={styles.txtProfile}>No Proposals Available</Text>
        </View>
      )}
      <View style={styles.container}>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Add Data</Text>
                <View style={styles.dropDownContainer}>
                  <Text style={styles.txtSaved}>Project Title</Text>
                  <View style={styles.ProjectTitle}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      value={Title}
                      editable={false}
                      style={{fontSize: 18, color: 'black'}}
                    />
                  </View>
                </View>
                <View style={styles.dropDownContainer}>
                  <Text style={styles.txtCategory}>Hiring Budget</Text>
                  <ScrollView>
                    <View style={styles.txtInputProjectTitle}>
                      <TextInput
                        style={styles.textInputProjectTitle}
                        keyboardType="number-pad"
                        onChangeText={setHiring_Budget}
                        value={hiring_Budget}
                      />
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.dropDownContainer}>
                  <Text style={styles.txtCategory}>Budget Type</Text>
                  <View style={styles.styleLine}>
                    <Picker
                      style={styles.pickerstyle}
                      selectedValue={selectedProject}
                      onValueChange={itemValue =>
                        setSelectedProject(itemValue)
                      }>
                      <Picker.Item
                        label="Select Project Type"
                        value=""
                        style={styles.pickerStyle}
                      />
                      <Picker.Item
                        label="Hourly"
                        value="Hourly"
                        style={styles.pickerStyle}
                      />
                      <Picker.Item
                        label="Fixed"
                        value="Fixed"
                        style={styles.pickerStyle}
                      />
                    </Picker>
                  </View>
                </View>
                <View style={styles.dropDownContainer}>
                  <Text style={styles.txtCategory}>Message</Text>
                  <ScrollView>
                    <View style={styles.txtInputProjectTitle}>
                      <TextInput
                        style={styles.textInputProjectTitle}
                        multiline={true}
                        numberOfLines={1}
                        onChangeText={setMessage}
                        value={message}
                      />
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.dropDownContainer}>
                  <View style={styles.closedContainer}>
                    <View style={styles.txtHourlyPayment}>
                      <LinearGradient
                        colors={['#0909E9', '#00D4FF']}
                        style={{borderRadius: 5}}>
                        <TouchableOpacity
                          onPress={handleSendProposalPress}
                          disabled={!isFormValid || loading}>
                          <Text
                            style={[
                              styles.txtSave,
                              {opacity: !isFormValid || loading ? 0.5 : 1},
                            ]}>
                            {loading ? 'Submitting...' : 'Hire'}
                          </Text>
                        </TouchableOpacity>
                      </LinearGradient>
                      <LinearGradient
                        colors={['#0909E9', '#00D4FF']}
                        style={{borderRadius: 5, padding: 1}}>
                        <TouchableOpacity
                          style={styles.BackBtnLiner}
                          onPress={closeModal}>
                          <Text style={styles.txtCategoryLiner}>Cancel</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
};

ViewProposal.Header = () => {
  const navigation = useNavigation();
  handleProfilePress = () => {
    navigation.navigate('AllJob');
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
        <Text style={styles.txtHeadercolor}>Tell us about your budget</Text>
      </LinearGradient>
    </View>
  );
};

export default ViewProposal;
