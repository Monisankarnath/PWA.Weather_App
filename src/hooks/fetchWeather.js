import axios from 'axios';

const url='https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'cea1dcee68018ec13c1d3f426476f77a';
export const fetchWeather = async (query)=>{
    const {data}=await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });
    return data;
}