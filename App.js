import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "lightblue"}}>
        <TouchableOpacity
          onPress={() =>
            alert(
              'This is the Barter App. Please login to barter. If you do not have an account then make sure to sign up!'
            )
          }
          style={{ alignSelf: 'center', marginTop: 50 }}>
          <Text
            style={{
              fontSize: 50,
              color: 'black',
              textShadowColor: 'blue',
              textShadowRadius: 25,
            }}>
            BARTER
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            alignSelf: 'center',
            borderWidth: 2.5,
            marginTop: 50,
            borderColor: 'blue',
          }}
        />
        <TextInput
          style={{
            alignSelf: 'center',
            borderWidth: 2.5,
            marginTop: 20,
            borderColor: 'blue',
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderWidth: 3.5,
            marginTop: 50,
            borderColor: 'blue',
            borderRadius: 11,
          }}>
          <Text> LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderWidth: 3.5,
            marginTop: 20,
            borderColor: 'blue',
            borderRadius: 11,
          }}>
          <Text> SIGN UP </Text>
        </TouchableOpacity>

    
      </View>
    );
  }
}
