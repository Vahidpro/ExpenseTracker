import axios from "axios";

const BACKEND_URL =
	"https://expensetracker-fd54a-default-rtdb.asia-southeast1.firebasedatabase.app";

export function storeExpense(expenseData) {
	axios.post(BACKEND_URL + "/expenses.json/", expenseData);
}
export function fetchExpenses() {
	axios.get(BACKEND_URL + "/expenses.json/");

	const expenses = [];

	for (const key in response.data) {
		const expenseObj = {
			id: key,
			amount: response.data[key].amount,
			date: new Data(response.data[key].date),
			description: response.data[key].description,
		};

		expenses.push(expenseObj);
	}

	return expenses;
}
