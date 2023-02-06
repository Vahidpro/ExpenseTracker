import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

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
	function confirmHandler(expenseData) {
		if (isEditing) {
			expenseCtx.updateExpense(editedExpenseId, expenseData);
		} else {
			storeExpense(expenseData);
			expenseCtx.addExpense(expenseData);
		}
		navigation.goBack();
	}
	return (
		<View style={styles.container}>
			<ExpenseForm
				onCancel={cancelHandler}
				onSubmit={confirmHandler}
				submitButtonLabel={isEditing ? "Update" : "Add"}
			></ExpenseForm>

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

	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
});
