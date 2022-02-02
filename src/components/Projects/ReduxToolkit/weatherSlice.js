import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherApiHeaders = {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '1t2bPR9ORNmshL1dpDqzHKTGqcmup1u9OV5jsnt825h2ryphUw'
}

const createRequest = (url) => ({ url, headers: weatherApiHeaders, params: { q: '81.193.180.199' } });

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://weatherapi-com.p.rapidapi.com/' }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: () => createRequest('/ip.json'),
        }),
    })
})


export const { useGetWeatherQuery } = weatherApi;

