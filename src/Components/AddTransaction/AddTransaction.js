import React, { useState } from 'react';
import styles from './AddTransaction.module.css'

function AddTransaction({ isShow, setIsShow, expense, setExpense, income, setIncome, transactions, setTransactions }) {

    const [describtion, setDescribtion] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");





    const desChangeHandler = (e) => {
        const value = e.target.value;
        setDescribtion(value);
    }

    const amountHandler = (e) => {
        const value = e.target.value;
        setAmount(value);
    }

    const typeHandler = (e) => {
        const value = e.target.value;
        // console.log(value)
        setType(value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTransactions([...transactions, {
            describtion: describtion, amount: amount, type: type, id: Math.floor(Math.random() * 1000)
        }
        ])
        setIsShow(!isShow);
        type === "expense" ? setExpense(expense + parseFloat(amount)) : setIncome(income + parseFloat(amount))
        console.log(expense);
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={desChangeHandler} placeholder='Describtion' type="text" />
            <input onChange={amountHandler} placeholder='Amount' type="number" />
            <div className={styles.radios}>
                <input id='expense' onClick={typeHandler} type="radio" name='type' value={"expense"} />
                <label htmlFor='expense' className={styles.firstLabel}>Expense</label>
                <input id='income' onClick={typeHandler} type="radio" name='type' value={"income"} />
                <label htmlFor='income'>Income</label>
            </div>
            <button type='submit' className={styles.addTransaction}>Add Transaction</button>
        </form>
    )
}

export default AddTransaction