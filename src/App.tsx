import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import routes from './routes'

const router = createBrowserRouter(routes)

const App = () => <RouterProvider router={router} />

export default App
