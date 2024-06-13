import React from 'react'
import Header from './components/Header'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import { GlobalProvider } from './context/GlobalState'
import AddTransaction from './components/AddTransaction'
import IncomeExpenses from './components/incomeExpenses'
const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
