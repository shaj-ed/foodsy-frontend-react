import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import AppInit from "./AppInit";
import { useAuthStore } from "./store/authStore";
import SplashScreen from "./components/ui/splash-screen";

function App() {
  const isLoading = useAuthStore((e) => e.isLoading);

  return (
    <AppInit>
      {isLoading ? <SplashScreen /> : <RouterProvider router={routes} />}
    </AppInit>
  );
}

export default App;
