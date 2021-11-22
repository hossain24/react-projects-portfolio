import React from 'react';
import { useGetWeatherQuery } from '../ReduxToolkit/weatherSlice';
const WeatherApi = () => {

    const { data, error, isLoading } = useGetWeatherQuery();
    console.log(data)

    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <>
                <div className="col-md-12">
                    <div div className="ml-3"></div>
                    {data && (
                        <ul className="divide-y divide-gray-200">
                            <li className="text-sm font-medium text-gray-900">{data.ip}</li>
                            <li className="text-sm font-medium text-gray-900">{data.city}</li>
                            <li className="text-sm font-medium text-gray-900">{data.country_code}</li>
                        </ul>
                    )}
                </div>
            </>
        )
}

export default WeatherApi;

