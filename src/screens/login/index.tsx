import { useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import LogoImage from "../../assets/PngItem_5076237.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
    }

    const handlePassword = (value: string) => {
    setPassword(value);
    }

    const handleEmail = (value: string) => {
    setEmail(value);
    }
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.LogoImage} source={LogoImage} alt="Logo"/>
            </View>

            <View style={styles.containerMsg}>
                <Text style={styles.txtMsg}>Sign in with your Amazon account</Text>
            </View>

            <View style={styles.boxForms}>

                <TextInputField
                    placeHolder="Digite seu email"
                    valueInput={email}
                    handleFuncitionInput={handleEmail}
                    />
                
                <TextInputField
                    placeHolder="Digite sua senha"
                    valueInput={password}
                    handleFuncitionInput={handlePassword}
                    typeInput={true}
                />

                <ButtonTypes
                    title="Sign In" 
                    handleFunction={handleLogin}
                    propsBackgroundColor="#fe8500"
                    
                />
                </View>

                <View style={styles.containerBottom}>
                    <Text style={styles.txtForget}>Forgot your Password?</Text>
                </View>

        </View>
        </TouchableWithoutFeedback>

)

}


