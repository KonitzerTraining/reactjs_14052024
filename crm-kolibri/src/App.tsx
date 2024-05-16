import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StartPage } from './pages/start/StartPage';
import { HelpIndex } from './pages/help/HelpIndex';

import { AboutPage } from './pages/about/AboutPage';
import { CustomerIndex } from './pages/customers/CustomerIndex';
import { MainNavigation } from './MainNavigation';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage></StartPage>,
      errorElement: <h1>Page Not Found</h1>
    },
    {
      path: "/dashboard",
      element: <CustomerIndex></CustomerIndex>,
    },
    {
      path: "/about",
      element: <AboutPage></AboutPage>,
    },
    {
      path: "/help",
      element: <HelpIndex></HelpIndex>,
    },
  ]);

  return (
    <>
      <MainNavigation></MainNavigation>
      <RouterProvider router={router} />
    </>
  )
}

export default App
