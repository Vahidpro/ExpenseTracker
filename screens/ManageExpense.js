import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expense-context";

function ManageExpense({ route, navigation }) {
	const expenseCtx = useContext(ExpensesContext);
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions(
			{
				title: isEditing ? "Edit Expense" : "Add Expense",
			},
			[isEditing, navigation]
		);
	});

	function deleteExpenseHandler() {
		expenseCtx.deleteExpense(editedExpenseId);
		navigation.goBack();
	}
	function cancelHandler() {
		navigation.goBack();
	}
	function confirmHandler() {
		if (isEditing) {
			expenseCtx.updateExpense(editedExpenseId, {
				description: "Test!!!",
				amount: 29.32,
				date: new Date("2023-02-01"),
			});
		} else {
			expenseCtx.addExpense({
				description: "Test.",
				amount: 12.32,
				date: new Date("2023-02-01"),
			});
		}
		navigation.goBack();
	}
	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Button style={styles.button} mode="flat" onPress={cancelHandler}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={confirmHandler}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
			<View style={styles.deleteContainer}>
				<IconButton
					icon="trash"
					color={GlobalStyles.colors.error500}
					size={36}
					onPress={deleteExpenseHandler}
				/>
			</View>
		</View>
	);
}
export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
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
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
});
