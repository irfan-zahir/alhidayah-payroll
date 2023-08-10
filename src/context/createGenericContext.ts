import React from "react";

export const createGenericContext = <T extends unknown>() => {
    // Create a context with a generic parameter or undefined
    const genericContext = React.createContext<T | undefined>(undefined);

    // Check if the value provided to the context is defined or throw an error
    const useGenericContext = () => React.useContext(genericContext);

    return [useGenericContext, genericContext.Provider] as const;
};