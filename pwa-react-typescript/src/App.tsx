import './App.css'
import SamplePage from './pages/SamplePage'
import { Route, Routes } from 'react-router-dom'
import QrCode from './components/QrCode';

function App() {
  const list: [number] = [1];
  for (let i = 1; i <= 400; i++){
    list.push(i);
  }
 
  const pages = list.map((number) =>
    <Route path={"/" + number} key={number} element={<SamplePage room={number}/>} />
  )
      
  return (
    <div className="App">
      <Routes>
       <Route path="/"  element={<QrCode />} />
        {pages}
      </Routes>
      
    </div>
  )
}

export default App
