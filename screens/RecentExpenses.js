import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
	const expensesCtx = useContext(ExpensesContext);

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);

		return expense.date > date7DaysAgo;
	});
	return (
		<ExpensesOutput
			expenses={recentExpenses}
			expensesPeriod="last 7 days"
			fallbackText="No expenses registered for the last 7 days."
		></ExpensesOutput>
	);
}
export default RecentExpenses;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
