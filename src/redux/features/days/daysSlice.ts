import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DayOfWeek, Difficulty, Protein } from '@common/enums';

interface SelectedDayOptions {
    protein?: Protein;
    difficulty?: Difficulty;
}

type DaysState = Partial<Record<DayOfWeek, SelectedDayOptions>>

const initialState: DaysState = {};

export const daysSlice = createSlice({
    name: 'days',
    initialState,
    reducers: {
        saveDays: (state, action: PayloadAction<Partial<Record<DayOfWeek, SelectedDayOptions>>>) => {
            state = action.payload;
        },
        toggleDay: (state, action: PayloadAction<DayOfWeek>) => {
            if (state[action.payload]) {
                delete state[action.payload];
            } else {
                state[action.payload] = {};
            }
        },
        addProtein: (state, action: PayloadAction<{ day: DayOfWeek, protein: Protein }>) => {
            const { day, protein } = action.payload;
            if (state[day]) {
                state[day]!.protein = protein;
            }
        },
        addDifficulty: (state, action: PayloadAction<{ day: DayOfWeek, difficulty: Difficulty }>) => {
            const { day, difficulty } = action.payload;
            if (state[day]) {
                state[day]!.difficulty = difficulty;
            }
        },
        selectAllDays: (state) => {
            Object.values(DayOfWeek).forEach((d) => {
                if (!state[d]) {
                    state[d] = {}
                }
            })
        },
        selectAllWeekdays: (state) => {
            [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday].forEach((d) => {
                if (!state[d]) {
                    state[d] = {}
                }
            })
        },
        selectAllWeekends: (state) => {
            [DayOfWeek.Sunday, DayOfWeek.Saturday].forEach((d) => {
                if (!state[d]) {
                    state[d] = {}
                }
            })
        }
    }
});

export const { saveDays, addDifficulty, addProtein, toggleDay, selectAllDays, selectAllWeekdays, selectAllWeekends } = daysSlice.actions;

export const getDifficultyForDay = (state: RootState, day: DayOfWeek) => state.days[day]?.difficulty;
export const getProteinForDay = (state: RootState, day: DayOfWeek) => state.days[day]?.protein;
export const getDays = (state: RootState) => state.days;
export const getDayInfo = (state: RootState, day: DayOfWeek) => state.days[day];


export default daysSlice.reducer;