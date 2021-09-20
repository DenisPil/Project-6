let urlWestern = 'http://localhost:8000/api/v1/titles/?genre=Western&sort_by=-imdb_score'
let urlSciFi = "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score"
let urlTopRatedMovie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
let urlAnimation = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score"

start = function() {

    const domWestern = document.querySelector('#carousel-western')
    new Genre (domWestern, urlWestern)


    const domSciFi = document.querySelector('#carousel-sci-fi')
    new Genre (domSciFi, urlSciFi)


    const domTopRated = document.querySelector('#carousel-top-rate')
    new Genre (domTopRated, urlTopRatedMovie)

    const domAnimation = document.querySelector('#carousel-animation')
    new Genre (domAnimation, urlAnimation)
}

start()