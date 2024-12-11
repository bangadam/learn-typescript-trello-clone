import { AppState } from "./state/appStateReducer";

const endpoint = import.meta.env.VITE_BACKEND;

export const save = (payload: AppState) => {
  return fetch(`${endpoint}/save`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in network");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Finally");
    });
};

export const load = () => {
  return fetch(`${endpoint}/load`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in network");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
