const handleLoggedInPage = (webview, token) => {
  webview?.injectJavaScript(
    `window.TimeOverflowRegisterExpoDeviceToken(\'${token}\');`
  );
};

const handleLoginPage = (webview) => {
  webview?.injectJavaScript("$('#user_remember_me').prop('checked', true);");
};

const injectCustomJavaScript = (webViewRef, token, url) => {
  if (/members/.test(url)) {
    handleLoggedInPage(webViewRef.current, token);
  } else if (/sign_in|login/.test(url)) {
    handleLoginPage(webViewRef.current);
  }
};

export default injectCustomJavaScript;
