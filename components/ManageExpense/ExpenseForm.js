import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
	function amountChangeHandler() {}
	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					lable="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: amountChangeHandler,
					}}
					style={styles.rowInput}
				></Input>
				<Input
					lable="Date"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: () => {},
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
					}}
					style={styles.rowInput}
				></Input>
			</View>
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
	form: { marginTop: 40 },
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: { flex: 1 },
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginVertical: 24,
		textAlign: "center",
	},
});
