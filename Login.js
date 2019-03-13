import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Form from './Form';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {

    signup() {
        Actions.signup()
    }

    render() {
        return (

            <View style={styles.container}>
                <Form type="Login" />

                <Text style={styles.header}>LOGIN</Text>

                <Text style={styles.signupTextLink}>Do not have ana ccount yet?</Text>

                <TouchableOpacity onPress={this.signup}>
                    <Text style={styles.btn}> Sign In</Text>
                </TouchableOpacity>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    header: {
        fontSize: 20
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: 'green',
        padding: 15,
        margin: 10,
        borderRadius: 25,
        alignItems: 'center'
    },
    signupTextLink: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 15,
        color: 'grey',
        fontSize: 12
    }
});