import { Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Reengenharia } from "../pages/Reengenharia";
import { Services } from "../pages/Services";
import { WhoWeAre } from "../pages/WhoWeAre";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servi%C3%A7os" element={<Services />} />
            <Route path="/quem-somos" element={<WhoWeAre />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/reengenharia" element={<Reengenharia />} />
        </Routes>
    )
}