/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAddress,  useMetamask, useSigner } from "@thirdweb-dev/react";
import { createContext } from "react";

export const SectifyContext = createContext();

export const SectifyProvider = ({ children }) => {
    const connectMetaMask = useMetamask();
    
    const signer = useSigner(); 
    

  return <SectifyContext.Provider value={{connectMetaMask, signer}}>{children}</SectifyContext.Provider>;
};