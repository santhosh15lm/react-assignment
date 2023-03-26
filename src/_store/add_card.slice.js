import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { history, fetchWrapper } from "_helpers";

// create slice

const name = "addcard";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const addcardActions = { ...slice.actions, ...extraActions };
export const addcardReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    card: {},
  };
}

function createExtraActions() {
  //const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
  const baseUrl = `${process.env.REACT_APP_API_URL}/cards`;

  return {
    add_card: add_card(),
  };

  function add_card() {
    //console.log(props.name);
    return createAsyncThunk(
      `${name}/addnewcard`,
      //async ({ username, password }) => await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
      async ({ name, cardExpiration, cardHolder, cardNumber, category }) =>
        await fetchWrapper.post(`${baseUrl}`, {
          name,
          cardExpiration,
          cardHolder,
          cardNumber,
          category,
        })
    );
  }
}

function createExtraReducers() {
  return {
    ...add_card(),
  };

  function add_card() {
    var { pending, fulfilled, rejected } = extraActions.add_card;
    return {
      [pending]: (state) => {
        state.card = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.card = action.payload;
        console.log(action.payload);
      },
      [rejected]: (state, action) => {
        state.card = { error: action.error };
      },
    };
  }
}
