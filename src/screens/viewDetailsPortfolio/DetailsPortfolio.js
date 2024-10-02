import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../them/Styles';
import {useRoute} from '@react-navigation/native';

const DetailsPortfolio = () => {
  const route = useRoute();
  const {
    project_title,
    skills,
    category,
    project_description,
    project_link,
    imageUrlPortfolio,
  } = route.params;

  const handleOpenLink = () => {
    if (project_link) {
      Linking.openURL(project_link).catch(err =>
        console.error('Failed to open link:', err),
      );
    }
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
            <Text
              style={{
                fontWeight: '400',
                color: 'black',
                marginVertical: 10,
                fontSize: 22,
              }}>
              {project_title}
            </Text>

            <Image
              source={{uri: imageUrlPortfolio}}
              style={styles.imageStylePortfolio}
            />
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
                {skills ? (
                  JSON.parse(skills.replace(/'/g, '"')).length > 0 ? (
                    JSON.parse(skills.replace(/'/g, '"')).map(
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
            <Text style={styles.txtLoaction}>Category: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {category || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Description: </Text>
            <Text style={{color: '#47515e', fontWeight: '500'}}>
              {project_description || 'NA'}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#0909E9', '#00D4FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{borderRadius: 10, padding: 1, marginVertical: 10}}>
          <View style={styles.postContractsAllJobConatiner}>
            <Text style={styles.txtLoaction}>Project Link: </Text>
            {project_link ? (
              <TouchableOpacity onPress={handleOpenLink}>
                <Text style={{color: 'blue', fontWeight: '500'}}>
                  {project_link}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={{color: '#47515e', fontWeight: '500'}}>NA</Text> // Display 'NA' if link is not available
            )}
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default DetailsPortfolio;
