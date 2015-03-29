
'use strict';

/**
 * Module dependencies.
 */

var React = require('react-native');
var Button = require('./component/button');
var { AppRegistry, StyleSheet, Text, View } = React;

/**
 * Define `App`.
 */

var App = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          SUP
        </Text>
      </View>
    );
  }
});

/**
 * Styles.
 */

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});

/**
 * Expose `App`.
 */

module.exports = App;
