import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
	const expensesCtx = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			expenses={expensesCtx.expenses}
			expensesPeriod="Total"
		></ExpensesOutput>
	);
}
export default AllExpenses;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
