import React from 'react';
import { Text, Button, View, StyleSheet } from
'react-native';

export default class Cotador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar() {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return (
            <View>
                <View style={StyleSheet.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                <View style={StyleSheet.botoes}>
                    <Button
                        style={StyleSheet.botao1}
                        title="Aumenta"
                        onPress={this.Incrementar.bind(this)}
                    >
                </View>
            </View>
        )
    }
}