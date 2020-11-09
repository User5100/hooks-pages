import React from "react";
import { useParams } from "react-router-dom";
import {
  useWebHookDispatch,
  useWebHookState,
  updateWebHook,
} from "./Context/Context";
import { getFormFields } from "./utils";

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

const deliveries = [
  {
    name: "delivery 1",
    id: 1,
    success: true,
    date: new Date(),
  },
  {
    name: "delivery 2",
    id: 2,
    success: false,
    date: new Date(),
  },
  {
    name: "delivery 3",
    id: 3,
    success: true,
    date: new Date(),
  },
];

const EditWebHook = () => {
  const { id } = useParams();
  const [, findById]: any = useWebHookState();
  const dispatch = useWebHookDispatch();

  const {
    name,
    payloadUrl,
    secret,
    active,
    triggerOnAllEvents,
    events,
  } = findById(id);
  const [show, setShow] = React.useState(triggerOnAllEvents);

  const handleOnChange = (event: any) => {
    debugger;
    if (event.target.dataset.specific) {
      setShow(true);
      return;
    }
    setShow(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updates = getFormFields(event.currentTarget.elements);

    const webHook = {
      id,
    };
    updateWebHook(dispatch, webHook, updates);
  };

  const handleClick = () => {};
  return (
    <>
      <h2>Edit webhook {id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="payloadUrl">Payload Url *</label>
          <input
            id="payloadUrl"
            name="payloadUrl"
            placeholder="https://example.com/postreceive"
            defaultValue={payloadUrl}
          />
        </div>
        <div>
          <label htmlFor="secret">Secret</label>
          <input id="secret" name="secret" defaultValue={secret} />
        </div>

        <p>Which events would you like to trigger this webhook?</p>
        <div>
          <input
            type="radio"
            id="triggerEverything"
            name="triggerEverything"
            onChange={handleOnChange}
            checked={!show}
          />
          <label htmlFor="triggerEverything">Send everything</label>
        </div>
        <div>
          <input
            type="radio"
            id="triggerSpecific"
            name="triggerSpecific"
            data-specific="specific"
            onChange={handleOnChange}
            value={show}
          />
          <label htmlFor="triggerSpecific">
            Let me select individual events.
          </label>
        </div>
        {show && (
          <div>
            {individualEvents.map(({ name, label }, index) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    defaultChecked={events[index].send}
                  />
                  <label htmlFor={name}>{label}</label>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <div>
            <input
              type="checkbox"
              id="active"
              name="active"
              defaultChecked={active}
            />
            <label htmlFor="active">Active</label>
            <p>We will deliver event details when this hook is triggered</p>
          </div>
        </div>
        <button type="submit">Update webhook</button>
      </form>
      <>
        <h3>Recent deliveries</h3>
        <ul>
          {deliveries.map(({ name, success, id, date }) => {
            return (
              <li key={id} onClick={handleClick}>
                {success} {name} {id} {date.toISOString()}
              </li>
            );
          })}
        </ul>
      </>
      <>
        <h2>Recent delivery detail</h2>
        <div>success or not</div>
        <time>date</time>
      </>
    </>
  );
};

export default EditWebHook;
