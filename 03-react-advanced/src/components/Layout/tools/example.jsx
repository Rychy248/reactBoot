import React, { createContext, useContext, useState } from 'react';

const MyContextA = createContext();
const MyContextB = createContext();
const MyContextCombinaded = createContext();

const MyProviderA = ({ children }) => {
  const [value, setValue] = useState('initialValue');
  const updateValue = (newValue) => { setValue(newValue); };

  return (
    <MyContextA.Provider value={{ value, updateValue }}>
      {children}
    </MyContextA.Provider>
  );
};

const MyProviderB = ({ children }) => {
  const [valueB, setValueB] = useState('initialValue');
  const updateValueB = (newValueB) => { setValueB(newValueB); };

  return (
    <MyContextB.Provider value={{ valueB, updateValueB }}>
      {children}
    </MyContextB.Provider>
  );
};

// Creamos un componente de proveedor combinado
const CombinedProvider = ({ children }) => {
  const contextA = useContext(MyContextA);
  const contextB = useContext(MyContextB);
  // Proporcionamos ambos contextos en un solo objeto
  const MyCombinedContext = {
    contextA: useContext(MyContextA),
    contextB: useContext(MyContextB)
  };

  return (
    <MyProviderA>
      <MyContextB>
        <MyContextCombinaded.Provider value={MyCombinedContext}>
          {children}
        </MyContextCombinaded.Provider>
      </MyContextB>
    </MyProviderA>
  );
};

// Función de un componente que usa el contexto
const MyComponent = () => {
  // Obtenemos el contexto singular
  const { contextA } = useContext(MyContextA);
  const { contextB } = useContext(MyContextB);
  // o el contexto combinado
  const { MyCombinedContext } = useContext(MyCombinedContext);
  return (
    <div>
      <p>Context A Value: {contextA.valueA}</p>
      <p>Context B Value: {contextB.valueB}</p>
      <p>Context both: {MyCombinedContext}</p>
      <button onClick={() => contextA.updateValueA('New Value A')}>Update Context A</button>
      <button onClick={() => contextB.updateValueB('New Value B')}>Update Context B</button>
    </div>
  );
};

// Componente principal que utiliza el CombinedProvider
const App = () => {
  return (
    <CombinedProvider>
      <MyComponent />
    </CombinedProvider>
  );
};

export default App;

