import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Login from "./pages/Login/Login.tsx";
import CriarConta from "./pages/Criar_conta/CriarConta.tsx";
import Anuncios from "./pages/Anuncios/Anuncios.tsx";
import Home from "./pages/Home/Home.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/criar_conta" element={<CriarConta />} />
				<Route path="/anuncios" element={<Anuncios />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
