import axios from "axios";

const BASE_URL = "http://localhost:3000";

const webHookClient = {
  updateWebHook: (webHook: any, updates: any) => {
    return axios.get(`${BASE_URL}/posts/1`).then((res) => {
      console.log(res);

      return Promise.resolve({ ...webHook, ...updates });
    });
  },
  getWebHooks: () => {
    return axios.get(`${BASE_URL}/hooks/`).then((res) => {
      return res.data;
    });
  },
  addWebHook: (webHook: any) => {
    const { nps, referrerRegistration, ...rest } = webHook;

    const events = [nps, referrerRegistration].reduce(
      (accumulator, current, index) => {
        if (!current) return accumulator;

        return [
          ...accumulator,
          {
            name: Object.keys({ nps, referrerRegistration })[index],
            send: current,
          },
        ];
      },
      []
    );

    return axios
      .post(`${BASE_URL}/hooks/`, {
        ...rest,
        events,
      })
      .then((res) => {
        return res.data;
      });
  },
};

export default webHookClient;
