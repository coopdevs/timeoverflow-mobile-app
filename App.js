import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { Constants } from 'expo';
import { injectCustomJavaScript } from './lib/injectCustomJavaScript';

const mainUrl = () => {
  const { releaseChannel } = Expo.Constants.manifest;

  return (releaseChannel === 'staging') ?
    'https://staging.timeoverflow.org/' :
    'https://www.timeoverflow.org/';
}

export default class App extends React.Component {
  onNavigationStateChange({ url }) {
    injectCustomJavaScript(this.webview, url);
  }

  render() {
    return (
      <WebView
        ref={ref => (this.webview = ref)}
        source={{ uri: mainUrl() }}
        style={{marginTop: Constants.statusBarHeight}}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        scalesPageToFit={false}
      />
    );
  }
}
