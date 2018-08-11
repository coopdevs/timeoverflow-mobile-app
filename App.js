import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { Constants } from 'expo';
import { injectCustomJavaScript } from './lib/injectCustomJavaScript';

const mainUrl = 'https://timeoverflow.org/';

export default class App extends React.Component {
  onNavigationStateChange({ url }) {
    injectCustomJavaScript(this.webview, url);
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
