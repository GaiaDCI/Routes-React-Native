import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                ></TextInput>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                ></TextInput>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderRadius: 25,
        padding: 10,
        fontSize: 14,
        margin: 5
    },
    btnStyle: {
        width: 300,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderRadius: 25,
        padding: 10,
        margin: 5,
        backgroundColor: 'rgb(300,255,255)',
    },
    buttonText: {
        fontWeight: '500',
        textAlign: 'center'
    }
});