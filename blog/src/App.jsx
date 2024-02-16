import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import CriarPost from "./CriarPost.jsx";

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CriarPost" element={<CriarPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;