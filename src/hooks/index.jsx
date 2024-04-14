import { useState } from 'react';

export const modal = (src) => {
  const [state, setState] = useState(true);

  const handleModal = () => {
    setState((prevState) => !prevState);
  };

  return { state, handleModal, src };
};
