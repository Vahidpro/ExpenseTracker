import { createContext, useReducer } from "react";
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
	{
		id: "e5",
		description: "pants",
		amount: 59.32,
		date: new Date("2023-01-29"),
	},
	{
		id: "e6",
		description: "Pillow",
		amount: 32.48,
		date: new Date("2023-01-30"),
	},
	{
		id: "e7",
		description: "Chair",
		amount: 68.29,
		date: new Date("2023-01-30"),
	},
	{
		id: "e8",
		description: "TV",
		amount: 74.32,
		date: new Date("2023-01-27"),
	},
];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
	switch (action.type) {
		case "ADD":
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];

		case "SET":
			return action.payload;
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
}

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	function addExpense(expenseData) {
		dispatch({ type: "ADD", payload: expenseData });
	}
	function setExpenses(expenses) {
		dispatch({ type: "SET", payload: expenseData });
	}
	function updateExpense(id, expenseData) {
		dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
	}
	function deleteExpense(id) {
		dispatch({ type: "DELETE", payload: id });
	}

	const value = {
		expenses: expensesState,
		setExpenses: setExpenses,
		addExpense: addExpense,
		updateExpense: updateExpense,
		deleteExpense: deleteExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
}

export default ExpensesContextProvider;
