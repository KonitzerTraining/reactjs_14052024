import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { StartPage } from './pages/start/StartPage';
import { AboutPage } from './pages/legal/AboutPage';
import { HelpIndex } from './pages/help/HelpIndex';
import { MainNavigation } from './MainNavigation';

function App() {


  // jsx / tsx-Code
  return (
    <>
     <BrowserRouter>
     <MainNavigation></MainNavigation>
      <Routes>
        <Route path='/' element={<StartPage></StartPage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/help' element={<HelpIndex></HelpIndex>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App


