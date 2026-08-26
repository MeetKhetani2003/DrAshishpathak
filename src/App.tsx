import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ExpertBoard from "@/pages/ExpertBoard";
import Services from "@/pages/Services";
import Methodology from "@/pages/Methodology";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import Disclaimer from "@/pages/Disclaimer";
import Privacy from "@/pages/Privacy";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expert-board" element={<ExpertBoard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
