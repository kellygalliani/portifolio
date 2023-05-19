import { createContext, useState, useContext } from "react";

type LanguageContextType = {
  language: boolean;
  toggleLanguage: () => void;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};
const LanguageContext = createContext<LanguageContextType>({
  language: true,
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<boolean>(true);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => !prevLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
