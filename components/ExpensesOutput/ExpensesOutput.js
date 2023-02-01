import { StyleSheet, View, Text } from "react-native";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
	let content = <Text style={styles.infoText}>{fallbackText}</Text>;

	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses}></ExpensesList>;
	}
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={expenses}
				periodName={expensesPeriod}
			></ExpensesSummary>
			{content}
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
	infoText: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
		marginTop: 23,
	},
});
