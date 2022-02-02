import React from 'react';
import './weather-api.scss';
import { useGetWeatherQuery } from '../ReduxToolkit/weatherSlice';
import HomeNav from '../HomeNav/HomeNav';


const WeatherAPI = () => {

    const { data, error, isLoading } = useGetWeatherQuery();
    console.log(data)

    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <>
                <HomeNav />
                <div className="WeatherAPI">
                    <div className="col-md-12">
                        <div div className="ml-3"></div>
                        {data && (
                            <div className="WeatherInfo">
                                <ul>
                                    <li className="box middle"><span>IP Address: </span>{data.ip}</li>
                                    <li className="box middle"><span>City: </span>{data.city}</li>
                                    <li className="box middle"><span>Country Code: </span>{data.country_code}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
}

export default WeatherAPI;

