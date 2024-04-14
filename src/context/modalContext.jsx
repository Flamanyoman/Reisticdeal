import { createContext, useState, useMemo, useEffect } from 'react';

const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [state, setState] = useState({ state: false, id: '' });

  const modal = useMemo(() => ({ state, setState }), [state, setState]);

  // useEffect(() => {
  //   return () => {
  //     setState(false);
  //   };
  // }, []);

  return (
    <ModalContext.Provider value={modal}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
