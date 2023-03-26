import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { history, fetchWrapper } from "_helpers";

// create slice

const name = "cards";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const cardsActions = { ...slice.actions, ...extraActions };
export const cardsReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    cards: {},
  };
}

function createExtraActions() {
  //const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
  const baseUrl = `${process.env.REACT_APP_API_URL}/cards`;

  return {
    getAllCards: getAllCards(),
  };

  function getAllCards() {
    return createAsyncThunk(
      `${name}/getAllCards`,
      //async ({ username, password }) => await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
      async () => await fetchWrapper.get(`${baseUrl}`)
    );
  }
}

function createExtraReducers() {
  return {
    ...getAllCards(),
  };

  function getAllCards() {
    var { pending, fulfilled, rejected } = extraActions.getAllCards;
    return {
      [pending]: (state) => {
        state.cards = { loading: true };
      },
      [fulfilled]: (state, action) => {
        const { results, page, limit, totalPages, totalResults } =
          action.payload;
        state.cards = results;
        localStorage.setItem("cards", JSON.stringify(results));
      },
      [rejected]: (state, action) => {
        state.cards = { error: action.error };
      },
    };
  }
}
