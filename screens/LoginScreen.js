
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';



export default class LoginScreen extends React.Component{
    state = {
        email: "",
        password:"",
        errorMsg: null,

    };
    handleLogin= () =>{
        const {email , password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email ,password)
        .catch(error => this.setState({errorMsg : error.message}));
    }

    render() {
        return (
    
            <View style={styles.container} >
                <Text style={styles.greeting} >

                    {`Hello again.\nWelcome back.`}
                </Text>
            
            
            <View style={styles.errorMsg}>
                { this.state.errorMsg &&  <Text style={styles.error}> {this.state.errorMsg} </Text>}
            </View>
            <View style={styles.form} >
                <View>
                    <Text style={styles.inputTitle}>Email Adress</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={
                        email => this.setState({email})
                    }
                    value={this.state.email}
                    ></TextInput>
                </View>

                <View style={{marginTop: 32}} >
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                    onChangeText={
                        password=> this.setState({password})
                    }
                    value={this.state.password}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => this.handleLogin()} >
                <Text style={{color:"#FFF" , fontWeight:"500" , fontSize: 18}} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: "center" , marginTop: 32}} onPress={() => {this.props.navigation.navigate('Register')}} >
                <Text style={{color: "#414959" , fontSize: 13}} >
                    New to BlogApp ?<Text style={{fontWeight: "500" , color: "#E9446A"}} >Sign Up</Text>
                </Text>
            </TouchableOpacity>

        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'center'
    },
    errorMsg:{
        height: 72,
        alignItems : 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    form :{
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle:{
        borderBottomColor: "#8A8F9E",
        fontSize: 10,
        textTransform: 'uppercase',
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"

    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",

    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign:"center",


    }


});
