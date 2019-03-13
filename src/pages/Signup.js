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

export default class Signup extends React.Component {

    _goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signupText}>
                    <Text style={styles.signupTextSmall}>Already registered?</Text>
                    <TouchableOpacity onPress={this._goBack}><Text style={styles.signupSmallLink}> Sign in</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
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