import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";


const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </>
    )
}

export default Routers;