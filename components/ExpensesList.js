import { StyleSheet, FlatList, Text } from "react-native";

const renderExpensesItem = (itemData) => {
	return <Text>{itemData.item.description}</Text>;
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
