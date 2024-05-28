import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      //   uses by defult immer to store the data in the stack and not at the end of the array and then return the length.
      state.push(action.payload);
    },
    removeUser(state, action) {
      // remove the user from the state
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      // delete all users
      state.splice(0, state.length);
      // OR
      // you con directly return an empty [] because it refers to state only
      // return [];
    },
  },
});

export { userSlice };
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
