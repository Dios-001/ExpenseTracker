import React from 'react'
import Header from './components/Header'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeExpenses from './components/incomeExpenses'
const App = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </>
  )
}

export default App
