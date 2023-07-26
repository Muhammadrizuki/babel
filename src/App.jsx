import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
        <Routes basename="/babel">
          <Route path="/babel/" exact element={<Home />} />
          <Route path="/babel/detail/" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
