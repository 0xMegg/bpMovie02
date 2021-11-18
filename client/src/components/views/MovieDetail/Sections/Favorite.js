import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    // const movieTitle = props.movieInfo.title
    // const moviePost = props.movieInfo.backdrop_path
    // const movieRuntime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    useEffect(() => {

        let variable = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variable)
            .then(response => {
                console.log(response.data)
                setFavoriteNumber(response.data.favoriteNumber)
                if (response.data.success) {
                } else {
                    alert('fail to get number info')
                }
            })

        Axios.post('/api/favorite/favorited', variable)
            .then(response => {
                console.log('favorited', response.data)
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('fail to get info')
                }
            })

    }, [])

    return (
        <div>
            <button>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber} </button>
        </div>
    )
}

export default Favorite
