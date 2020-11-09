import React from "react";
import webHookClient from "./client";

const remove = (id: string) => (h: any) => h.id.toString() !== id;

const updateWebHook = async (dispatch: any, webHook: any, updates: any) => {
  try {
    const updatedWebHook = await webHookClient.updateWebHook(webHook, updates);
    dispatch({ type: "update", updatedWebHook });
  } catch (error) {
    dispatch({ type: "fail update", error });
  }
};

const getWebHooks = async (dispatch: any) => {
  try {
    const webHooks = await webHookClient.getWebHooks();
    dispatch({ type: "get", webHooks });
  } catch (error) {
    dispatch({ type: "fail get", error });
  }
};

const addWebHook = async (dispatch: any, newWebHook: any) => {
  try {
    const webHook = await webHookClient.addWebHook(newWebHook);

    dispatch({ type: "add", webHook });
  } catch (error) {
    dispatch({ type: "fail add", error });
  }
};

const DEFAULT_STATE = {
  webHooks: [],
};

interface State {
  webHooks: any;
}
type Action =
  | { type: "add" }
  | { type: "update" }
  | { type: "remove"; id: string }
  | { type: "get"; webHooks: any };
type Dispatch = (action: Action) => void;

const WebHookStateContext = React.createContext<State | undefined>(undefined);
const WebHookDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add": {
      return state;
    }

    case "remove": {
      return { webHooks: state.webHooks.filter(remove(action.id)) };
    }

    case "update": {
      return state;
    }

    case "get": {
      return { webHooks: action.webHooks };
    }

    default: {
      return state; // throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const WebHookProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, DEFAULT_STATE);
  return (
    <WebHookStateContext.Provider value={state}>
      <WebHookDispatchContext.Provider value={dispatch}>
        {children}
      </WebHookDispatchContext.Provider>
    </WebHookStateContext.Provider>
  );
};

const useWebHookState = () => {
  const context = React.useContext(WebHookStateContext);

  if (context === undefined) {
    throw new Error("useWebHookState must be used within WebHookProvider");
  }

  const findById = (id: string) =>
    context.webHooks.find((wh: any) => wh.id.toString() === id);

  return [context, findById];
};

const useWebHookDispatch = () => {
  const context = React.useContext(WebHookDispatchContext);

  if (context === undefined) {
    throw new Error("useWebHookDispatch must be used within WebHookProvider");
  }

  return context;
};

export {
  WebHookProvider,
  useWebHookState,
  useWebHookDispatch,
  updateWebHook,
  getWebHooks,
  addWebHook,
};
