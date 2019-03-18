import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput
} from 'react-native';

// import SignUpUser from '../Signup/SignUpUser';
// import SignUpProfi from '../Signup/SignUpProfi';
// import Login from '../Login/Login';
// import ProfileProfi from '../Profile/ProfileProfi';

import Wizard from '../Wizard';

export default class Home extends Component {

	render() {
		return (
			<View style={styles.root}>

				<Wizard>
					<Wizard.Step>
						<Text>vh</Text>
					</Wizard.Step>
					<Wizard.Step>
						<Text>vh</Text>
					</Wizard.Step>
					<Wizard.Step>
						<Text>hello wizard three</Text>
					</Wizard.Step>
					<Wizard.Step>
						<Text>hello wizard fourth</Text>
					</Wizard.Step>
				</Wizard>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});
