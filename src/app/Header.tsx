import React, { Component } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


import styles from './style';

type Props = {};
export default class Header extends Component<Props, any>{

  constructor(props: any) {
    super(props);

    this.state = { name: 'derio', age: 26, count: 0 };
  }

  render() {
    return (
      <Text style={{
        backgroundColor: '#333', color: '#fff', marginTop: 0,
        fontSize: 18, textAlign: 'center', paddingVertical: 20
      }}>
        Hello, react Native
      </Text>

    );
  }

}
