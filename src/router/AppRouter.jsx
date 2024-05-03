import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "../pages/HomePage";
import DetailedPage from "../pages/DetailedPage";
// import FrothPage from '../pages/FrothPage';
// import ClipprPage from '../pages/ClipprPage';
// import TicTacToePage from '../pages/TicTacToePage';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}> </Route>
                    <Route path="/:name" element={<DetailedPage/>}> </Route>
                    {/* <Route path="/Froth" element={<FrothPage/>}> </Route>
                    <Route path="/Clippr" element={<ClipprPage/>}> </Route>
                    <Route path="/TicTacToe" element={<TicTacToePage/>}> </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}