import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { registerForPushNotificationsAsync } from './lib/pushNotifications';
import { Constants } from 'expo';

const loggedInUrlRegex = /members/;
const mainUrl = 'https://staging.timeoverflow.org/';

export default class App extends React.Component {
  componentDidMount() {}

  registerForPushNotifications = async () => {
    const token = await registerForPushNotificationsAsync();

    this.runRemoteTokenStoring(token);
  }

  onNavigationStateChange({ url }) {
    if (loggedInUrlRegex.test(url)) {
      this.registerForPushNotifications()
    }
  }

  runRemoteTokenStoring(token) {
    this.webview.injectJavaScript(`window.TimeOverflowRegisterExpoDeviceToken(\'${token}\');`);
  }

  render() {
    return (
      <WebView
        ref={ref => (this.webview = ref)}
        source={{ uri: mainUrl }}
        style={{marginTop: Constants.statusBarHeight}}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        scalesPageToFit={false}
      />
    );
  }
}
