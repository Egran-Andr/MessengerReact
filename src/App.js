import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"
import "./style.scss";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login"/>
        }
        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<ProtectedRoute>
                        <HomePage></HomePage>
                    </ProtectedRoute>}/>
                    <Route path="login" element={<LoginPage/>} />
                    <Route path="register" element={<RegistrationPage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>

  );
}

export default App;
