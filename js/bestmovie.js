
class BestMovie {
    /**
     * Classe qui recherche le film le mieux noté de IMDB
     * @param {HTMLElement} element 
     * @param {Url} url d'un film  
     */
    constructor(element, url){
        this.element = element
        this.url = url
        this.urlBestMovie = "false"
        this.findUrl()
        this.movie = false
    }

    // fonction qui recherche un film dans l'API avec Fetch
    findUrl = async function() {
        
        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.urlBestMovie = result.results[0].url
            console.log(this.urlBestMovie)
            new BestMovieInfo(this.element, this.urlBestMovie)
            })
        }
    }


class BestMovieInfo {
        /**
     * Classe qui récupére les informations d'un films et créer les balises HTML associer aux informations
     * @param {HTMLElement} element 
     * @param {Url} url d'un film  
     */

    constructor (element, url){
        this.url = url;
        this.element = element

        /**Manipulation du DOM */
        let root = this.createDivWhitClass('item')
        this.movie = this.createDivWhitClass('movie')

        this.movieTitle =  this.createDivWhitClass('movie-title')
        this.movieDescription =  this.createDivWhitClass('movie-description')
        this.movieActors = this.createDivWhitClass('movie-actors')
        this.movieDirectors = this.createDivWhitClass('movie-directors')
        this.movieGenres = this.createDivWhitClass('movie-genre')
        this.movieImdbScrore = this.createDivWhitClass('movie-imdb-score')
        this.movieDuration = this.createDivWhitClass('movie-duration')
        this.movieDate = this.createDivWhitClass('movie-date')
        this.movieImg = this.createDivWhitClass('movie-Img')
        this.movieRated = this.createDivWhitClass("movie-rated")
        this.movieCountry = this.createDivWhitClass("movie-country")
        this.worldwideGrossIncome = this.createDivWhitClass("movie-ww-g-i")

        root.appendChild(this.movie)
        this.element.appendChild(root)

        this.getInfo()
        this.AppendInfoToDom()

    }

    // Fonction qui utilise fetch pour récuperer les informations sur l'API avec fetch
    getInfo = async function(){
        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.AssignMovieInfo(result)
            }
        )}

    // fonction qui attribue les informations d'un film aux différentes balise HTML
    AssignMovieInfo = function(movie){
        this.movieTitle.innerHTML = (movie.title)
        console.log(this.movieTitle)
        this.movieDescription.innerText = ("Description : " + movie.long_description)
        this.movieActors.innerHTML = ("Acteurs : " + movie.actors)
        this.movieDirectors.innerText = ("Réalisateur :  "+ movie.directors)
        this.movieGenres.innerHTML = ("Genre : " + movie.genres)
        this.movieImdbScrore.innerHTML = ("IMDB Score : " + movie.imdb_score)
        this.movieDuration.innerHTML = ("Durée : " + movie.duration + " min")
        this.movieDate.innerHTML =("Date de sorite : " + movie.date_published)
        this.movieRated.innerHTML = ("Classification : " + movie.rated + " ans")
        this.movieCountry.innerHTML =("Pays : " + movie.countries)
        this.worldwideGrossIncome.innerHTML = ("Box-office : " + movie.worldwide_gross_income + " $")
        let img = document.createElement('img')
        img.setAttribute("src", movie.image_url)
        img.setAttribute('alt', 'movie-poster')
        this.movieImg.appendChild(img)
        this.bestMovie.setAttribute('style', "background-image: url("+ movie.image_url + ") ")


    }
    
    /**
     * Fonction qui crée une balise 'div'
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWhitClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
        }

    // Fonction qui ajoute les infoirmation des films a la fenetre modale
    AppendInfoToDom () {
        this.movie.appendChild(this.movieImg)
        this.movie.appendChild(this.movieTitle)
        this.movie.appendChild( this.movieDirectors)
        this.movie.appendChild(this.movieActors)
        this.movie.appendChild(this.movieDuration)
        this.movie.appendChild(this.movieCountry)
        this.movie.appendChild(this.movieDate)
        this.movie.appendChild(this.movieGenres)
        this.movie.appendChild(this.movieImdbScrore)
        this.movie.appendChild(this.worldwideGrossIncome)
        this.movie.appendChild(this.movieRated)
        this.movie.appendChild(this.movieDescription)
    }
}


let urlTopMovie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

const domBestMovie = document.querySelector('#best_movie')
new BestMovie(domBestMovie, urlTopMovie)

