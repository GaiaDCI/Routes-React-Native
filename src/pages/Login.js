import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {

    _signup() {
        Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Login" />
                <View style={styles.signupText}>
                    <Text style={styles.signupTextSmall}>Don´t have ana ccount yet?</Text>
                    <TouchableOpacity onPress={this._signup} >
                        <Text style={styles.signupSmallLink}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupText: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupTextSmall: {
        fontSize: 11
    },
    signupSmallLink: {
        fontSize: 11,
        fontWeight: '500'
    }
});