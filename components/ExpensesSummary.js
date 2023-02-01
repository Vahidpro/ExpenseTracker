import { StyleSheet, View, Text } from "react-native";

function ExpensesSummary({ periodName }) {
	return (
		<View>
			<Text>{periodName}</Text>
			<Text>$177.81</Text>
		</View>
	);
}
export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
