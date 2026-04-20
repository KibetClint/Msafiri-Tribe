import { createContext, useContext, useState } from "react";

const NavbarVisibilityContext = createContext<{
  isHeaderVisible: boolean;
  setIsHeaderVisible: (v: boolean) => void;
}>({ isHeaderVisible: true, setIsHeaderVisible: () => {} });

export const NavbarVisibilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  return (
    <NavbarVisibilityContext.Provider
      value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </NavbarVisibilityContext.Provider>
  );
};

export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);
