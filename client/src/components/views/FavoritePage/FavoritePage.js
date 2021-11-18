import React, { useEffect, useState } from 'react'
import './favorite.css'
import Axios from 'axios'

function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        Axios.post('/api/favorite/getFavoritedMovie',
        { userFrom: localStorage.getItem('userId') })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setFavorites(response.data.favorites)
                } else {
                    alert('Fail to get movie info')
                }
            })
    }, [])

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> Favorite Movies </h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <td>Remove from favorites</td>
                    </tr>
                </thead>
                <tbody>

                    {Favorites.map((favorite, index) => (
                        <tr key={index}>
                            <td>{favorite.movieTitle}test1</td>
                            <td>test2{favorite.movieRuntime} mins</td>
                            <td><button>Remove</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
