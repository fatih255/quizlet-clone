import React, { useContext } from 'react';

const HeaderContext = React.createContext({});

const useHeaderContext = () => useContext(HeaderContext);

export { HeaderContext, useHeaderContext }