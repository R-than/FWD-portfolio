import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "../pages/HomePage";
import DetailedPage from "../pages/DetailedPage";


export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}> </Route>
                    <Route path="/:name" element={<DetailedPage/>}> </Route>
                   
                </Routes>
            </BrowserRouter>
        </div>
    )
}