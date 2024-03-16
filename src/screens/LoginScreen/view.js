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
import { ScreenHeader, VectorIcon } from "../../components";
import icons from "../../utility/icons";

const LoginView = (props) => {
  const { handleEmail, handlePassword, handleRole, handleSignUp, handleLogin, handleEyeIcon, show } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={handleEmail}
        />
      </View>
      <View style={[styles.inputView, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <TextInput
          style={styles.inputText}
          secureTextEntry={show}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={handlePassword}
        />
        <TouchableOpacity
          onPress={handleEyeIcon}
        >
          <Image
            source={show ? icons.EYE_ICON : icons.HIDDEN_ICON}
            style={styles.passwordEye} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Role"
          placeholderTextColor="#003f5c"
          onChangeText={handleRole}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}
      >
        <Text style={styles.textStyle}>New here?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LoginView);