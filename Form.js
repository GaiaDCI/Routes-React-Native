import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
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