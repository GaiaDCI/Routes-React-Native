import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Form from './Form';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Form type="Signup" />
                <Text style={styles.header}>SIGN UP</Text>

                <Text style={styles.signupTextLink}>Already have an account?</Text>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.btn}> Sign In</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        alignItems: 'center',
        fontWeight: '500'
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