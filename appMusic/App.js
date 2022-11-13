import React, { useState } from 'react';

import { Text, View, TouchableOpacity, ActivityIndicator, TextInput, FlatList } from 'react-native';
import { Item } from './components/View';
import { styles } from './cssStyles/css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchName, setSearchName] = useState('characters');
  const [results, setResults] = useState([]);

  const doSomething = async () => {
    setIsLoading(true);
    const api = `https://www.breakingbadapi.com/api/${searchName}`;
    const res = await fetch(api, {
      method: 'get',
    });
    const data = await res.json();
    setResults(data);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '10%', flexDirection: 'row' }}>
        <View style={{ width: '75%', height: '100%', justifyContent: 'center' }}>
          <TextInput
            style={{
              width: '95%',
              borderRadius: 6,
              paddingVertical: 10,
              paddingLeft: 10,
              backgroundColor: '#fff',
              fontSize: 14,
            }}
            value={searchName}
            onChangeText={(value) => {
              setSearchName(value);
            }}
            keyboardType='default'
            placeholder='Type search...'
            autoCapitalize='none'
            secureTextEntry={false}
          />
        </View>
        <View style={{ width: '30%', justifyContent: 'center', alignContent: 'center' }}>
          {isLoading ? (
            <ActivityIndicator size='large' color='black' />
          ) : (
            <TouchableOpacity style={styles.btn} onPress={doSomething}>
              <Text style={styles.btnTxt}>SEARCH</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{ width: '100%', height: '90%' }}>
        {results ? (
          <FlatList
            data={results}
            keyExtractor={(item) => item.char_id}
            renderItem={({ item }) => <Item item={item} />}
            // inverted
          />
        ) : (
          <Text>No results</Text>
        )}
      </View>
    </View>
  );
}
