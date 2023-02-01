import { StyleSheet, View } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={expenses}
				periodName={expensesPeriod}
			></ExpensesSummary>
			<ExpensesList></ExpensesList>
		</View>
	);
}
export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
