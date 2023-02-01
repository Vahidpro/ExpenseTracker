import { StyleSheet, View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
	const expenseSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View>
			<Text>{periodName}</Text>
			<Text>${expenseSum.toFixed(2)}</Text>
		</View>
	);
}
export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
