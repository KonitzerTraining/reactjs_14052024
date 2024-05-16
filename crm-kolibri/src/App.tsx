import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StartPage } from './pages/start/StartPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);



  return (
    <>

      <StartPage></StartPage>
      <RouterProvider router={router} />

    </>
  )
}

export default App
