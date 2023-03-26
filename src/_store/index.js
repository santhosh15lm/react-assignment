import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth.slice";
import { cardsReducer } from "./cards.slice";
import { usersReducer } from "./users.slice";
import { addcardReducer } from "./add_card.slice";

export * from "./auth.slice";
export * from "./users.slice";
export * from "./cards.slice";
export * from "./add_card.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    cards: cardsReducer,
    addcard: addcardReducer,
  },
});
