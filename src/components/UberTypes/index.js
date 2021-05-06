import React, { useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assests/data/types';

const UberTypes = () => {

    const [selectedType, setSelectedType] = useState('');


  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      <FlatList
        data={typesData}
        renderItem={({item}) => <UberTypeRow data={item} setSelectedType={setSelectedType} />}
      />

      <Pressable onPress={confirm} style={styles.button} >
          {
              selectedType?
              <Text style={styles.buttontext}>Confirm {selectedType}</Text>:
              <Text style={styles.buttontext}>Select Any</Text>

          }
      </Pressable>
    </View>
  );
};

export default UberTypes;
