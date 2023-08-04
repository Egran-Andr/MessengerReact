import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"
import "./style.scss";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { currentUser } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage/>} />
                    <Route path="register" element={<RegistrationPage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>

  );
}

export default App;
