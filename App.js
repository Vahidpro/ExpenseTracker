import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import ManageExpense from "./screens/ManageExpense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expense-context";

const Stack = createStackNavigator();
const ButtomTabs = createBottomTabNavigator();

function ExpensesOverview() {
	return (
		<ButtomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				headerTintColor: "white",
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon={"add"}
						size={24}
						color={tintColor}
						onPress={() => {
							navigation.navigate("ManageExpense");
						}}
					/>
				),
			})}
		>
			<ButtomTabs.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					title: "Recent Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" color={color} size={size}></Ionicons>
					),
				}}
			></ButtomTabs.Screen>
			<ButtomTabs.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					title: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="calendar" color={color} size={size}></Ionicons>
					),
				}}
			></ButtomTabs.Screen>
		</ButtomTabs.Navigator>
	);
}
export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<ExpensesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
							headerTintColor: "white",
						}}
					>
						<Stack.Screen
							name="ExpensesOverview"
							component={ExpensesOverview}
							options={{ headerShown: false }}
						></Stack.Screen>
						<Stack.Screen
							name="ManageExpense"
							component={ManageExpense}
							options={{ presentation: "modal", title: "Manage Expense" }}
						></Stack.Screen>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpensesContextProvider>
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
<></>;
