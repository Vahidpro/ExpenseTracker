import axios from "axios";

const BACKEND_URL =
	"https://expensetracker-fd54a-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function storeExpense(expenseData) {
	const response = await axios.post(
		BACKEND_URL + "/expenses.json/",
		expenseData
	);
	const id = response.data.name;
	return id;
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
