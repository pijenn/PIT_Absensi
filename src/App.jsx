import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Detail from "./views/Detail";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                   <Route path="/detail" element={<Detail />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
