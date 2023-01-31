import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import ManageExpense from "./screens/ManageExpense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

export default function App() {
	const Stack = createStackNavigator();
	const ButtomTabs = createBottomTabNavigator();

	function ExpensesOverview() {
		return (
			<ButtomTabs.Navigator>
				<ButtomTabs.Screen
					name="RecentExpenses"
					component={RecentExpenses}
				></ButtomTabs.Screen>
				<ButtomTabs.Screen
					name="AllExpenses"
					component={AllExpenses}
				></ButtomTabs.Screen>
			</ButtomTabs.Navigator>
		);
	}

	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
					></Stack.Screen>
					<Stack.Screen
						name="ManageExpense"
						component={ManageExpense}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
			<Text>hi</Text>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
