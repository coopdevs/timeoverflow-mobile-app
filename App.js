import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const baseUrl = () => {
  const { releaseChannel } = Constants.manifest;
  console.log("Constants.manifest = ");
  console.log(Constants.manifest);
  console.log("release channel = " + releaseChannel);

  // return (releaseChannel === 'staging') ?
    // 'https://staging.timeoverflow.org' :
    // 'https://www.timeoverflow.org';
  return 'https://staging.timeoverflow.org';
}

export default function App() {
  const [currentUrl, setCurrentUrl] = useState(baseUrl());

  const webViewRef = useRef(null);

  return (
    <>
      <WebView
        ref={ref => webViewRef.current = ref}
        style={styles.container}
        source={{ uri: currentUrl }}
        scalesPageToFit={false}
        // onNavigationStateChange={handleStateChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
