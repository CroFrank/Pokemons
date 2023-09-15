import { AllPokemons, HomeLayout, Info, ThePokemon } from "./pages"
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
        path: '/Pokemons/:name',
        element: <ThePokemon />,
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



