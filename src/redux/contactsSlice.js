const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContacts(state, action) {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
