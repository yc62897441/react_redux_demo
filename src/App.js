import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentA from './container/ComponentA.jsx'
import ComponentB from './container/ComponentB.jsx'

function Home() {
  return (
    <div>Home</div>
  )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/a' element={<ComponentA />}></Route>
            <Route path='/b' element={<ComponentB />}></Route>
            <Route path='*' element={<Home />}>all</Route>
          </Routes>
        </BrowserRouter>
    </div >
  );
}

export default App;
