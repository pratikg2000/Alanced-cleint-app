import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from '../../them/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {FREELANCER_INVITED_FREELANCER} from '../../utls/api/AlancedApi';
import LinearGradient from 'react-native-linear-gradient';

const InvitedFreelancer = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchInvitedFreelancer = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('Token was not found');
      }

      const response = await axios.get(
        `${FREELANCER_INVITED_FREELANCER}?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 3000,
        },
      );

      const newResults = response.data.results || [];
      setData(prevData =>
        pageNumber === 1 ? newResults : [...prevData, ...newResults],
      );

      setHasMore(!!response.data.next);
    } catch (error) {
      console.error(
        'Error fetching invited freelancer data:',
        error.response?.data?.message || error.message,
      );
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  const loadMoreFreelancers = () => {
    if (hasMore && !isFetchingMore) {
      setIsFetchingMore(true);
      setPageNumber(prevPage => {
        const nextPage = prevPage + 1;
        fetchInvitedFreelancer(nextPage);
        return nextPage;
      });
    }
  };

  useEffect(() => {
    fetchInvitedFreelancer();
  }, []);

  const getTimeSinceUpload = uploadDate => {
    if (!uploadDate) return null;

    const [year, month, day] = uploadDate.split('-');
    const uploadDateObj = new Date(year, month - 1, day);

    const currentDate = new Date();
    const timeDifference = currentDate - uploadDateObj;

    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference =
      (currentDate.getFullYear() - uploadDateObj.getFullYear()) * 12 +
      (currentDate.getMonth() - uploadDateObj.getMonth());

    if (daysDifference >= 30) {
      return `${monthsDifference} Month${
        monthsDifference !== 1 ? 's' : ''
      } Ago`;
    } else if (daysDifference > 0) {
      return `${daysDifference} Day${daysDifference !== 1 ? 's' : ''} Ago`;
    } else {
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    }
  };

  const renderItem = ({item}) => {
    const truncatedDate = item.hired_at ? item.hired_at.slice(0, 10) : '';
    const month = getTimeSinceUpload(truncatedDate);
    return (
      <View style={styles.viewOuterContainer}>
        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtpostAboutClient}>Sent: {month}</Text>
            <View style={styles.txtHourlyPayment}>
              <Text style={styles.logtxtStyle}>{item.project_title}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={styles.txtBudget}>{item.freelancer_name}</Text>
              <Text style={styles.crmContractsStyle}>
                {item.freelancer_accepted ? (
                  <Text style={{color: '#2563eb'}}>Accepted</Text>
                ) : item.freelancer_rejected ? (
                  <Text style={{color: '#d22424'}}>rejected</Text>
                ) : (
                  <Text style={{color: '#e2a804'}}>pending</Text>
                )}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 5,
              }}>
              {/* <Text style={styles.txtBudget}>Sent: {month}</Text> */}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View>
      {loading && pageNumber === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.hire_id.toString()}
          onEndReached={loadMoreFreelancers}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default InvitedFreelancer;
