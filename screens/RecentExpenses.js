import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);
	// const [fetchedExpenses, setFetchedExpenses] = useState([]);

	useEffect(() => {
		async function getExpenses() {
			setIsFetching(true);
			try {
				const expenses = await fetchExpenses();
				expensesCtx.setExpenses(expenses);
			} catch (error) {
				setError("Could not fetch expenses!");
			}
			setIsFetching(false);
			// setFetchedExpenses(expenses);
		}
		getExpenses();
	}, []);

	function errorHandler() {
		setError(null);
	}

	if (error && !isFetching) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	if (isFetching) {
		return <LoadingOverlay></LoadingOverlay>;
	}

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
