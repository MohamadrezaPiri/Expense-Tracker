import React, { useState } from 'react';
import styles from './ExpenseTracker.module.css';
import Overview from '../OverView/Overview';
import Transactions from '../Transactions/Transactions';

function ExpenseTracker() {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([])


    return (
        <section>
            <Overview expense={expense}
                setExpense={setExpense}
                income={income} setIncome={setIncome}
                transactions={transactions}
                setTransactions={setTransactions} />


            <Transactions transactions={transactions} />
        </section>
    )
}

export default ExpenseTracker;