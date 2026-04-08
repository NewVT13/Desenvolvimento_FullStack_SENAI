import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CriarConta from "./pages/criar_conta/CriarConta.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CriarConta />
	</StrictMode>
);
