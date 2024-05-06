import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


export default function App() {
  const [isError, setIsError] = useState(null)

  const handleMessage = (e) => {
    console.log("Message received", e);
  }

  const handleError = (e) => {
    setIsError(true);
    console.log("error", e)
  }

  return (
    <>

      {!isError ? <WebView
        // onLoadEnd={handleLoaded}
        renderError={handleError}
        style={styles.container}
        // onMessage={handleMessage}
        source={{ uri: 'https://codeangel.ml' }}
      /> : <Text>Vous êtes pas connecté !!</Text>}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});







// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
