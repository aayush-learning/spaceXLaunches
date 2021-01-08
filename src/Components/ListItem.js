import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({item}) => {
  const {success, name} = item;
  return (
    <View
      style={[
        styles.listItemViewStyle,
        {backgroundColor: success ? 'green' : 'red'},
      ]}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemViewStyle: {
    backgroundColor: 'grey',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

ListItem.defaultProps = {};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
