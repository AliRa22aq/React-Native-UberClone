import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <CovidMessage />

      <HomeSearch />
    </ScrollView>
  );
};

export default HomeScreen;
