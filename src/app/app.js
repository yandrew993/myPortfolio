import { useEffect, useState } from "react";
import "../styles/globals.css";
import Update from "./update";

function MyApp({ Component, pageProps }) {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  useEffect(() => {
    setIsMaintenanceMode(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true");
  }, []);

  if (isMaintenanceMode) {
    return <Update />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
