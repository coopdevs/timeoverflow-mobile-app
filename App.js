import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from "expo-notifications";
import * as WebBrowser from "expo-web-browser";
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import registerForPushNotificationsAsync from './lib/pushNotifications';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import Constants from "expo-constants";

// matches the background color of the webapp's navbar
const navbarStaticTopColor = "rgba(39,151,175,0.9)";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const baseUrl = () => {
  console.log('extra.baseUrl =', Constants.expoConfig.extra.baseUrl);
  return Constants.expoConfig.extra.baseUrl || "https://staging.timeoverflow.org";
};

export default function App() {
  const [currentUrl, setCurrentUrl] = useState(baseUrl());
  const [expoPushToken, setExpoPushToken] = useState("");
  const responseListener = useRef();

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

  useEffect(() => {
    const getToken = async () => {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token)
    };

    getToken();

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('content =', response.notification.request.content);
        const { url } = response.notification.request.content.data;
        setCurrentUrl(`${baseUrl()}${url}`);
      });

    return () => {
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleExternalLinks = (navState) => {
    const { url, canGoBack } = navState;

    if (!url.includes("timeoverflow")) {
      if (canGoBack) {
        webViewRef.current?.goBack();
      }
      WebBrowser.openBrowserAsync(url);
    }
  };

  const handleLoggedInPage = (webview, token) => {
    webview?.injectJavaScript(
      `window.TimeOverflowRegisterExpoDeviceToken(\'${token}\');`
    );
  };

  const handleLoginPage = (webview) => {
    webview?.injectJavaScript("$('#user_remember_me').prop('checked', true);");
  };

  const injectCustomJavaScript = (url) => {
    if (/members/.test(url)) {
      handleLoggedInPage(webViewRef.current, expoPushToken);
    } else if (/sign_in|login/.test(url)) {
      handleLoginPage(webViewRef.current);
    }
  };

  const handleStateChange = (navState) => {
    console.log('state change =', navState);
    const { url } = navState;
    setCurrentUrl(url);
    injectCustomJavaScript(url);
    handleExternalLinks(navState);
  };

  return (
    <>
      <StatusBar style="light" backgroundColor={navbarStaticTopColor} />
      <WebView
        ref={(ref) => (webViewRef.current = ref)}
        style={styles.container}
        source={{ uri: currentUrl }}
        scalesPageToFit={false}
        onNavigationStateChange={handleStateChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
