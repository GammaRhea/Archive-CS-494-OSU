import React, { useState, useEffect } from 'react'
import {
    Routes,
    Route,
    Link,
    NavLink,
    useNavigate,
    useParams,
    Outlet,
    Navigate
} from 'react-router-dom'

import './App.css'

import people from './data/people.json'
import planets from './data/planets.json'
import films from './data/films.json'

// const arrayOfPeopleObjects = Object.keys(People.name).map((key) => {
//     return people[key];
//   }); 

// const peopleMapped = Object.keys(people).map((people) => {
//     return {
//         name: people.name,
//         height: people.height,
//         mass: people.mass,
//         hair_color: people.hair_color,
//         skin_color: people.skin_color,
//         eye_color: people.eye_color,
//         birth_year: people.birth_year,
//         gender: people.gender,
//         homeworld: people.homeworld,
//         films: people.films
//     }
// })

// Idea: Sidebar Class, contains a varying list of nav links
// function SideBar() {
//     return (
//         <ul>
//             {}
//         </ul>
//     )
// }

function Home() {
    return (
        <>
            <h1>A Long Time Ago In A Galaxy Far Far Away...</h1>
        </>
    )
}

function People() {
    console.log("Raw JSON: ", people)

    return (
        <>
            <div className="flex-container">
                <div className='side_nav'>
                    <ul className='side_nav_style'>
                        { Object.keys(people).map(key => (
                            <li key={people[key].name} className='side_nav_style'><NavLink className='side_nav_style' to={`/people/${key}`}>{people[key].name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}

function PersonItem() {
    const { personItem } = useParams()
    const personItemData = people[personItem]
    console.log("Current Person: ", people[personItem])
    return personItemData ? (
        <>
            <div>
                <h2>Name: {personItemData.name}</h2>
                <ul>
                    <li>Height: {personItemData.height}</li>
                    <li>Mass: {personItemData.mass}</li>
                    <li>Hair Color: {personItemData.hair_color}</li>
                    <li>Skin Color: {personItemData.skin_color}</li>
                    <li>Eye Color: {personItemData.eye_color}</li>
                    <li>Birth Year: {personItemData.birth_year}</li>
                    <li>Gender: {personItemData.gender}</li>
                </ul>
                <h3>HomeWorld: <NavLink to={personItemData.homeworld}>{personItemData.homeworld}</NavLink></h3>
                <h3>Films Appeared in:</h3>
                <ul>
                    {Object.keys(personItemData.films).map(key => (
                        <li><NavLink to={personItemData.films[key]}>{personItemData.films[key]}</NavLink></li>
                    ))}
                </ul>
            </div>
        </>
    ) : <NotFound />
}

function Planets() {
    console.log("Raw JSON: ", planets)

    return (
        <>
            <div className="flex-container">
                <div className='side_nav'>
                    <ul className='side_nav_style'>
                        { Object.keys(planets).map(key => (
                            <li key={planets[key].name} className='side_nav_style'><NavLink className='side_nav_style' to={`/planets/${key}`}>{planets[key].name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}

function PlanetItem() {
    const { planetItem } = useParams()
    const planetItemData = planets[planetItem]
    console.log("Current Planet: ", planets[planetItem])
    return planetItemData ? (
        <>
            <div>
                <h2>Name: {planetItemData.name}</h2>
                <ul>
                    <li>Rotation Period: {planetItemData.rotation_period}</li>
                    <li>Orbital Period: {planetItemData.orbital_period}</li>
                    <li>Diameter: {planetItemData.diameter}</li>
                    <li>Climate: {planetItemData.climate}</li>
                    <li>Gravity: {planetItemData.gravity}</li>
                    <li>Terrain: {planetItemData.terrain}</li>
                    <li>Surface Water: {planetItemData.surface_water}</li>
                    <li>Population: {planetItemData.population}</li>
                </ul>
                <h3>Residents:</h3>
                <ul>
                    {Object.keys(planetItemData.residents).map(key => (
                        <li><NavLink to={planetItemData.residents[key]}>{planetItemData.residents[key]}</NavLink></li>
                    ))}
                </ul>
                <h3>Films:</h3>
                <ul>
                    {Object.keys(planetItemData.films).map(key => (
                        <li><NavLink to={planetItemData.films[key]}>{planetItemData.films[key]}</NavLink></li>
                    ))}
                </ul>
            </div>
        </>
    ) : <NotFound />
}

function Films() {
    console.log("Raw JSON: ", films)

    return (
        <>
            <div className="flex-container">
                <div className='side_nav'>
                    <ul className='side_nav_style'>
                        { Object.keys(films).map(key => (
                            <li key={films[key].title} className='side_nav_style'><NavLink className='side_nav_style' to={`/films/${key}`}>{films[key].title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}

function FilmItem() {
    const { filmItem } = useParams()
    const filmItemData = films[filmItem]
    console.log("Current Film: ", films[filmItem])
    return filmItemData ? (
        <>
            <div>
                <h2>Title: {filmItemData.title}</h2>
                <ul>
                    <li>Episode ID: {filmItemData.episode_id}</li>
                    <li>Opening Crawl: {filmItemData.opening_crawl}</li>
                    <li>Director: {filmItemData.director}</li>
                    <li>Producer: {filmItemData.producer}</li>
                    <li>Release Date: {filmItemData.release_date}</li>
                </ul>
                <h3>Characters Featured:</h3>
                <ul>
                    {Object.keys(filmItemData.characters).map(key => (
                        <li><NavLink to={filmItemData.characters[key]}>{filmItemData.characters[key]}</NavLink></li>
                    ))}
                </ul>
                <h3>Planets Featured:</h3>
                <ul>
                    {Object.keys(filmItemData.planets).map(key => (
                        <li><NavLink to={filmItemData.planets[key]}>{filmItemData.planets[key]}</NavLink></li>
                    ))}
                </ul>
            </div>
        </>
    ) : <NotFound />
}

function NotFound() {
    return <h1>Error 404: Page Not Found!</h1>
}

function App() {
    return (
        <>
            <ul className="top_nav_style">
                <li className='top_nav_style'><NavLink className='top_nav_style' to="/">Star Wars</NavLink></li>
                <li className='top_nav_style'><NavLink className='top_nav_style' to="/people">People</NavLink></li>
                <li className='top_nav_style'><NavLink className='top_nav_style' to="/planets">Planets</NavLink></li>
                <li className='top_nav_style'><NavLink className='top_nav_style' to="/films">Films</NavLink></li>
            </ul>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/people" element={<People />}>
                    <Route path=":personItem" element={<PersonItem />} />
                </Route>
                <Route path="/planets" element={<Planets />} >
                    <Route path=":planetItem" element={<PlanetItem />} />
                </Route>
                <Route path="/films" element={<Films />} >
                    <Route path=":filmItem" element={<FilmItem />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

// function App() {
//     return (
//         <h1>
//             A long time ago, in a galaxy far, far away...
//         </h1>
//     )
// }

export default App
