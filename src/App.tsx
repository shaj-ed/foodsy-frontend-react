import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import AppInit from "./AppInit";

function App() {
  return (
    <AppInit>
      <RouterProvider router={routes} />
    </AppInit>
  );
}

export default App;
