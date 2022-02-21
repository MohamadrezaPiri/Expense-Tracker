import React, { useState } from 'react';
import AddTransaction from '../AddTransaction/AddTransaction';
import styles from './Overview.module.css';

function Overview({ expense, setExpense, income, setIncome, transactions, setTransactions }) {

    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <div className={styles.balance}>
                <p>Balance : {income - expense} $</p>
                <button className={isShow ? styles.cancelebtn : styles.addbtn} onClick={() => setIsShow(!isShow)}>{isShow ? "Cancel" : "Add"}</button>
            </div>
            {isShow && <AddTransaction
                isShow={isShow}
                setIsShow={setIsShow}
                expense={expense}
                setExpense={setExpense}
                income={income}
                setIncome={setIncome}
                transactions={transactions}
                setTransactions={setTransactions} />}
            <div className={isShow ? styles.expInc : styles.expIncDefault}>
                <div className={styles.expenseDiv}>
                    <p className={styles.expenseText}>Expense</p>
                    <p className={styles.expense}>{expense} $</p>
                </div>
                <div className={styles.incomeDiv}>
                    <p className={styles.incomeText}>income </p>
                    <p className={styles.income}>{income} $</p>
                </div>


            </div>
        </>
    )

}

export default Overview;