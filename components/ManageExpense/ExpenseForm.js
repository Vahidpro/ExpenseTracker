import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
	const [inputValues, setInputValues] = useState({
		amount: "",
		date: "",
		description: "",
	});
	function amountChangeHandler(inputIdentifier, enteredValue) {
		setInputValues((curInputValues) => {
			return { ...curInputValues, [inputIdentifier]: enteredValue };
		});
	}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					lable="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: amountChangeHandler.bind(this, "amount"),
						value: inputValues.amount,
					}}
					style={styles.rowInput}
				></Input>
				<Input
					lable="Date"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: () => {},
						placeholder: "YYYY-MM-DD",
						onChangeText: amountChangeHandler.bind(this, "date"),
						value: inputValues.date,

						maxLength: 10,
					}}
					style={styles.rowInput}
				></Input>
			</View>
			<Input
				lable="Description"
				textInputConfig={{
					multiline: true,
					onChangeText: amountChangeHandler.bind(this, "discription"),
					value: inputValues.description,
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
