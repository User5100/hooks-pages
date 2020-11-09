import React from "react";
import { useWebHookDispatch, addWebHook } from "./Context/Context";
import { getFormFields } from "./utils";
import { v4 as uuidv4 } from "uuid";

const individualEvents = [
  {
    name: "nps",
    label: "NPS",
  },
  {
    name: "referrerRegistration",
    label: "Referrer Registration",
  },
];

const AddWebHooks = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useWebHookDispatch();

  const handleOnChange = (event: any) => {
    if (event.target.dataset.specific) {
      setShow(true);
      return;
    }
    setShow(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const webHook: any = {
      id: uuidv4(),
      ...getFormFields(event.currentTarget.elements),
    };

    addWebHook(dispatch, webHook);
  };

  return (
    <>
      <h2>Add webhook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label htmlFor="payloadUrl">Payload Url *</label>
          <input
            id="payloadUrl"
            name="payloadUrl"
            placeholder="https://example.com/postreceive"
          />
        </div>
        <div>
          <label htmlFor="secret">Secret</label>
          <input id="secret" name="secret" />
        </div>

        <p>Which events would you like to trigger this webhook?</p>
        <div>
          <input
            type="radio"
            id="triggerEverything"
            name="triggerOnAllEvents"
            onChange={handleOnChange}
            checked={!show}
          />
          <label htmlFor="triggerEverything">Send everything</label>
        </div>
        <div>
          <input
            type="radio"
            id="triggerSpecific"
            data-specific="specific"
            onChange={handleOnChange}
            checked={show}
          />
          <label htmlFor="triggerSpecific">
            Let me select individual events.
          </label>
        </div>
        {show && (
          <div>
            {individualEvents.map(({ name, label }) => {
              return (
                <div>
                  <input type="checkbox" id={name} name={name} value={name} />
                  <label htmlFor={name}>{label}</label>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <div>
            <input type="checkbox" id="active" name="active" value="specific" />
            <label htmlFor="active">Active</label>
            <p>WE will deliver event details when this hook is triggered</p>
          </div>
        </div>
        <button type="submit">Add webhook</button>
      </form>
    </>
  );
};

export default AddWebHooks;
