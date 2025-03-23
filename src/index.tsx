import { createRoot } from "react-dom/client";
import "./styles/base.sass";
import { Routes } from "~routes/routes";

const container = document.getElementById("root")!;

const root = createRoot(container);

root.render(<Routes />);
