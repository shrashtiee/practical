import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import styles from "./style";

const SignUpView = (props) => {
  const { handleEmail, handlePassword, handleRole, handleSignUp, handleFirstName, handleLastName, handleLoginText } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText={handleEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText={handlePassword}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#000"
          onChangeText={handleFirstName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#000"
          onChangeText={handleLastName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Role"
          placeholderTextColor="#000"
          onChangeText={handleRole}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.accountTextStyle}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLoginText}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SignUpView);