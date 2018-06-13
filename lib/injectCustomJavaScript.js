import { registerForPushNotificationsAsync } from './pushNotifications';

const handleLoggedInPage = async (webview) => {
  const token = await registerForPushNotificationsAsync();

  webview.injectJavaScript(`window.TimeOverflowRegisterExpoDeviceToken(\'${token}\');`);
};

const handleLoginPage = (webview) => {
  webview.injectJavaScript("$('#user_remember_me').prop('checked', true);")
};

export function injectCustomJavaScript(webview, url) {
  if (/members/.test(url)) {
    handleLoggedInPage(webview);
  } else if (/sign_in|login/.test(url)) {
    handleLoginPage(webview);
  }
}
