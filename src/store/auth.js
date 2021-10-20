const { default: axios } = require("axios");

export const namespaced = true;

export const state = () => ({
  loggedIn: localStorage.getItem("user") ? true : false,
  user: JSON.parse(localStorage.getItem("user")) || null,
});

export const actions = {
  async login({ commit }, credentials) {
    await axios.get("sanctum/csrf-cookie");

    const response = (await axios.post("api/login", credentials)).data;

    localStorage.setItem("token", `Bearer ${response.token}`);
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );

    const res = (await axios.get("api/me")).data;

    localStorage.setItem("user", res.user);
    localStorage.setItem("loggedIn", true);
    commit("setUser", res.user);
  },

  async logout({ commit }) {
    const response = (await axios.post("api/logout")).data;

    if (response) commit("logout");
  },

  async ftechUser({ commit }) {
    const res = (await axios.get("me")).data;

    await localStorage.setItem("user", res.user);
    commit("setUser", res.user);
  },
};

export const getters = {};

export const mutations = {
  setUser: (state, user) => (state.user = user),
  logout: (state) => {
    state.user = {};
    state.loggedIn = false;

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
