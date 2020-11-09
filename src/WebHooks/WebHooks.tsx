import React from "react";
import { Link } from "react-router-dom";
import {
  useWebHookState,
  useWebHookDispatch,
  getWebHooks,
} from "./Context/Context";

const WebHooks = () => {
  const [{ webHooks }, _]: any = useWebHookState();
  const dispatch = useWebHookDispatch();

  React.useEffect(() => {
    getWebHooks(dispatch);
  }, []);

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }
  ) => {
    const {
      dataset: { id = "" },
    } = event.target;

    dispatch({ type: "remove", id });
  };

  return (
    <>
      <h2>Webhooks</h2>
      <Link to="/add">Add webhook</Link>
      <ul>
        {webHooks &&
          webHooks.map(({ id, name }: any) => (
            <li key={id}>
              <span>{name}</span>
              <Link to={`/edit/${id}`}>Edit</Link>
              <button data-id={id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default WebHooks;
