import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

const baseUrl = () => {
  const { releaseChannel } = Updates;
  console.log('releaseChannel =', releaseChannel);

  return releaseChannel === 'production'
    ? 'https://www.timeoverflow.org'
    : 'https://staging.timeoverflow.org';
};

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
