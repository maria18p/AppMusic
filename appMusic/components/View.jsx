import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../cssStyles/css';

export const Item = (itemRow) => {
  return (
    <View style={styles.row_container}>
      <View style={styles.img_container}>
        <Image style={styles.img} source={{ uri: itemRow.item.img }} />
      </View>
      <View style={styles.name_container}>
        <Text style={styles.name}>{itemRow.item.name}</Text>
        <Text>{itemRow.item.nickname}</Text>
        <View style={styles.line}></View>
        <Text style={styles.occupation}>{itemRow.item.occupation}</Text>
      </View>
    </View>
  );
};
