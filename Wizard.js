import React, { PureComponent } from 'react';
import {
    Text, View, Button,
    StyleSheet
} from 'react-native';

class Step extends PureComponent {
    state = {}
    render() {
        return (
            <View>
                <Text>{this.props.children} Step {this.props.currentIndex}</Text>
                <Button
                    title='Next'
                    onPress={this.props.nextStep}
                ></Button>
            </View>
        )
    }
}

export default class Wizard extends PureComponent {
    static Step = (props) => <Step {...props} />
    // The {...props} attaches all the event handlers like onChange, onSubmit, etc to the component so we don't have to do it manually.
    state = {
        index: 0
    }

    _nextStep = () => {
        this.setState(prevState => ({
            index: prevState.index + 1
        }));
    }

    render() {
        return (
            <View>
                {React.Children.map(this.props.children, (element, index) => {
                    if (index == this.state.index) {
                        return React.cloneElement(element, {
                            currentIndex: this.state.index,
                            nextStep: this._nextStep
                        });
                    }
                    return null;
                })}
            </View>
        )
    }
}
