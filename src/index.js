// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "react-native";

// import Navigation from "./Navigation";

// export default function App() {
//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor="#000"/>
//       <NavigationContainer>
//         <Navigation />
//       </NavigationContainer>
//     </>
//   );
// }
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Navigation from "./NavigationDefault";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
