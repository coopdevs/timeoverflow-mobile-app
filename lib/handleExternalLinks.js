import * as WebBrowser from "expo-web-browser";

const handleExternalLinks = async (url, webViewRef) => {
  if (!/timeoverflow/.test(url)) {
    webViewRef.current?.goBack();
    await WebBrowser.openBrowserAsync(url);
  }
};

export default handleExternalLinks;
