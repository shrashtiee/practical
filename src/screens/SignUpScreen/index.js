import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpView from "./view";
import {
    Alert
} from 'react-native';

const SignUpScreen = (props) => {
    const { navigation, route } = props;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

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
    const handleFirstName = (text) => {
        setFirstName(text);
    }
    const handleLastName = (text) => {
        setLastName(text);
    }

    const handleLoginText = () => {
        navigation.navigate('LoginScreen')
    }

    const handleSignUp = () => {
        if (!email) {
            Alert.alert('Please Enter Email id');
        } else if (!password) {
            Alert.alert('Please Enter Password');
        } else if (!firstName) {
            Alert.alert('Please Enter First Name');
        } else if (!lastName) {
            Alert.alert('Please Enter Last Name');
        }
        else if (!role) {
            Alert.alert('Please Enter Role');
        } else {
            signUp();
        }
    }

    const signUp = () => {
        fetch("http://18.221.47.242/api/auth/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "firstname": firstName,
                "lastname": lastName,
                "role": "admin"
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData?.success == true) {
                    Alert.alert('Registration Successful')
                    navigation.navigate('LoginScreen')
                } else {
                    Alert.alert(JSON.stringify(responseData));
                }
            })
            .done();
    }
    return (
        <SignUpView
            handleBackButton={handleBackButton}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleRole={handleRole}
            handleSignUp={handleSignUp}
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
            handleLoginText={handleLoginText}
        />
    );
}
SignUpScreen.navigationOptions = () => ({
});

SignUpScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(SignUpScreen);
