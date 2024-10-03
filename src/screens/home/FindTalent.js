import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from '../../them/Styles';
import {FREELANCER_GET_VIEW_ALL} from '../../utls/api/AlancedApi';

const Sidebar = ({onClose, onApplyFilter}, ref) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedLang, setSelectedLang] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <View style={{flex: 1}} ref={ref}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.sidebarContent}>
          <Text style={styles.filterText}>Filter by Project Type</Text>

          <View style={styles.dropDownContainer}>
            <Text style={styles.txtCategory}>Category</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item
                  label="SelectCategory"
                  value=" "
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="java"
                  value="java"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Web Development"
                  value="Web Development"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Software Development"
                  value="Software Development"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Data Science"
                  value="Data Science"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Logo Designing"
                  value="Logo Designing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Graphics Designing"
                  value="Graphics Designing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Artificial Intelligence"
                  value="Artificial Intelligence"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Machine Learning"
                  value="Machine Learning"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="UI/UX Designing"
                  value="UI/UX Designing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Mobile App Development"
                  value="Mobile App Development"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Game Development"
                  value="Game Development"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Digital Marketing"
                  value="Digital Marketing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Content Writing"
                  value="Content Writing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="SEO Specialist"
                  value="SEO Specialist"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Cloud Computing"
                  value="Cloud Computing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Cybersecurity"
                  value="Cybersecurity"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="QA & Testing"
                  value="QA & Testing"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Blockchain"
                  value="Blockchain"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Data Entry"
                  value="Data Entry"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Database Administration"
                  value="Database Administration"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Project Management"
                  value="Project Management"
                  style={styles.pickerStyle}
                />
              </Picker>
            </View>
          </View>

          <View style={styles.dropDownContainer}>
            <Text style={styles.txtCategory}>Experience Level</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={selectedLevel}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLevel(itemValue)
                }>
                <Picker.Item
                  label="Select Experience Level"
                  value=" "
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

          <View style={styles.dropDownContainer}>
            <Text style={styles.txtCategory}>Project Type</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={selectedProject}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedProject(itemValue)
                }>
                <Picker.Item
                  label="Select Project Type"
                  value=" "
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Hourly"
                  value="Hourly"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Intermediate"
                  value="Intermediate"
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
            <Text style={styles.txtCategory}>Skills</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={selectedLang}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLang(itemValue)
                }>
                <Picker.Item
                  label="Select Skills"
                  value=" "
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="React"
                  value="React"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Angular"
                  value="Angular"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Vue.js"
                  value="Vue.js"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="JavaScript"
                  value="JavaScript"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Python"
                  value="Python"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Java"
                  value="Java"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Ruby"
                  value="Ruby"
                  style={styles.pickerStyle}
                />
                <Picker.Item label="C" value="C" style={styles.pickerStyle} />
                <Picker.Item
                  label="C++"
                  value="C++"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="MongoDB"
                  value="MongoDB"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="SQL"
                  value="SQL"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Postgresql"
                  value="Postgresql"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="DBMS"
                  value="DBMS"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Oracle"
                  value="Oracle"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Django"
                  value="Django"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="HTML"
                  value="HTML"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="CSS"
                  value="CSS"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Jquery"
                  value="Jquery"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Bootstrap"
                  value="Bootstrap"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Tailwind CSS"
                  value="Tailwind CSS"
                  style={styles.pickerStyle}
                />
              </Picker>
            </View>
          </View>

          <View style={styles.dropDownContainer}>
            <Text style={styles.txtCategory}>Citys</Text>
            <View style={styles.styleLine}>
              <Picker
                style={styles.pickerstyle}
                selectedValue={selectedCity}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCity(itemValue)
                }>
                <Picker.Item
                  label="Select Citys"
                  value=" "
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Indore"
                  value="Indore"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Ujjain"
                  value="Ujjain"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Bhopal"
                  value="Bhopal"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Delhi"
                  value="Delhi"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Gujarat"
                  value="Gujarat"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Pune"
                  value="Pune"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Surat"
                  value="Surat"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Punjab"
                  value="Punjab"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Mumbai"
                  value="Mumbai"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Bombay"
                  value="Bombay"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Bengaluru"
                  value="Bengaluru"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Kolkata"
                  value="Kolkata"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Chennai"
                  value="Chennai"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Hyderabad"
                  value="Hyderabad"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Ahmedabad"
                  value="Ahmedabad"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Jaipur"
                  value="Jaipur"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Lucknow"
                  value="Lucknow"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Kanpur"
                  value="Kanpur"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Varanasi"
                  value="Varanasi"
                  style={styles.pickerStyle}
                />
                <Picker.Item
                  label="Srinagar"
                  value="Srinagar"
                  style={styles.pickerStyle}
                />
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            onPress={() =>
              onApplyFilter(
                selectedProject,
                selectedValue,
                selectedLevel,
                selectedLang,
                selectedCity,
              )
            }
            style={styles.toucViewDetails}>
            <Text style={styles.ViewTxt}>Apply Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.toucViewDetails}>
            <Text style={styles.ViewTxt}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const FindTalent = () => {
  const navigation = useNavigation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [slideAnim] = useState(
    new Animated.Value(Dimensions.get('window').width),
  );
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjectValue, setFilteredProjectValue] = useState('');
  const [filteredProjectLevel, setFilteredProjectLevel] = useState('');
  const [filteredProjectType, setFilteredProjectType] = useState('');
  const [filteredProjectLang, setFilteredProjectLang] = useState('');
  const [filteredProjectCity, setFilteredProjectCity] = useState('');
  const debounceTimeout = useRef();
  const overlayRef = useRef(null);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      setPage(1);
      await fetchViewAllProject(
        1,
        searchQuery,
        filteredProjectValue,
        filteredProjectLevel,
        filteredProjectType,
        filteredProjectLang,
        filteredProjectCity,
        true,
      );
      resetFilters();
    } catch (error) {
      console.log('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  }, [
    searchQuery,
    filteredProjectValue,
    filteredProjectLevel,
    filteredProjectType,
    filteredProjectLang,
    filteredProjectCity,
  ]);

  const resetFilters = () => {
    handleReload();
    setSearchQuery('');
    setFilteredProjectType('');
    setFilteredProjectValue('');
    setFilteredProjectLevel('');
    setFilteredProjectLang('');
    setFilteredProjectCity('');
  };

  const toggleSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: sidebarVisible ? -Dimensions.get('window').width : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setSidebarVisible(!sidebarVisible));
  };

  const closeSidebar = () => {
    if (sidebarVisible) {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get('window').width,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setSidebarVisible(false));
    }
  };

  const fetchViewAllProject = async (
    pageNumber = 1,
    query = searchQuery,
    value = filteredProjectValue,
    level = filteredProjectLevel,
    type = filteredProjectType,
    lang = filteredProjectLang,
    city = filteredProjectCity,
    resetData = false,
  ) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No Token found');
      }

      const params = {
        search_query: query || undefined,
        category: value || undefined,
        experience_level: level || undefined,
        rate: type || undefined,
        skills: lang || undefined,
        project_owner_location: city || undefined,
      };

      Object.keys(params).forEach(
        key => params[key] === undefined && delete params[key],
      );

      const queryParams = new URLSearchParams(params);
      const fullURL = `${FREELANCER_GET_VIEW_ALL}?page=${pageNumber}&${queryParams.toString()}`;
      console.log(`Filtered Request URL: ${fullURL}`);

      if (resetData) setData([]);
      setLoading(true);

      const jobsResponse = await axios.get(fullURL, {
        headers: {Authorization: `Bearer ${token}`},
      });
      // console.log('data', jobsResponse.data);
      const {results, next} = jobsResponse.data;

      if (!results || results.length === 0) {
        if (pageNumber === 1) {
          setData([]);
        }
        setHasMore(false);
        setLoading(false);
        return;
      }

      const jobsWithCounts = await Promise.all(
        results.map(async job => {
          let skillsArray = [];
          try {
            let skillsStr = job.skills;
            skillsStr = skillsStr.replace(/'/g, '"');

            if (!skillsStr.startsWith('[') && !skillsStr.endsWith(']')) {
              skillsStr = `[${skillsStr}]`;
            }

            skillsArray = JSON.parse(skillsStr);
          } catch (e) {
            console.log(
              'Error parsing skills:',
              e,
              'Original string:',
              job.skills,
            );
          }

          return {
            ...job,
            skills: skillsArray,
          };
        }),
      );

      setData(prevData =>
        pageNumber === 1 ? jobsWithCounts : [...prevData, ...jobsWithCounts],
      );
      setHasMore(next !== null);

      if (next !== null) {
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.log(
        'Error fetching jobs:',
        error.response ? error.response.data : error.message,
      );
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchViewAllProject(
      1,
      searchQuery,
      filteredProjectValue,
      filteredProjectLevel,
      filteredProjectType,
      filteredProjectLang,
      filteredProjectCity,
      true,
    );
  }, [
    filteredProjectValue,
    filteredProjectLevel,
    filteredProjectType,
    filteredProjectLang,
    filteredProjectCity,
  ]);

  const debounceFetchJobs = query => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setSearchQuery(query);
      setPage(1);
      fetchViewAllProject(1, query);
    }, 500);
  };

  useEffect(() => {
    debounceFetchJobs(searchQuery);
  }, [searchQuery]);

  const loadMore = () => {
    if (hasMore && !isFetchingMore) {
      setIsFetchingMore(true);
      fetchViewAllProject(page);
    }
  };

  const handleReload = () => {
    setError(null);
    // setLoading(true);
    setPage(1);
    fetchViewAllProject(
      1,
      searchQuery,
      filteredProjectValue,
      filteredProjectLevel,
      filteredProjectType,
      filteredProjectLang,
      filteredProjectCity,
    );
  };

  const handleApplyFilter = (
    projectType,
    projectValue,
    projectLevel,
    projectLang,
    projectCity,
  ) => {
    setFilteredProjectType(projectType);
    setFilteredProjectValue(projectValue);
    setFilteredProjectLevel(projectLevel);
    setFilteredProjectLang(projectLang);
    setFilteredProjectCity(projectCity);
    setPage(1);
    fetchViewAllProject(
      1,
      searchQuery,
      projectValue,
      projectLevel,
      projectType,
      projectLang,
      projectCity,
      true,
    );
    toggleSidebar();
  };

  const DetailsNavigation = item => {
    console.log('id', item.id);
    navigation.navigate('ViewDetails', {
      id: item.id,
    });
  };

  const HireNavigationPage = item => {
    console.log('id', item.id);
    navigation.navigate('HirePage', {
      id: item.id,
    });
  };

  const renderItem = ({item}) => {
    const image = item.images_logo
      ? `https://www.api.alanced.com/${item.images_logo}`
      : '';
    return (
      <View style={styles.viewOuterContainer}>
        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <View style={styles.PostStyle}>
              <View style={styles.posterStyle}>
                {image ? (
                  <Image source={{uri: image}} style={styles.imageHirerPost} />
                ) : (
                  <Text>No Image Available</Text>
                )}
              </View>
              <View style={{width: '50%', marginHorizontal: 10}}>
                <Text style={styles.txtPost}>
                  {item.first_Name} {item.last_Name}
                </Text>
                <Text style={{color: 'grey'}}>{item.category}</Text>
                <View style={styles.optionOuterContainer}>
                  <Ionicons
                    name="location-outline"
                    size={18}
                    style={{paddingVertical: 4}}
                    color={'rgba(64, 65, 69, 1)'}
                  />
                  <Text style={styles.txtLoaction}>
                    {' '}
                    {item.Address ? item.Address : 'NA'}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.txtHourlys}>{item.about}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginVertical: 10,
                  }}>
                  {Array.isArray(item.skills) &&
                    item.skills.map(skill => (
                      <TouchableOpacity
                        key={skill}
                        activeOpacity={1}
                        style={styles.linerTouch}>
                        <LinearGradient
                          colors={['#0909E9', '#00D4FF']}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5, padding: 1}}>
                          <Text style={styles.txtHourlysLiner}>{skill}</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    ))}
                </View>
              </ScrollView>

              <View style={styles.txtHourlyPayment}>
                <Text style={styles.txtpayment}>{item.experience_level}</Text>
                <Text style={styles.txtpayment}>
                  ${item.hourly_rate}/hr Hourly Rate
                </Text>
              </View>

              <View style={styles.txtHourlyPayment}>
                <LinearGradient
                  colors={['#0909E9', '#00D4FF']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{borderRadius: 5, padding: 1}}>
                  <TouchableOpacity
                    style={styles.BackBtnLiner}
                    onPress={() => DetailsNavigation(item)}>
                    <Text style={styles.txtCategoryLiner}>
                      View More Details
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity
                  style={styles.touchbtnLiner}
                  onPress={() => HireNavigationPage(item)}>
                  <LinearGradient
                    colors={['#0909E9', '#00D4FF']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{borderRadius: 5, padding: 1}}>
                    <Text style={styles.txtSave}>Hire Now</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingMore && <ActivityIndicator size="large" color="#0000ff" />
        }
        ListHeaderComponent={
          <View style={styles.viewOuterContainer}>
            <View style={styles.searchContainerFilter}>
              <View style={styles.searchTextFilter}>
                <EvilIcons
                  name="search"
                  size={25}
                  color={'black'}
                  style={styles.searchStyleFilter}
                />
                <TextInput
                  placeholder="Search..."
                  placeholderTextColor="grey"
                  style={styles.txtSaved}
                  value={searchQuery}
                  onChangeText={text => setSearchQuery(text)}
                />
              </View>
              <TouchableOpacity
                onPress={toggleSidebar}
                style={styles.filterButton}>
                <Ionicons name="funnel" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        }
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      {sidebarVisible && (
        <TouchableWithoutFeedback onPress={closeSidebar} ref={overlayRef}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View
        style={[styles.sidebar, {transform: [{translateX: slideAnim}]}]}>
        <Sidebar
          onClose={toggleSidebar}
          onApplyFilter={handleApplyFilter}
          selectedType={filteredProjectType}
          selectedValue={filteredProjectValue}
          selectedLevel={filteredProjectLevel}
          selectedLang={filteredProjectLang}
          selectedCity={filteredProjectCity}
        />
      </Animated.View>
    </View>
  );
};

FindTalent.Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
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
            color="white"
            size={30}
            style={{padding: 13}}
          />
        </TouchableOpacity>
        <Text style={styles.txtHeadercolor}>Job</Text>
      </LinearGradient>
    </View>
  );
};
export default FindTalent;
