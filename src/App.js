import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import Income from './components/Income/Income'
import History from './components/History/History'
import AddnewTransaction from './components/AddNewTransaction/AddNewTransaction'
const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <Income />
      <History />
      <AddnewTransaction />
    </div>
  )
}

export default App
