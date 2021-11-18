import React, { useEffect } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    // const movieTitle = props.movieInfo.title
    // const moviePost = props.movieInfo.backdrop_path
    // const movieRuntime = props.movieInfo.runtime

    useEffect(() => {
        
        let variable = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variable)
            .then(response => {
                console.log(response.data)
                if(response.data.success){
                } else {
                    alert('fail to get number info')
                }
            })
    }, [])

    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite
