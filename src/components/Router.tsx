import { Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Obrigado } from "../pages/Obrigado";
import { Reengenharia } from "../pages/Reengenharia";
import { Services } from "../pages/Services";
import { WhoWeAre } from "../pages/WhoWeAre";

export function Router() {

    return (
        <Routes>
            <Route path="/site-novo" element={<Home />} />
            <Route path="/site-novo/servi%C3%A7os" element={<Services />} />
            <Route path="/site-novo/quem-somos" element={<WhoWeAre />} />
            <Route path="/site-novo/contato" element={<Contact />} />
            <Route path="/site-novo/reengenharia" element={<Reengenharia />} />
            <Route path="/site-novo/obrigado" element={<Obrigado />} />
        </Routes>
    )
}