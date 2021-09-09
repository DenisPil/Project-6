
let urlWestern = 'http://localhost:8000/api/v1/titles/?genre=Western&sort_by=-imdb_score'
let urlSciFi = "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score"
let urlTopRatedMovie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"


let dataTarget = 0

AppendCarousel = function(){
    //Création de la balise
    if (dataTarget > 19){
        let js = document.createElement("script");
        js.src = "js/carousel.js";
        document.body.appendChild(js);
    }

}

AppendModalWindow = function(){
    //Création de la balise
    if (dataTarget > 19){
        let js = document.createElement("script");
        js.src = "js/modal.js";
        document.body.appendChild(js);
        
    }

}

class BestMovie {
    constructor(element, url){
        this.element = element
        this.url = url
        this.urlBestMovie = "false"
        this.findUrl()
        this.movie = false
    }

    findUrl = async function() {
        
        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.urlBestMovie = result.results[0].url
            console.log(this.urlBestMovie)
            new  Movie(this.element, this.urlBestMovie)
            this.jojo()
            

            })
        }

    jojo = async function(){

        console.log(this.movie)
        this.element.aside.removeAttribute('class', "modal")
        this.element.aside.removeAttribute('aria-hidden')
        this.element.aside.removeAttribute('style')
    }   
}


















class Genre {
    constructor(element, url){

        this.url = url
        this.element = element
        this.Urls = []
        this.urlMovie = []
        this.UrlGenre()

    } 
    
    UrlGenre = async function(){

        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.Urls = [this.url, result.next ]
            this.findMovieUrls()
            
        })
    }
    
    findMovieUrls = async function() {
        
        this.Urls.forEach(element => {
            fetch(element).then((resp) => resp.json()).then((result) =>{ 
                let object = result.results
                for (const movie in object) {
                    if (Object.hasOwnProperty.call(object, movie)) {
                        const element = object[movie];
                            if (this.urlMovie.length <= 7){
                                this.urlMovie.push(element.url)
                               }
                            if (this.urlMovie.length === 7){
                                this.setInfoMovies() 
                            }   
                    }
                }
                
            })
           
            
        })
    }


    setInfoMovies = function(){

        for (let i = 0;   i < this.urlMovie.length ;i++){
            new Movie(this.element, this.urlMovie[i])
            dataTarget++
        }
        AppendCarousel()
        AppendModalWindow()
    }
}

class DomModification{
    constructor(element){
        this.element = element
    }
}


class Movie {

    constructor (element, url){
        this.url = url;
        this.element = element
        console.log(this.element)
        console.log(this.url)
        /**Manipulation du DOM */
        let root = this.createDivWhitClass('item')

        this.linkModal = document.createElement("a")
        this.linkModal.setAttribute("href" , "#modal" + dataTarget)
        this.linkModal.setAttribute("class", "js-modal")
        root.appendChild(this.linkModal)
        this.modal = this.createAsideWhitAttributs("modal" + dataTarget)
        this.modalWrapper = this.createDivWhitClass('modal-wrapper js-modal-stop')
        this.button = document.createElement('button')
        this.button.setAttribute("class", "js-modal-close")
        this.button.innerHTML = "X"
        this.modalWrapper.appendChild(this.button)
        this.modal.appendChild(this.modalWrapper)


        this.movieTitle =  this.createDivWhitClass('movie_title')
        this.movieDescription =  this.createDivWhitClass('movie_description')
        this.movieActors = this.createDivWhitClass('movie_actors')
        this.movieDirectors = this.createDivWhitClass('movie_directors')
        this.movieGenres = this.createDivWhitClass('movie_genre')
        this.movieImdbScrore = this.createDivWhitClass('movie_imdb_score')
        this.movieDuration = this.createDivWhitClass('movie_duration')
        this.movieDate = this.createDivWhitClass('movie_date')
        this.movieImg = this.createDivWhitClass('movie_Img')

        root.appendChild(this.modal)

        this.element.appendChild(root)

        this.getInfo()
        this.AppendInfoToDom()

    }


    getInfo = async function(){
        console.log(this.url)
        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 

            this.AssignMovieInfo(result)
            }
        )}


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
        let img = document.createElement('img')
        img.setAttribute("src", movie.image_url)
        this.movieImg.appendChild(img)
        this.linkModal.setAttribute('style', "background-image: url("+ movie.image_url + ") ")
    }
    

    createDivWhitClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
        }


    createAsideWhitAttributs (IdName) {
        let aside = document.createElement('aside')
        aside.setAttribute('id', IdName)
        aside.setAttribute('class', "modal")
        aside.setAttribute('aria-hidden', "true")
        aside.setAttribute('role', "dialog")
        aside.setAttribute('style', "display: none;")
        aside.setAttribute('data-target', dataTarget)
        return aside
        }
        

        AppendInfoToDom () {
            this.modalWrapper.appendChild(this.movieImg)
            this.modalWrapper.appendChild(this.movieTitle)
            this.modalWrapper.appendChild( this.movieDirectors)
            this.modalWrapper.appendChild(this.movieActors)
            this.modalWrapper.appendChild(this.movieDuration)
            this.modalWrapper.appendChild(this.movieDate)
            this.modalWrapper.appendChild(this.movieGenres)
            this.modalWrapper.appendChild(this.movieImdbScrore)
            this.modalWrapper.appendChild(this.movieDescription)
        }


}



const domWestern = document.querySelector('#carousel-western')
new Genre (domWestern, urlWestern)


const domSciFi = document.querySelector('#carousel-sci-fi')
new Genre (domSciFi, urlSciFi)

const domTopRated = document.querySelector('#carousel-top-rate')
new Genre (domTopRated, urlTopRatedMovie)

const domBestMovie = document.querySelector('#best_movie')

new BestMovie(domBestMovie, urlTopRatedMovie)