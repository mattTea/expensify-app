import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE (this dispatches the object to the store)
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// START_ADD_EXPENSE (dispatched the function required for the async action to firebase)
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => { // <- added return at start of line so it can be returned in promise in test (and additional chained promises can be attached)
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});