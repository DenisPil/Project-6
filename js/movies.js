
let dataTarget = 0



class Movie {
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

        //* Manipulation du DOM pour les informations des films */
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

        root.appendChild(this.modal)
        this.element.appendChild(root)

        this.getInfo()
        this.AppendInfoToDom()
        if (dataTarget >= 27) {
            startCarousel()
        }
    }

    // Fonction qui utilise fetch pour récuperer les informations sur l'API avec fetch
    getInfo = async function(){
        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.AssignMovieInfo(result)
            }
        )}

    // fonction qui attribue les informations d'un film aux différentes balise HTML        
    AssignMovieInfo = async function(movie){

        this.movieTitle.innerHTML = (movie.title)
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
        this.linkModal.setAttribute('style', "background-image: url("+ movie.image_url + ") ")
        
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


    /**
     * Fonction qui crée une balise 'aside' avec plusieurs attribues
     * @param {string} IdName 
     * @returns {HTMLElement}
     */
    createAsideWhitAttributs (IdName) {
        let aside = document.createElement('aside')
        aside.setAttribute('id', IdName)
        aside.setAttribute('class', "modal")
        aside.setAttribute('aria-hidden', "true")
        aside.setAttribute('style', "display: none;")
        aside.setAttribute('data-target', dataTarget)
        return aside
        }

    // Fonction qui ajoute les infoirmation des films a la fenetre modale
    AppendInfoToDom () {
        this.modalWrapper.appendChild(this.movieImg)
        this.modalWrapper.appendChild(this.movieTitle)
        this.modalWrapper.appendChild( this.movieDirectors)
        this.modalWrapper.appendChild(this.movieActors)
        this.modalWrapper.appendChild(this.movieDuration)
        this.modalWrapper.appendChild(this.movieCountry)
        this.modalWrapper.appendChild(this.movieDate)
        this.modalWrapper.appendChild(this.movieGenres)
        this.modalWrapper.appendChild(this.movieImdbScrore)
        this.modalWrapper.appendChild(this.worldwideGrossIncome)
        this.modalWrapper.appendChild(this.movieRated)
        this.modalWrapper.appendChild(this.movieDescription)
    }
}

// Fonction qui crée le carouselle une fois que toutes les informations ont etait récuperé
startCarousel=  function() {

        new Carousel(document.querySelector('#carousel-sci-fi'),{
            slidesVisible: 5,
            slidesToScroll:2,
        })

        new Carousel(document.querySelector('#carousel-western'),{
            slidesVisible: 5,
            slidesToScroll:2
        })

        new Carousel(document.querySelector('#carousel-top-rate'),{
            slidesVisible: 5,
            slidesToScroll: 2
        })

        new Carousel(document.querySelector('#carousel-animation'),{
            slidesVisible: 5,
            slidesToScroll: 2
        })
}
