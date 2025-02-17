import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    weatherData : ''
}

const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeatherData: (state, { payload }) => {
            state.weatherData = payload
        },
    },
})


export const { addWeatherData } = WeatherSlice.actions

export default WeatherSlice.reducer