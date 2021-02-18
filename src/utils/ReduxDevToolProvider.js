import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";

const ReduxDevtoolsContext = React.createContext();

export const useReduxDevtools = (fct, name = fct.name) => {
  return useContext(ReduxDevtoolsContext)(fct, name);
};

function useInternalReduxDevtools() {
  // eslint-disable-next-line no-underscore-dangle
  const withDevTools =
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  const devTools = { send: () => {} };

  useEffect(() => {
    if (withDevTools) {
      // eslint-disable-next-line no-underscore-dangle
      devTools.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
      devTools.current.init();

      return () => {
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();
      };
    }

    return () => {};
  });

  return (fct, name) => {
    return (...args) => {
      devTools.current.send(name, args);

      return fct(...args);
    };
  };
}

const ReduxDevtoolsProvider = ({ children }) => {
  const tool = useInternalReduxDevtools();

  return (
    <ReduxDevtoolsContext.Provider value={tool}>
      {children}
    </ReduxDevtoolsContext.Provider>
  );
};

ReduxDevtoolsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReduxDevtoolsProvider;
