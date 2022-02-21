import React, { useEffect, useState } from 'react';
import styles from './Transactions.module.css';

function Transactions({ transactions }) {

  const [searchItem, setSearchItem] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filter = (search) => {
    if (!search || search === "") {
      setFilteredTransactions(transactions)
    } else {
      setFilteredTransactions(transactions.filter(t => {
        return t.describtion.toLowerCase().includes(search.toLowerCase())
      }))
    }
  }


  const changeHandler = (e) => {
    setSearchItem(e.target.value)
    filter(e.target.value)
  }

  useEffect(() => {
    filter(searchItem)
  }, [transactions])

  return (
    <div>
      <input placeholder='Search for Transactions' className={styles.searchBox} type="text" value={searchItem} onChange={changeHandler} />
      {filteredTransactions.map(t => {
        return <div key={t.id} className={styles.Transaction}>
          <p>{t.describtion}</p>
          <p className={t.type === "income" ? styles.income : styles.expense}>{t.amount} $</p>
        </div>
      })}
    </div>
  )
}

export default Transactions;