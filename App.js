import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { registerForPushNotificationsAsync } from './lib/pushNotifications';

export default class App extends React.Component {
  componentDidMount() {
    registerForPushNotificationsAsync();
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://www.timeoverflow.org/'}}
        style={{marginTop: 20}}
      />
    );
  }
}
