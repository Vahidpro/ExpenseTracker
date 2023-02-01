import { useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native";

function ManageExpense({ route, navigation }) {
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
	return <Text style={styles.container}>ManageExpense Screen</Text>;
}
export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
