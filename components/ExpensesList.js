import { StyleSheet, FlatList, Text } from "react-native";
import ExpenseItem from "./ExpensesOutput/ExpenseItem";

const renderExpensesItem = (itemData) => {
	return (
		<ExpenseItem
			// description={itemData.item.description}
			// data={itemData.item.data}
			// amount={itemData.item.amount}
			{...itemData.item}
		></ExpenseItem>
	);
};

function ExpensesList({ expenses }) {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpensesItem}
			keyExtractor={(item) => item.id}
		/>
	);
}
export default ExpensesList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
