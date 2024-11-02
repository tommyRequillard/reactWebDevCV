import { createSlice } from '@reduxjs/toolkit';
import behavioralData from '../data/behavioralDatas.json';

const initialState = {
  data: behavioralData, // Utilisez les données importées comme état initial
};

const behavioralDataSlice = createSlice({
    name: 'behavioralData',
    initialState,
    reducers: {
        // Vous pouvez ajouter des reducers ici si nécessaire
    }
});

export const { actions } = behavioralDataSlice;
export default behavioralDataSlice.reducer;