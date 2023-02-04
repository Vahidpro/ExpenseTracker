import axios from "axios";

export function StoreExpense(expenseData) {
	axios.post(
		"https://expensetracker-fd54a-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json/",
		expenseData
	);
}
