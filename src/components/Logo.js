import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 50, height: 50 }}
                    source={require('../../assets/splash.png')}></Image>
                {/* <Text style={styles.logoText}>Register your profile</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        margin: 2,
        fontSize: 18
    }
});