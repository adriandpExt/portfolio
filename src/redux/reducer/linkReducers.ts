import { createSlice } from "@reduxjs/toolkit";

interface State {
  linkedinUrl: string;
  facebookUrl: string;
}

const initialState: State = {
  linkedinUrl: "",
  facebookUrl: "",
};

export const linkReducers = createSlice({
  name: "link",
  initialState,
  reducers: {
    linkedinUrl: (state: State, action) => {
      state.linkedinUrl = action.payload;
    },
    facebookinUrl: (state: State, action) => {
      state.facebookUrl = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { facebookinUrl, linkedinUrl } = linkReducers.actions;

export default linkReducers.reducer;
