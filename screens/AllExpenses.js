import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
	return <ExpensesOutput expensesPeriod="Total"></ExpensesOutput>;
}
export default AllExpenses;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
