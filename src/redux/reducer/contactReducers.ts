import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactForm } from "../../components/contacts/types";

const initialState: ContactForm = {
  fullname: "",
  email: "",
  message: "",
};

export const contactReducers = createSlice({
  name: "link",
  initialState,
  reducers: {
    contacSubmit: (_, action: PayloadAction<ContactForm>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { contacSubmit } = contactReducers.actions;

export default contactReducers.reducer;
