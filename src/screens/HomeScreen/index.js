import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <HomeMap />

      <CovidMessage />

      <HomeSearch />

    </ScrollView>
  );
};

export default HomeScreen;
