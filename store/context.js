import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
    {
        name: 'Tutor Student',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'dfdsfsdf',
    },
    {
        name: 'Mentor a child',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'sdfsdfsdf',
    },
    {
        name: 'Coaching',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'sdfsdf',
    },
    {
        name: 'Reading Program',
        date: '7/18/2022',
        address: '7800 Alton Ave,CA 92412',
        description: 'dsfsdf',
    },

];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, name, date, address }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;