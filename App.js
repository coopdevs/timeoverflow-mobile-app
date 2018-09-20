import React from 'react';
import { WebView, BackHandler } from 'react-native';
import { Constants, Notifications } from 'expo';
import injectCustomJavaScript from './lib/injectCustomJavaScript';
import handleExternalLinks from './lib/handleExternalLinks';

const baseUrl = () => {
  const { releaseChannel } = Expo.Constants.manifest;

  return (releaseChannel === 'staging') ?
    'https://staging.timeoverflow.org' :
    'https://www.timeoverflow.org';
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentUrl: baseUrl() };
  }

  componentDidMount() {
    this._notificationSubscription = Notifications.addListener(this.onReceiveNotification);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  // Check the notification attributes:
  // https://docs.expo.io/versions/latest/guides/push-notifications#notification-handling-timing
  onReceiveNotification = (notification = {}) => {
    if (notification.origin === 'selected') {
      const { data } = notification;

      if (!data) return;
      if (!data.url) return;

      this.setState({ currentUrl: `${baseUrl()}${data.url}` });
    }
  }

  onNavigationStateChange = ({ url }) => {
    injectCustomJavaScript(this.webview, url);
    handleExternalLinks(this.webview, url)
  }

  onBackPress = () => {
    this.webview.goBack();

    return true;
  }

  render() {
    return (
      <WebView
        ref={ref => (this.webview = ref)}
        source={{ uri: this.state.currentUrl }}
        style={{marginTop: Constants.statusBarHeight}}
        onNavigationStateChange={this.onNavigationStateChange}
        scalesPageToFit={false}
      />
    );
  }
}
