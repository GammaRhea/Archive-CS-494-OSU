import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import moment from "moment"
import { Global, css } from '@emotion/react'
import styled from "@emotion/styled"

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'
import useWeatherSearch from '../hooks/useWeatherSearch'

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    html {
        font-family: 'Comfortaa', sans-serif;
    }
    body {
        margin: 0;
    }
`

const NiceHeaderOne = styled.h1`
    margin-left: 30px;
`

const NiceHeaderTwo = styled.h2`
    margin-left: 30px;
`

const NiceInput = styled.input`
    width: 25%;
    min-height: 22.5px;
    padding: 12px 20px;
    margin-left: 30px;
    border: 2px solid Black;
    border-radius: 4px;
    font-size: 18px;
`

const NiceButton = styled.button`
    width: 10%;
    min-height: 50px;
    color: Snow;
    background-color: DarkSeaGreen;
`

const Ul = styled.ul`
display: inline-block;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
`

const Li = styled.li`
    float: left;
    border: 3px solid black;
    display: block;
    text-align: center;
    margin: 2px;
    padding: 14px 16px;
    text-decoration: none;
    min-width: 275px;
    background-image: linear-gradient(White, DarkSeaGreen);
`

const TempDisplay = styled.p`
    color: black;

    & > Hot {
        color: Coral;
    }

    & > Cold {
        color: CornflowerBlue;
    }
`

const Wrapper = styled.div`
    text-align: center;
`

function Search({ query }) {
    const [ searchParams, setSearchParams ] = useSearchParams()

    const [ inputQuery, setInputQuery ] = useState(searchParams.get("q") || "")

    const [ forecast, loading, error ] = useWeatherSearch(searchParams.get("q"))

    return (
        <>
            <Global styles={globalStyles} />
            <div>
                <NiceHeaderOne>Forecast Search Application</NiceHeaderOne>
                <form onSubmit={e => {
                    e.preventDefault()
                    setSearchParams({ q: inputQuery })
                }}> 
                    <NiceInput value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                    <NiceButton type="submit">Search</NiceButton>
                </form>
                <NiceHeaderTwo>City Forecast: {searchParams.get("q")}</NiceHeaderTwo>
                {error && <ErrorContainer>An Error Occurred...</ErrorContainer>}
                {loading ? <Spinner /> : (
                    <Wrapper>
                        <Ul>
                            {forecast.map(weather => (
                                <Li key={weather.dt}>
                                    <h3>{moment(weather.dt_txt).format("dddd MMMM Do")}</h3>
                                    <TempDisplay><cold>{weather.main.temp_min} °F</cold> - <hot>{weather.main.temp_max} °F</hot></TempDisplay>
                                    <img src={`icons/${weather.weather[0].icon}.png`}></img>
                                    <p>{weather.pop * 100}% ☔</p>
                                    <p>{weather.weather[0].description}</p>
                                </Li>
                            ))}
                        </Ul>
                    </Wrapper>
                )}
            </div>
        </>
    )
}

// This assignment gave me Emotion-al Damage
// https://youtu.be/Nid2HId9EVY

export default Search