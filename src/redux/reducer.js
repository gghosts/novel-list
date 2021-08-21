import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addBookReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeBooks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateBooks: (state, action) => {
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            item: action.payload.item,
          };
        }
        return book;
      });
    },
    completeBooks: (state, action) => {
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            completed: true,
          };
        }
        return book;
      });
    },
  },
});

export const { addBooks, removeBooks, updateBooks, completeBooks } =
  addBookReducer.actions;
export const reducer = addBookReducer.reducer;
