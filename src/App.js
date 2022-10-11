import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
