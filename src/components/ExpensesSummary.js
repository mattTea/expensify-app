import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    {console.log(props.expenseCount)}
    {
      !props.expenseCount || props.expenseCount.length === 0 ? (
        <p>No expenses to view</p>
      ) : (
        <p>{`Viewing ${props.expenseCount.length} expenses totalling ${numeral(selectExpensesTotal(props.expenseCount) / 100).format('$0,0.00')}`}</p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters)
    // expensesTotal: selectExpensesTotal(state.expenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);