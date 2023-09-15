import { AllPokemons, HomeLayout, Info } from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/Pokemons/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <AllPokemons />,
      },
      {
        path: 'info',
        element: <Info />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}



