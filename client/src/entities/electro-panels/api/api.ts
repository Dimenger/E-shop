import axios from "axios";
import type { ElectroPanel } from "../model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchElectroPanels = createAsyncThunk<ElectroPanel[]>(
  "electroPanels/fetchAll",
  async () => {
    const res = await axios.get<ElectroPanel[]>(
      "http://localhost:3000/single-phase",
    );
    return res.data;
  },
);

export const updateElectroPanel = createAsyncThunk<ElectroPanel, ElectroPanel>(
  "electroPanels/update",
  async (panel) => {
    const res = await axios.patch<ElectroPanel>(
      `http://localhost:3000/single-phase/${panel.id}`,
      panel,
    );
    return res.data;
  },
);

export const createElectroPanel = createAsyncThunk<ElectroPanel, ElectroPanel>(
  "electroPanels/create",
  async (panel) => {
    const res = await axios.post<ElectroPanel>(
      `http://localhost:3000/single-phase`,
      panel,
    );
    return res.data;
  },
);

export const deleteElectroPanel = createAsyncThunk<string, string>(
  "electroPanels/delete",
  async (id) => {
    await axios.delete(`http://localhost:3000/single-phase/${id}`);
    return id;
  },
);
