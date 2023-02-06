import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState();

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

	async function deleteExpenseHandler() {
		setIsSubmitting(true);

		try {
			await deleteExpense(editedExpenseId);
			expenseCtx.deleteExpense(editedExpenseId);
			navigation.goBack();
		} catch (error) {
			setError("Could not delete expense, please try again later!");
			setIsSubmitting(false);
		}
	}
	function cancelHandler() {
		navigation.goBack();
	}
	async function confirmHandler(expenseData) {
		setIsSubmitting(true);
		try {
			if (isEditing) {
				expenseCtx.updateExpense(editedExpenseId, expenseData);
				await updateExpense(editedExpenseId, expenseData);
			} else {
				const id = await storeExpense(expenseData);
				expenseCtx.addExpense({ expenseData, id: id });
			}
			navigation.goBack();
		} catch (error) {
			setError("Could not save data, please try again later!");
			setIsSubmitting(false);
		}
	}

	function errorHandler() {
		setError(null);
	}

	if (error && !isSubmitting) {
		return <ErrorOverlay message={error} o></ErrorOverlay>;
	}

	if (isSubmitting) {
		return <LoadingOverlay></LoadingOverlay>;
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
