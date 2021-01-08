import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {fetchData} from '../utility/network';
import ListItem from './ListItem';

const SpaceXLaunchLists = () => {
  const [listOfLaunches, setLaunchesList] = useState([]);
  useEffect(() => {
    console.log('we are inside use effect of space x launch list ');
    fetchData('https://api.spacexdata.com/v4/launches/query', 'POST')
      .then(async (res) => {
        const listOfLaunches = await res.json();
        setLaunchesList(listOfLaunches.docs);
      })
      .catch((err) => {});
  }, []);

  return (
    <View style={styles.parentView}>
      <Text style={styles.headerText}>List of SpaceX Launches</Text>
      <FlatList
        contentContainerStyle={styles.flatlistStyle}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        data={listOfLaunches}
        renderItem={({index, item}) => <ListItem key={index} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 1,
  },
  parentView: {backgroundColor: '#fff'},
  headerText: {fontSize: 20, fontWeight: 'bold', alignSelf: 'center'},
  flatlistStyle: {paddingBottom: 10},
});

export default SpaceXLaunchLists;
