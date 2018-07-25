import React, {Component} from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   Image,
   View
} from 'react-native';

import style from './config/style'

export default class Hr extends Component<Props> {

   render() {
      return (
         <View style={[styles.hr, this.props.style]} />
      );
   }
}

const styles = StyleSheet.create({
   hr: {
      backgroundColor: style.colors.steel,
      height: 1
   }
});