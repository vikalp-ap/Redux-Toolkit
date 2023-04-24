const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIceCreams--;
    },
    restocked: (state, action) => {
      state.noOfIceCreams = state.noOfIceCreams + action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state) => {
      state.noOfIceCreams--;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
