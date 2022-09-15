import store from "../store";
import router from "../router";
import axios from "axios";

function presetAxios(accessToken: string) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

const addParamsToUrl = (url: string, params: any) => {
  const paramsToAdd = Object.keys(params).reduce((accumulator, key, index) => {
    const value = JSON.stringify(params[key]);
    return index > 0
      ? (accumulator += "&" + key + "=" + value)
      : (accumulator += key + "=" + value);
  }, "?");

  return url + paramsToAdd;
};

async function request(
  axiosMethod: any,
  url: string,
  body: any,
  needAuth: boolean,
  headers = {}
) {
  try {
    if (needAuth) {
      const accessToken = await store.getters["authStore/authToken"];
      presetAxios(accessToken);
    }
    const result = await axiosMethod(url, body, headers);

    return result;
  } catch (err: any) {
    if (needAuth && err.response.status === 401) {
      store.commit("authStore/setAuthenticated", false);
      store.commit("authStore/setAuthToken", null);
      store.commit("authStore/setUser", null);

      router.push("/login");
    }
    return err.request;
  }
}

const HTTPService = {
  get(url: string, needAuth = true) {
    return request(axios.get, url, null, needAuth);
  },
  post(url: string, data: any, needAuth = true) {
    return request(axios.post, url, data, needAuth);
  },
  put(url: string, data: any, needAuth = true) {
    return request(axios.put, url, data, needAuth);
  },
  delete(url: string, needAuth = true) {
    return request(axios.delete, url, null, needAuth);
  },
  addParamsToUrl,
};

export default HTTPService;
