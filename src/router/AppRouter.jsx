import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "../pages/HomePage";
import FrothPage from '../pages/FrothPage';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}> </Route>
                    <Route path="/Froth" element={<FrothPage/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}