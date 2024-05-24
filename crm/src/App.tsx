import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { StartPage } from './features/start/StartPage';
import { AboutPage } from './features/legal/AboutPage';
import { HelpIndex } from './features/help/HelpIndex';
import { MainNavigation } from './MainNavigation';
import { CustomersIndex } from './features/customers/CustomersIndex';

function App() {

  // jsx / tsx-Code
  return (
    <>
     <BrowserRouter>
     <MainNavigation></MainNavigation>
      <Routes>
        <Route path='/' element={<StartPage></StartPage>}></Route>
        <Route path='/dashboard//*' element={<CustomersIndex></CustomersIndex>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/help' element={<HelpIndex></HelpIndex>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App


