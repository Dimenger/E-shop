import { createSlice } from "@reduxjs/toolkit";
import type { ElectroPanel } from "./types";
import {
  fetchElectroPanels,
  updateElectroPanel,
  createElectroPanel,
  deleteElectroPanel,
} from "../api/api";

interface ElectroPanelsState {
  items: ElectroPanel[];
  current: ElectroPanel | null;
  isLoading: boolean;
  error: string | null;
}

export const initialElectroPanelsState: ElectroPanelsState = {
  items: [],
  current: null,
  isLoading: false,
  error: null,
};

export const panelsSlice = createSlice({
  name: "electroPanels",
  initialState: initialElectroPanelsState,
  reducers: {
    setCurrentPanel: (state, action: { payload: ElectroPanel | null }) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchElectroPanels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchElectroPanels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchElectroPanels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      })

      // update
      .addCase(updateElectroPanel.fulfilled, (state, action) => {
        const idx = state.items.findIndex((i) => i.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })

      // create
      .addCase(createElectroPanel.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })

      // delete
      .addCase(deleteElectroPanel.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export const { setCurrentPanel } = panelsSlice.actions;
export const electroPanelsReducer = panelsSlice.reducer;
