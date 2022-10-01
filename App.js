import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
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

  useEffect(() => {
    const backAction = () => {
      console.log("Back button pressed");

      try {
        webViewRef.current?.goBack();
      } catch (err) {
        console.log("[handleBackButtonPress] Error : ", err.message);
      } finally {
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <WebView
        ref={(ref) => (webViewRef.current = ref)}
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
