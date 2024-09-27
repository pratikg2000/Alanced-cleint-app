import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  GET_FREELANCER_HIRE_PROJECT,
  GET_FREELANCER_VIEW_BID,
  GET_FREELANCER_VIEW_INVITATIONS,
} from '../../utls/api/AlancedApi';

const AllJob = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [proposalData, setProposalData] = useState([]);

  const fetchJobs = async (pageNumber = 1) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No token found.');
      }

      const response = await axios.get(
        `${GET_FREELANCER_HIRE_PROJECT}?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 3000,
        },
      );

      const jobsWithDetails = await Promise.all(
        (response.data.data || response.data.results)?.map(async job => {
          let skills = [];
          try {
            skills = JSON.parse(job.skills_required.replace(/'/g, '"'));
          } catch (e) {
            console.error('Error parsing skills_required:', e);
          }

          const invitations = await fetchInvitations(job.id, token);
          const proposals = await fetchProposal(job.id, token);

          return {
            ...job,
            skills_required: skills,
            invitations: invitations || 0,
            proposals: proposals || [],
          };
        }) || [],
      );

      setData(prevData =>
        pageNumber === 1 ? jobsWithDetails : [...prevData, ...jobsWithDetails],
      );
      setHasMore(response.data.next !== null);
      setLoading(false);
      setIsFetchingMore(false);
    } catch (error) {
      console.error(
        'Error fetching jobs:',
        error.response ? error.response.data : error.message,
      );
      setError(error.message);
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  const loadMoreJobs = () => {
    if (hasMore && !isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => {
        const nextPage = prevPage + 1;
        fetchJobs(nextPage);
        return nextPage;
      });
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    try {
      await fetchJobs(1);
      handleReload();
    } catch (error) {
      console.log('Error refreshing Data:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const fetchProposal = async (jobId, token) => {
    try {
      const url = `${GET_FREELANCER_VIEW_BID}/${jobId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 3000,
      });

      if (response.data && Array.isArray(response.data.results)) {
        return response.data.results;
      }
    } catch (error) {
      console.error(
        'Error fetching proposal:',
        error.response ? error.response.data : error.message,
      );
      return [];
    }
  };

  const fetchInvitations = async (jobId, token) => {
    try {
      const url = `${GET_FREELANCER_VIEW_INVITATIONS}/${jobId}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 3000,
      });

      if (response.data && response.data.data !== undefined) {
        return response.data.data;
      }
    } catch (error) {
      console.error(
        'Error fetching invitations:',
        error.response ? error.response.data : error.message,
      );
      return 0;
    }
  };

  useEffect(() => {
    fetchJobs();
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

    if (monthsDifference > 0) {
      return `${monthsDifference} Month${
        monthsDifference !== 1 ? 's' : ''
      } Ago`;
    } else if (daysDifference > 0) {
      return `${daysDifference} Day${daysDifference !== 1 ? 's' : ''} Ago`;
    } else {
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    }
  };

  const ProposalNavigat = item => {
    navigation.navigate('ViewProposal', {
      Job: item.id,
      Title: item.title,
      Proposals: item.proposals,
      Page: page,
    });
  };

  const handleReload = () => {
    setError(null);
    setLoading(true);
    fetchJobs();
  };

  const renderItem = ({item}) => {
    const truncatedDate = item.Project_created_at
      ? item.Project_created_at.slice(0, 10)
      : '';
    const month = getTimeSinceUpload(truncatedDate);

    return (
      <View style={styles.contractsAllJobConatiner}>
        <View style={styles.txtHourlyPayment}>
          <Text style={styles.postTxt}>{item.title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtHourly}>{item.Project_Rate} Rate -</Text>
          <Text style={styles.txtHourly}> {item.experience_level} -</Text>
          <Text style={styles.txtHourly}> Posted: {month} </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginVertical: 10,
            }}>
            {Array.isArray(item.skills_required) &&
              item.skills_required.map((skill, index) => (
                <TouchableOpacity
                  key={`${skill}-${item.id}-${index}`}
                  activeOpacity={1}
                  style={styles.linerTouch}>
                  <LinearGradient
                    colors={['#0909E9', '#00D4FF']}
                    style={{borderRadius: 5, padding: 1}}>
                    <Text style={styles.txtHourlysLiner}>{skill}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
        <View style={styles.proposalsContainer}>
          <View>
            <Text style={styles.txtNumber}>
              {Array.isArray(item.proposals)
                ? item.proposals.length
                : item.proposals.count}
            </Text>
            <Text style={styles.propsalsTxtStyle}>Proposals</Text>
          </View>
          <View>
            <Text style={styles.txtNumber}>{item.invitations}</Text>
            <Text style={styles.propsalsTxtStyle}>Messaged</Text>
          </View>
          <View>
            <Text style={styles.txtNumber}>{item.invitations}</Text>
            <Text style={styles.propsalsTxtStyle}>Invitations</Text>
          </View>
        </View>
        <View style={styles.closedContainer}>
          <View style={styles.txtHourlyPayment}>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5, padding: 1}}>
              <TouchableOpacity style={styles.BackBtnLiner}>
                <Text style={styles.txtCategoryLiner}>
                  {item.is_hired ? 'Closed' : 'Open'}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#0909E9', '#00D4FF']}
              style={{borderRadius: 5}}>
              <TouchableOpacity onPress={() => ProposalNavigat(item)}>
                <Text style={styles.txtSave}>View Proposals</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.viewOuterContainer}>
        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          style={styles.toucViewDetails}>
          <TouchableOpacity onPress={handleReload} activeOpacity={0.7}>
            <Text style={styles.txtSave}>Reload</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.viewOuterContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <View style={styles.viewOuterContainer}>
          <LinearGradient
            colors={['#0909E9', '#00D4FF']}
            style={styles.toucViewDetails}>
            <TouchableOpacity onPress={handleReload} activeOpacity={0.7}>
              <Text style={styles.txtSave}>Reload</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : data.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No projects found</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreJobs}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore && <ActivityIndicator size="large" color="#0000ff" />
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#009688']}
            />
          }
        />
      )}
    </View>
  );
};

export default AllJob;
