import { configureStore } from "@reduxjs/toolkit";
import { STORAGE_KEY } from "./contactsSlice.js";
import { contactsReducer } from "./contactsSlice.js";
import { filtersReducer } from "./filtersSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const contacstListPeristConfig = {
  key: STORAGE_KEY,
  storage,
  whitelist: ["items"],
};
export const store = configureStore({
  reducer: {
    selectContacts: persistReducer(contacstListPeristConfig, contactsReducer),
    selectNameFilter: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
