import React, { useState } from 'react';

import { Text, View, TouchableOpacity, ActivityIndicator, TextInput, FlatList } from 'react-native';
import { styles } from './cssStyles/css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [results, setResults] = useState({});

  const doSomething = async () => {
    setIsLoading(true);
    const api = `https://itunes.apple.com/search?term=${searchName}`;
    const res = await fetch(api, {
      method: 'get',
    });
    const data = await res.json();
    setResults(data.results);
    setIsLoading(false);
    console.log(data);
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
              fontSize: 18,
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
        {results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={(item) => item.trackId}
            renderItem={(itemRow) => (
              <View>
                <Text>{itemRow.item.artistName}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={{ padding: 10 }}>No results</Text>
        )}
      </View>
    </View>
  );
}
