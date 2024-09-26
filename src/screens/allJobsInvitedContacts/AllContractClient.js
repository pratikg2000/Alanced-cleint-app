import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from '../../them/Styles';
import LinearGradient from 'react-native-linear-gradient';

const AllContractClient = () => {
  return (
    <View style={styles.viewOuterContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.searchMessageContainer}>
          <EvilIcons
            name="search"
            size={30}
            color={'black'}
            style={styles.searchStyle}
          />
          <TextInput placeholder="Search..." style={{fontSize: 18}} />
        </View>
      </View>
      <View style={styles.contractsConatiner}>
        <View style={styles.txtHourlyPayment}>
          <Text style={styles.txtName}>crm Application</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <Text style={styles.txtBudget}>Hired by: </Text>
            <Text style={styles.txtcrmApplication}>sachin sharma</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 8}}>
            <Text style={styles.txtBudget}>Budget: </Text>
            <Text style={styles.txtcrmApplication}>$1000 Fixed</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 5,
          }}>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <Text style={styles.txtBudget}>Deadline:</Text>
            <Text style={styles.crmContractsStyle}>Apr 1, 2024</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 8}}>
            <Text style={styles.txtBudget}>Sent:</Text>
            <Text style={styles.crmContractsStyle}>Feb 16, 2024 </Text>
          </View>
        </View>
        <View style={styles.txtHourlyPayment}>
          <Text style={styles.txtComplete}>Completed</Text>
          <LinearGradient
            colors={['#0909E9', '#00D4FF']}
            style={styles.toucAddReview}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.ViewTxt}>Add Review</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};
export default AllContractClient;
