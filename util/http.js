import axios from 'axios';
export function storeEvent(expenseData) {
    axios.post(
        'https://wevolunteer-385e0-default-rtdb.firebaseio.com/events.json',
        expenseData

    );

}