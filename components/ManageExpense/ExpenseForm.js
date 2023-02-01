import { StyleSheet, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
	function amountChangeHandler() {}
	return (
		<View style={styles.container}>
			<Input
				lable="Amount"
				textInputConfig={{
					keyboardType: "decimal-pad",
					onChangeText: amountChangeHandler,
				}}
			></Input>
			<Input
				lable="Date"
				textInputConfig={{
					keyboardType: "decimal-pad",
					onChangeText: () => {},
					placeholder: "YYYY-MM-DD",
					maxLength: 10,
				}}
			></Input>
			<Input
				lable="Description"
				textInputConfig={{
					multiline: true,
				}}
			></Input>
		</View>
	);
}
export default ExpenseForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
