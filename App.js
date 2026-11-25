import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://novent.pythonanywhere.com' }}
      style={{ flex: 1, backgroundColor: '#07040F' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsFullscreenVideo={true}
      startInLoadingState={true}
    />
  );
}
