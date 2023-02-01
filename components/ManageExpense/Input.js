import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Input({ lable, textInputConfig }) {
	return (
		<View>
			<Text>{lable}</Text>
			<TextInput {...textInputConfig}></TextInput>
		</View>
	);
}
export default Input;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
