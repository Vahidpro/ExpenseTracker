import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
	const [inputValues, setInputValues] = useState({
		amount: "",
		date: "",
		description: "",
	});

	function submitHandler() {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description,
		};

		onSubmit(expenseData);
	}
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
					onChangeText: amountChangeHandler.bind(this, "description"),
					value: inputValues.description,
				}}
			></Input>
			<View style={styles.buttons}>
				<Button style={styles.button} mode="flat" onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{submitButtonLabel}
				</Button>
			</View>
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
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});
