import React, { useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assests/data/types';

const UberTypes = ({typeState, onSubmit}) => {
  
  const [selectedType, setSelectedType] = typeState;
  // console.log(selectedType)            
  // console.warn('confirm', selectedType);


  // const confirm = () => {
  //   console.warn('confirm');
  // };

  return (
    <View>
      <FlatList
        data={typesData}
        renderItem={({item}) => 
                  <UberTypeRow 
                      data={item} setSelectedType={setSelectedType} isSelected={item.type === selectedType } />}
      />

      <Pressable onPress={onSubmit} style={styles.button} >
        <Text style={styles.buttontext}>Confirm </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
