import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {UsersList} from "./components/UsersList";
import {Posts} from "./components/Posts";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UsersList />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/posts/:userId",
        element: <Posts />,
    },
]);


function App() {

    return (
        <RouterProvider router={router} />
    );
}

export default App;
