import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const OPTIONS = [
  {id: 'React', name: 'React'},
  {id: 'Angular', name: 'Angular'},
  {id: 'Vue.js', name: 'Vue.js'},
  {id: 'JavaScript', name: 'JavaScript'},
  {id: 'Python', name: 'Python'},
  {id: 'Java', name: 'Java'},
  {id: 'Ruby', name: 'Ruby'},
  {id: 'C++', name: 'C++'},
  {id: 'C', name: 'C'},
  {id: 'MongoDB', name: 'MongoDB'},
  {id: 'SQL', name: 'SQL'},
  {id: 'Oracle', name: 'Oracle'},
  {id: 'Postgresql', name: 'Postgresql'},
  {id: 'Django', name: 'Django'},
  {id: 'HTML', name: 'HTML'},
  {id: 'CSS', name: 'CSS'},
  {id: 'JQuery', name: 'JQuery'},
  {id: 'Bootstrap', name: 'Bootstrap'},
  {id: 'Tailwind_CSS', name: 'Tailwind CSS'},
  {id: 'React Native', name: 'React Native'},
];

const AddPostThirdPage = ({navigation}) => {
  const route = useRoute();
  const {title, category, description} = route.params;
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const lineWidth = useRef(new Animated.Value(0)).current;

  const animateLine = () => {
    Animated.timing(lineWidth, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateLine();
  }, []);

  const handleSelect = item => {
    setSkillsRequired(prev => {
      if (prev.includes(item.id)) {
        return prev.filter(i => i !== item.id);
      } else {
        return [...prev, item.id];
      }
    });
  };

  const handleSubmit = () => {
    if (skillsRequired.length === 0) {
      Alert.alert('Validation Error', 'Please select at least one skill.');
      return;
    }

    console.log('Selected Items:', skillsRequired);
    navigation.navigate('AddPostFourthPage', {
      title: title,
      category: category,
      description: description,
      skills_required: skillsRequired,
    });
  };

  const filteredOptions = searchQuery
    ? OPTIONS.filter(option =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <View style={styles.viewOuterContainer}>
      <View
        style={{
          borderWidth: 1,
          height: 5,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 15,
        }}>
        <Animated.View style={[styles.linestyle, {width: lineWidth}]} />
      </View>
      <View style={styles.multicontainer}>
        <Text style={styles.txtDaySkills}>Select Multiple Items</Text>
        <TextInput
          placeholder="Search language"
          placeholderTextColor={'grey'}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSelectionChange=""
          style={styles.searchBar}
        />
        {skillsRequired.length > 0 && (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedTitle}>Selected Skills:</Text>
            <View style={styles.selectedItems}>
              {skillsRequired.map(skillId => {
                const skill = OPTIONS.find(option => option.id === skillId);
                return skill ? (
                  <Text key={skill.id} style={styles.selectedItem}>
                    {skill.name}
                  </Text>
                ) : null;
              })}
            </View>
          </View>
        )}
        {searchQuery && filteredOptions.length > 0 && (
          <View style={styles.dropdownContainer}>
            <FlatList
              data={filteredOptions}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.freelancertxt,
                    skillsRequired.includes(item.id) && styles.itemSelected,
                  ]}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.styleNumber}>{item.name}</Text>
                </TouchableOpacity>
              )}
              style={styles.dropdownList}
            />
          </View>
        )}
        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.toucViewDetailsNext}>
          <TouchableOpacity onPress={handleSubmit} activeOpacity={0.7}>
            <Text style={styles.txtSave}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

AddPostThirdPage.Header = () => {
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
        <Text style={styles.txtHeadercolor}>Your Job Skills</Text>
      </LinearGradient>
    </View>
  );
};

export default AddPostThirdPage;
