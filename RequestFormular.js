import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';


export default class RequestFormular extends React.Component {
    render() {
        return (
            <View>
                <Text>Please give some info to the company</Text>

                <Text>Describe your ideas</Text>

                <Text>Title</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Title"
                    underlineColorAndroid="transparent"
                />

                <Text>Message/Description:</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Description"
                    underlineColorAndroid="transparent"
                />

                <Text>Wich is your limit-budget?</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="5.000 Euro"
                    underlineColorAndroid="transparent"
                />

                <Text>Wenn will you start?</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="03/05/2020"
                    underlineColorAndroid="transparent"
                />

                {/* dann kommt die kamera */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bodyProfile: {
        alignSelf: 'center',
        marginTop: 200,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff"
    },
    bodyContentProfile: {
        margin: 10,
        alignItems: 'center'
    },
    username: {
        fontSize: 15,
        fontWeight: '800',
        margin: 10
    },
    shortDescription: {
        fontSize: 13,
        margin: 5
    },
    longDescription: {
        fontSize: 11,
        margin: 10,
        padding: 10
    },
    inputs: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    }
});  