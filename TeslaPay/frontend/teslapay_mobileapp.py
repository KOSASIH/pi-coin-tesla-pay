import os
import json
from react-native import AppRegistry, Text, View, TextInput, Button, StyleSheet
from react-native-socketio import SocketIO

# Create a SocketIO instance
socketio = SocketIO('http://localhost:8080')

# Define the TeslaPayMobileApp class
class TeslaPayMobileApp(View):
    def __init__(self):
        super(TeslaPayMobileApp, self).__init__()
        self.state = {
            'payment_data': {},
            'payment_status': ''
        }

    def render(self):
        return (
            <View style={styles.container}>
                <Text style={styles.title}>TeslaPay Mobile App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    value={this.state.payment_data.amount}
                    onChangeText={(text) => this.setState({ payment_data: { ...this.state.payment_data, amount: text } })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Recipient"
                    value={this.state.payment_data.recipient}
                    onChangeText={(text) => this.setState({ payment_data: { ...this.state.payment_data, recipient: text } })}
                />
                <Button
                    title="Make Payment"
                    onPress={() => socketio.emit('make_payment', this.state.payment_data)}
                />
                <Text style={styles.status}>{this.state.payment_status}</Text>
            </View>
        )

    def handlePaymentStatus(self, payment_status):
        this.setState({ payment_status: payment_status })

# Create a TeslaPayMobileApp instance
teslapay_mobileapp = TeslaPayMobileApp()

# Register the TeslaPayMobileApp component
AppRegistry.registerComponent('TeslaPayMobileApp', () => teslapay_mobileapp)

# Define the SocketIO event handlers
socketio.on('make_payment', (payment_data) => {
    // Send payment data to the backend server
    fetch('http://localhost:8080/process_payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment_data)
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === 200) {
            socketio.emit('payment_status', 'Payment processed successfully')
} else {
            socketio.emit('payment_status', 'Payment failed')
        }
    })
})

socketio.on('payment_status', (payment_status) => {
    teslapay_mobileapp.handlePaymentStatus(payment_status)
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    },
    status: {
        fontSize: 18,
        color: 'green'
    }
})
