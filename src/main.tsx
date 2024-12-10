import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { AppStateProvider } from "./state/AppStateContext.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DndProvider backend={Backend}>
			<AppStateProvider>
				<App />
			</AppStateProvider>
		</DndProvider>
	</StrictMode>
);
