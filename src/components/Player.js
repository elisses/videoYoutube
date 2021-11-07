import React from "react";
import { connect } from 'react-redux';
import YouTube from 'react-youtube';


function Player({ selectedCategory, selectedMovie }) {
    let url = selectedMovie.trailer;
    let videoCode;
    let existUrl = () => {
        if (url) {

            videoCode = url.split("v=")[1].split("&")[0];

            return (
                <YouTube videoId={videoCode} opts={opts} videoOnReady={(e) => videoOnReady(e)} />
            )
        }
    }

    function videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <section>
            <h1>{selectedCategory.name}</h1>
            <h2>{selectedMovie.title}</h2>
            {existUrl()}

        </section>
    )
}

const mapStateToProps = (store) => ({
    selectedCategory: store.movies.selectedCategory,
    selectedMovie: store.movies.selectedMovie,
})

export default connect(mapStateToProps)(Player);