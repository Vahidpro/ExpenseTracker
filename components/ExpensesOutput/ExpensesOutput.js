import { StyleSheet, View } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const Dummy_data = [
	{
		id: "e1",
		description: "Shoes",
		amount: 59.32,
		date: new Date("2022-12-16"),
	},
	{
		id: "e2",
		description: "Jacket",
		amount: 32.48,
		date: new Date("2022-12-24"),
	},
	{
		id: "e3",
		description: "Food",
		amount: 68.29,
		date: new Date("2023-01-12"),
	},
	{
		id: "e4",
		description: "Coffee",
		amount: 74.32,
		date: new Date("2023-01-23"),
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
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
	},
});
