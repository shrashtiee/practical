import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginView from "./view";
import { Alert } from 'react-native';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [show, setShow] = useState(false)

  const handleBackButton = () => {
    navigation.goBack();
  }

  const handleEmail = (text) => {
    setEmail(text)
  }

  const handlePassword = (text) => {
    setPassword(text);
  }

  const handleRole = (text) => {
    setRole(text);
  }

  const handleEyeIcon = () => {
    setShow(!show)
  }

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  }

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Please Enter Email id');
    } else if (!password) {
      Alert.alert('Please Enter Password');
    } else if (!role) {
      Alert.alert('Please Enter Role')
    } else {
      login();
    }
  }

  const login = () => {
    fetch("http://18.221.47.242/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "email": email,
          "password": password,
          "role": "admin"
        }
      ),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData?.success == false) {
          Alert.alert(JSON.stringify(responseData?.message));
        } else if (responseData?.token !== null) {
          navigation.navigate('HomeScreen')
        }
      })
      .done();
  }
  return (
    <LoginView
      handleBackButton={handleBackButton}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleRole={handleRole}
      handleSignUp={handleSignUp}
      handleLogin={handleLogin}
      handleEyeIcon={handleEyeIcon}
      show={show}
    />
  );
}
LoginScreen.navigationOptions = () => ({
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // Access state from Store.
});

export default connect(mapStateToProps)(LoginScreen);
