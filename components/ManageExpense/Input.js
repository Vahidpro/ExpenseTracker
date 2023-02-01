import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../constants/styles";

function Input({ lable, textInputConfig }) {
	const inputStyles = [styles.input];
	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{lable}</Text>
			<TextInput style={inputStyles} {...textInputConfig}></TextInput>
		</View>
	);
}
export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
	invalidLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});
