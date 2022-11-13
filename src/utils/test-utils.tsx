import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { AppStore, RootState, setupStore } from "../store/store";
// As a basic setup, import your same slice reducers
import addressesReducer from "../store/addresses/addressesSlice";
import userEvent from "@testing-library/user-event";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      addresses: {
        modalOpen: false,
        addresses: [
          {
            line1: "12",
            line2: "",
            line3: "",
            line4: "",
            city: "",
            state_name: "New South Walse",
            state_code: "NSW",
            country_code: "AU",
            postal_code: "2001",
            id: 100,
          },
        ],
        editing: false,
        currentAddressId: undefined,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderWithRouter(
  ui: JSX.Element,
  { route = "/addresses" } = {}
) {
  window.history.pushState({}, "Test page", route);

  return {
    ...render(ui, { wrapper: Router }),
  };
}
