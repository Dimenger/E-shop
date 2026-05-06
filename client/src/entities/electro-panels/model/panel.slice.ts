import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ElectroPanelModel } from "./types";

export interface PanelState {
  currentModel: ElectroPanelModel | null;
  selectedEnclosureId: number | null;
}

const initialState: PanelState = {
  currentModel: null,
  selectedEnclosureId: null,
};

export const panelsSlice = createSlice({
  name: "uiPanels",
  initialState,
  reducers: {
    setCurrentModel: (
      state,
      action: PayloadAction<ElectroPanelModel | null>,
    ) => {
      state.currentModel = action.payload;
      if (action.payload?.enclosures?.length) {
        state.selectedEnclosureId = action.payload.enclosures[0].id;
      } else {
        state.selectedEnclosureId = null;
      }
    },
    setSelectedEnclosure: (state, action: PayloadAction<number>) => {
      state.selectedEnclosureId = action.payload;
    },
  },
});

export const { setCurrentModel, setSelectedEnclosure } = panelsSlice.actions;
export const panelsReducer = panelsSlice.reducer;
