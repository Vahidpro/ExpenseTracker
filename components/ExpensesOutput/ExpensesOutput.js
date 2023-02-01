import { StyleSheet, View } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";

const Dummy_data = [
	{
		id: "e1",
		description: "Shoes",
		amount: 59.32,
		data: new Date(20221216),
	},
	{
		id: "e2",
		description: "Jacket",
		amount: 32.48,
		data: new Date(20221224),
	},
	{
		id: "e3",
		description: "Food",
		amount: 68.29,
		data: new Date(20230112),
	},
	{
		id: "e4",
		description: "Coffee",
		amount: 74.32,
		data: new Date(20230123),
	},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={Dummy_data}
				periodName={expensesPeriod}
			></ExpensesSummary>
			<ExpensesList expenses={Dummy_data}></ExpensesList>
		</View>
	);
}
export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
