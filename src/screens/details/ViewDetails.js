import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ACCOUNT_FREEELANCER,
  FREELANCER_EMPLOYMENT,
  FREELANCER_REVIEW,
  FREELANCER_SELF_PROJECT,
} from '../../utls/api/AlancedApi';
import styles from '../../them/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const ViewDetails = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [reViewData, setReViewData] = useState(null);
  const [employmentData, setEmploymentData] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const navigation = useNavigation();
  const {id} = route.params;
  const maxReviewsToShow = 3;

  const fetchFreelanceProfile = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token Was Not Found');
      }

      const url = `${ACCOUNT_FREEELANCER}/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
      // console.log('response', response.data);
    } catch (error) {
      if (error.response) {
        console.log('Error status code1:', error.response.status);
        console.log('Error response data1:', error.response.data);
      } else {
        console.log('Error message1:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchFreelanceEmploymentData = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token Was Not Found');
      }

      const url = `${FREELANCER_EMPLOYMENT}/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmploymentData(response.data);
      // console.log('response', response.data);
    } catch (error) {
      if (error.response) {
        console.log('Error status code1:', error.response.status);
        console.log('Error response data1:', error.response.data);
      } else {
        console.log('Error message1:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const fetchFreelancereViewData = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token Was Not Found');
      }

      const url = `${FREELANCER_REVIEW}/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReViewData(response.data);
      // console.log('response', response.data);
    } catch (error) {
      if (error.response) {
        console.log('Error status code1:', error.response.status);
        console.log('Error response data1:', error.response.data);
      } else {
        console.log('Error message1:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPortfolioUrl = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token Was Not Found');
      }
      const url = `${FREELANCER_SELF_PROJECT}/${id}?page=${pageNumber}`;
      console.log('url', url);

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const portfolioData = response.data.results.map(item => ({
        ...item,
        imageUrlPortfolio: item.images_logo
          ? `https://www.api.alanced.com${item.images_logo}`
          : null, // Handle null or missing image
      }));

      setPortfolioData(portfolioData);
      console.log('response', portfolioData);
    } catch (error) {
      if (error.response) {
        console.log('Error status code:', error.response.status);
        console.log('Error response data:', error.response.data);
      } else {
        console.log('Error message:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFreelanceProfile();
    fetchFreelanceEmploymentData();
    fetchFreelancereViewData();
    fetchPortfolioUrl();
  }, [id]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderStars = rating => {
    const stars = [];
    const maxRating = 5;
    const roundedRating = Math.floor(rating);
    const isHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= maxRating; i++) {
      if (i <= roundedRating) {
        stars.push(
          <Ionicons
            key={i}
            name="star"
            size={20}
            color="#FFD700"
            style={{marginRight: 2}}
          />,
        );
      } else if (i === roundedRating + 1 && isHalfStar) {
        stars.push(
          <Ionicons
            key={i}
            name="star-half"
            size={20}
            color="#FFD700"
            style={{marginRight: 2}}
          />,
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={20}
            color="#FFD700"
            style={{marginRight: 2}}
          />,
        );
      }
    }

    return stars;
  };

  if (!data) {
    return (
      <View>
        <Text>No data available.</Text>
      </View>
    );
  }

  const formatDateToMonthYear = dateString => {
    if (!dateString) return 'Present';

    const dateObj = new Date(dateString);
    const options = {year: 'numeric', month: 'long'};
    return dateObj.toLocaleDateString('en-US', options);
  };

  const imageUrl = data.images_logo
    ? `https://www.api.alanced.com/${data.images_logo}`
    : '';

  const handleDetailsPortfolioNavigation = item => {
    console.log('image', item.imageUrlPortfolio);
    navigation.navigate('DetailsPortfolio', {
      project_title: item.project_title,
      skills: item.skills_used,
      category: item.category,
      project_description: item.project_description,
      project_link: item.project_link,
      imageUrlPortfolio: item.imageUrlPortfolio,
    });
  };

  return (
    <ScrollView>
      <View style={styles.viewOuterContainer}>
        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <View style={styles.PostStyle}>
              <View style={styles.posterStyle}>
                {imageUrl ? (
                  <Image
                    source={{uri: imageUrl}}
                    style={styles.imageHirerPost}
                  />
                ) : (
                  <Image source={defaultImage} style={styles.imageHirerPost} />
                )}
              </View>
              <View style={{width: '50%', marginHorizontal: 10}}>
                <Text style={styles.txtPost}>
                  {data.first_Name} {data.last_Name}
                </Text>
                <Text style={{color: 'grey'}}>{data.category || 'NA'}</Text>
                <View style={styles.optionOuterContainer}>
                  <Ionicons
                    name="location-outline"
                    size={18}
                    style={{paddingVertical: 4}}
                    color={'rgba(64, 65, 69, 1)'}
                  />
                  <Text style={styles.txtLoaction}>
                    {' '}
                    {data.Address ? data.Address : 'NA'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postEmploymentDataConatiner}>
            <Text style={{color: 'grey'}}>Experience Level: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {data.experience_level || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postEmploymentDataConatiner}>
            <Text style={{color: 'grey'}}>Category: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {data.category || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postEmploymentDataConatiner}>
            <Text style={{color: 'grey'}}>Hourly Rate: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              ${data.hourly_rate || 'NA'}/hr
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postEmploymentDataConatiner}>
            <Text style={{color: 'grey'}}>Educations: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {data.qualification || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={{color: 'grey'}}>Languages</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                {data.Language &&
                JSON.parse(data.Language.replace(/'/g, '"')).length > 0 ? (
                  JSON.parse(data.Language.replace(/'/g, '"')).map(
                    (skill, index) => (
                      <View style={styles.linerTouch} key={index}>
                        <LinearGradient
                          colors={['#0909E9', '#00D4FF']}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            borderRadius: 5,
                            padding: 1,
                            marginVertical: 5,
                          }}>
                          <Text style={styles.txtHourlysLiner}>{skill}</Text>
                        </LinearGradient>
                      </View>
                    ),
                  )
                ) : (
                  <Text style={{color: 'grey'}}>No languages available</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Skills</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                {data.skills ? (
                  JSON.parse(data.skills.replace(/'/g, '"')).length > 0 ? (
                    JSON.parse(data.skills.replace(/'/g, '"')).map(
                      (skill, index) => (
                        <View style={styles.linerTouch} key={index}>
                          <LinearGradient
                            colors={['#0909E9', '#00D4FF']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            style={{borderRadius: 5, padding: 1}}>
                            <Text style={styles.txtHourlysLiner}>{skill}</Text>
                          </LinearGradient>
                        </View>
                      ),
                    )
                  ) : (
                    <Text style={{color: 'grey'}}>No skills available</Text>
                  )
                ) : (
                  <Text style={{color: 'grey'}}>No skills available</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Employment History</Text>
            {employmentData &&
            employmentData.data &&
            employmentData.data.length > 0 ? (
              <>
                <Text style={{color: '#47515e', fontWeight: '500'}}>
                  {employmentData.data[0].Company_Designation || 'NA'} |{' '}
                  {employmentData.data[0].Freelancer_Company_Name || 'NA'}
                </Text>
                <Text style={{color: 'grey'}}>
                  {formatDateToMonthYear(
                    employmentData.data[0].Company_Joining_date,
                  )}{' '}
                  -{' '}
                  {formatDateToMonthYear(
                    employmentData.data[0].Company_Leaving_date,
                  )}
                </Text>
              </>
            ) : (
              <Text style={{color: 'grey'}}>
                No employment history available
              </Text>
            )}
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>About Freelancer</Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {data.about || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Reviews</Text>
            {reViewData && reViewData.data && reViewData.data.length > 0 ? (
              <>
                {reViewData.data
                  .slice(
                    0,
                    showAllReviews ? reViewData.data.length : maxReviewsToShow,
                  )
                  .map((review, index) => (
                    <View key={index} style={styles.linerTouch}>
                      <LinearGradient
                        colors={['#0909E9', '#00D4FF']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={{
                          borderRadius: 10,
                          padding: 1,
                          marginVertical: 10,
                        }}>
                        <View style={styles.postEmploymentDataConatinerRating}>
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {review.Project_Name}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            {renderStars(review.rating)}
                          </View>
                        </View>
                      </LinearGradient>
                    </View>
                  ))}

                {reViewData.data.length > maxReviewsToShow &&
                  !showAllReviews && (
                    <TouchableOpacity onPress={() => setShowAllReviews(true)}>
                      <Text
                        style={{
                          color: '#00D4FF',
                          textAlign: 'center',
                          marginVertical: 10,
                        }}>
                        See More
                      </Text>
                    </TouchableOpacity>
                  )}

                {showAllReviews && (
                  <TouchableOpacity onPress={() => setShowAllReviews(false)}>
                    <Text
                      style={{
                        color: '#00D4FF',
                        textAlign: 'center',
                        marginVertical: 10,
                      }}>
                      Show Less
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <Text style={{color: 'grey'}}>No reviews available</Text>
            )}
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Portfolio</Text>
            {portfolioData.length > 0 ? (
              portfolioData.map(item => (
                <TouchableOpacity
                  key={item.project_id}
                  onPress={() => handleDetailsPortfolioNavigation(item)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginVertical: 10,
                      color: 'blue',
                      textDecorationLine: 'underline',
                    }}>
                    {item.project_title}
                  </Text>

                  {item.imageUrlPortfolio ? (
                    <Image
                      source={{uri: item.imageUrlPortfolio}}
                      style={styles.imageStylePortfolio}
                    />
                  ) : (
                    <Text style={styles.noImageText}>No image available</Text>
                  )}
                </TouchableOpacity>
              ))
            ) : (
              <Text style={{fontWeight: 'bold'}}>
                Portfolio data is currently unavailable.
              </Text>
            )}
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default ViewDetails;
