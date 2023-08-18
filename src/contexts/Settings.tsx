import { createContext, useContext, useEffect, useState } from "react";
import { getSettings } from "../lib/settings";

const SettingsContext = createContext(null);

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const fetchedSettings = await getSettings();

        setSettings(fetchedSettings);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
