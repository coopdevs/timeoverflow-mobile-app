import { WebBrowser } from 'expo';

export default function(webview, url) {
  if (!/timeoverflow/.test(url)) {
    webview.goBack();
    WebBrowser.openBrowserAsync(url);
  }
}