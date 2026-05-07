import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FilterState {
    searchQuery: string;
    periods: string[];
    diets: string[];
    sortBy: 'name' | 'period' | 'length' | 'weight';
}

const initialState: FilterState = {
    searchQuery: '',
    periods: [],
    diets: [],
    sortBy: 'name',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload
        },
        togglePeriod(state, action: PayloadAction<string>) {
            const period = action.payload
            if (state.periods.includes(period)) {
                state.periods = state.periods.filter(p => p !== period)
            } else {
                state.periods.push(period)
            }
        },
        toggleDiet(state, action: PayloadAction<string>) {
            console.log(action.payload)
            const diet = action.payload 
            if (state.diets.includes(diet)) {
                state.diets = state.diets.filter(d => d !== diet)
            } else {
                state.diets.push(diet)
            }
        },
        setSortBy(state, action: PayloadAction<FilterState['sortBy']>) {
            state.sortBy = action.payload
        },
        clearFilter(state) {
            state.searchQuery = ''
            state.periods = []
            state.diets = []
            state.sortBy = 'name'
        },
    },
})

export const { setSearchQuery, togglePeriod, toggleDiet, setSortBy, clearFilter} = filterSlice.actions
export default filterSlice.reducer