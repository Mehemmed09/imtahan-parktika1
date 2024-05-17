
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "../src/Routes/routes";
import MainContext from "./context/context";
import { useState } from "react";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    const router = createBrowserRouter(ROUTES);
    return (
        <>
        <MainContext.RouterProvider value={{data, setdata, loading, setLoading, error, setError}}>
            <RouterProvider router={router }/>
        </MainContext.RouterProvider>
        </>
    );
}

export default App;
