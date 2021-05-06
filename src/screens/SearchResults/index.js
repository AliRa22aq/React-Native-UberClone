import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import UberTypes from '../../components/UberTypes';
import styles from './styles';

const SearchResults = () => {
  return (
    <View style={styles.container}>

    <HomeMap />
    <UberTypes />

    </View>
  );
};

export default SearchResults;
