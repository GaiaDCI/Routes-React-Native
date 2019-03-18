import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

import SignUpProfi from '../Signup/SignUpProfi'
export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SignUpProfi />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    avatar: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: 'black'
    },
});