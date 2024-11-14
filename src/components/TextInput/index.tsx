import { Text, TextInput } from "react-native";
import { styles } from './style'

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput: string;
  handleFuncitionInput: (value:string)=> void;
}

export const TextInputField = ({
  placeHolder, 
  typeInput,
  valueInput,
  handleFuncitionInput
}: PropsInput) => {

  return (
    <TextInput 
    onChangeText={handleFuncitionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000"
      secureTextEntry={typeInput}
      value={valueInput}
    />
  )
}