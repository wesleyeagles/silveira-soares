import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servi%C3%A7os" element={<Services />} />
        </Routes>
    )
}