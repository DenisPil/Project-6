const url1 = "http://localhost:8000/api/v1/titles/9"

class Movie {

    constructor (element, url){
        this.url = url;
        this.element = element
        console.log(element)
        /**Manipulation du DOM */
        let root = this.createDivWhitClass('movies')
        let container = this.createDivWhitClass('movie')

        this.linkModal = document.createElement("a")
        this.linkModal.setAttribute("href" , "#modal1")
        this.linkModal.setAttribute("class", "js-modal")
        container.appendChild(this.linkModal)
        this.modal = this.createAsideWhitAttributs("modal1")

        this.movieTitle =  this.createDivWhitClass('movie_title')
        this.movieDescription =  this.createDivWhitClass('movie_description')
        this.movieActors = this.createDivWhitClass('movie_actors')
        this.movieDirectors = this.createDivWhitClass('movie_directors')
        this.movieGenres = this.createDivWhitClass('movie_genre')
        this.movieImdbScrore = this.createDivWhitClass('movie_imdb_score')
        this.movieDuration = this.createDivWhitClass('movie_duration')
        this.movieDate = this.createDivWhitClass('movie_date')
        this.movieImg = this.createDivWhitClass('movie_Img')
        

        container.appendChild(this.modal)
        root.appendChild(container)
        this.element.appendChild(root)

        this.getInfo()
        console.log(this.movieDescription)
    }

    getInfo = async function(){
        fetch(url1).then((resp) => resp.json()).then((result) =>{ 
            console.log(result)
            this.AssignInfoToDom(result)

            }
        )}

    AssignInfoToDom = function(movie){


        this.movieTitle.innerHTML = movie.title
        this.movieDescription.innerText = movie.long_description
        this.movieActors.innerHTML = movie.actors
        this.movieDirectors.innerText = movie.directors
        this.movieGenres.innerHTML = movie.genres
        this.movieImdbScrore.innerHTML = movie.imdb_score
        this.movieDuration.innerHTML = movie.duration
        this.movieDate.innerHTML = movie.date_published
        this.movieImg.innerHTML = movie.image_url

        let img = document.createElement('img')
        img.setAttribute("src", movie.image_url)
        this.linkModal.appendChild(img)
        console.log(img)
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

        let modalWrapper = this.createDivWhitClass('modal-wrapper js-modal-stop')
        let button = document.createElement('button')
        button.setAttribute("class", "js-modal-close")
        button.innerHTML = "bouton"
        modalWrapper.appendChild(button)

    
        /** 
        modalWrapper.appendChild(this.movieDescription)
 
        */

        aside.appendChild(modalWrapper)
        return aside
        }
        
}
const dom = document.querySelector('#best_movie')
new Movie(dom, url1)


