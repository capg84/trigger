import React, { useState, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const InstructionContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useInstruction = () => useContext(InstructionContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function InstructionProvider({ children }) {
  // Creating our state
  const [rehomeInstruction, setInstruction] = useState(true);

  // Method to update our state
  const toggleInstruction = () => {
    console.log('inside toggle theme');
    return setInstruction((prev) => !prev);
  };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <InstructionContext.Provider value={{ rehomeInstruction, toggleInstruction }}>
      {children}
    </InstructionContext.Provider>
  );
}