import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UserMap from './components/UserMap';

export default class App extends React.Component {

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => 
      {

      }, 
      err => console.log(err)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UserMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
