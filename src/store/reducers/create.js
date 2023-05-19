import { createSlice } from "@reduxjs/toolkit";

const restaurantCreateSlice = createSlice({
  name: "create",
  initialState: {
    menu: [],
    name: "",
    type: "",
    file: null,
    opening: "",
    closing: "",
    location: "",
    full_name: "",
    owner_tel: "",
    owner_name: "",
    owner_email: "",
    restaurant_tel: "",
  },
  reducers: {
    AddMenu: (state, action) => {
      return state.menu.push(action.payload);
    },
    removeMenu: (state, action) => {
      return state.menu.filter((one) => one?.id === action.payload);
    },
    handleName: (state, action) => {
      state.name = action.payload;
    },
    handleFullname: (state, action) => {
      state.full_name = action.payload;
    },
    handleType: (state, action) => {
      state.type = action.payload;
    },
    handleFile: (state, action) => {
      state.file = action.payload;
    },
    handleOpening: (state, action) => {
      state.opening = action.payload;
    },
    handleClosing: (state, action) => {
      state.closing = action.payload;
    },
    handleLocation: (state, action) => {
      state.location = action.payload;
    },
    handleOwnerTel: (state, action) => {
      state.owner_tel = action.payload;
    },
    handleOwnerName: (state, action) => {
      state.owner_name = action.payload;
    },
    handleownerEmail: (state, action) => {
      state.owner_email = action.payload;
    },
    handleRestaurantTel: (state, action) => {
      state.restaurant_tel = action.payload;
    },
  },
});

export const {
  AddMenu,
  removeMenu,
  handleName,
  handleFullname,
  handleType,
  handleFile,
  handleOpening,
  handleClosing,
  handleLocation,
  handleOwnerTel,
  handleOwnerName,
  handleownerEmail,
  handleRestaurantTel,
} = restaurantCreateSlice.actions;

export default restaurantCreateSlice.reducer;
