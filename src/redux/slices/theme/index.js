/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import makeRequest from '../../../utils/makeRequest';
import { GET_THEMES, SAVE_THEME } from '../../../constants/apiEndPoints';

export const fetchPreferredTheme = createAsyncThunk(
  'fetchPreferredTheme',
  async () => {
    const { themes, preferredThemeId } = await makeRequest(GET_THEMES);
    const preferredTheme = themes.find(
      (theme) => theme.id === preferredThemeId
    );
    return preferredTheme.colorHexCode;
  }
);

export const setPreferredTheme = createAsyncThunk('setPreferredTheme', async (args, thunkAPI) => {
  const { theme } = args;
  await makeRequest(SAVE_THEME, {
    data: {
      preferredThemeId: theme.id
    }
  });
  return theme.colorHexCode;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    colorCode: '#000000',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreferredTheme.fulfilled, (state, action) => {
      state.colorCode = action.payload;
    });
    builder.addCase(fetchPreferredTheme.rejected, (state) => {
      state.colorCode = '#000000';
    });
    builder.addCase(fetchPreferredTheme.pending, (state) => {
      state.colorCode = '#000000';
    });
    builder.addCase(setPreferredTheme.fulfilled, (state, action) => {
      state.colorCode = action.payload;
    });
    builder.addCase(setPreferredTheme.rejected, () => {/*nothing to do*/ });
    builder.addCase(setPreferredTheme.pending, () => {/*nothing to do*/ });
  },
});
export default themeSlice.reducer;
