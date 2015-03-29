
/**
 * Yes, Lettuce.
 */

'use strict';

/**
 * Module dependencies.
 */

var React = require('react-native');
var App = require('./client/app.js');
var AppRegistry = React;

// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } = React;

/**
 * Define `App`.
 */

// var client = React.createClass({
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js{'\n'}
//           Press Cmd+R to reload
//         </Text>
//       </View>
//     );
//   }
// });

/**
 * Styles.
 */

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//   },
// });

/**
 * Register `App`.
 */

AppRegistry.registerComponent('client', () => App);
