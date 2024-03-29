// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/components/Login';
import MyTextInput from './src/components/MyTextInput';
import NEWJSON from './src/components/NEWJSON';
import Usecontext from './src/components/Usecontext';
import Useeffect from './src/components/Useeffect';
import Useimperative from './src/components/Useimperative';
import UseLayout from './src/components/UseLayout';
import UseofImages from './src/components/UseofImages';
import UseRef from './src/components/UseRef';
import Usestate from './src/components/Usestate';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/components/SignUp';
import Apicalls from './src/components/Apicalls';
import TodoApp from './src/components/TodoApp';
import Profile from './src/components/Profile';
import Profilepicker from './src/components/Profilepicker'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();


export default function App() {
  // const name = 'enter email'
  // function onChangeText  (incomingText) {
  //   console.log('Getting data in app' + incomingText);
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
    
    <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
    <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
    <Stack.Screen name="Images" component={UseofImages} />
    <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'Create Account' }} />
    <Stack.Screen name="ApiCalls" component={Apicalls}  options={{ headerShown: false }}/>
    <Stack.Screen name="TodoApp" component={TodoApp}  options={{ headerShown: false }}/>
    <Stack.Screen name="Picker" component={Profilepicker}  options={{ headerShown: false }}/>




      {/* <Usecontext></Usecontext> */}
      {/* <Usestate></Usestate> */}
      {/* <Useeffect></Useeffect> */}
      {/* <UseRef/> */}
      {/* <Useimperative></Useimperative> */}
      {/* <UseLayout></UseLayout> */}
      {/* <UseofImages></UseofImages> */}
      {/* <NEWJSON></NEWJSON> */}
      {/* <MyTextInput name={name}></MyTextInput> */}
      {/* <MyTextInput name={name} onChangeText={onChangeText}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
