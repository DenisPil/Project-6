class Genre {
        /**
     * Classe qui récupére les urls de films
     * @param {HTMLElement} element 
     * @param {Url} url d'un genre  
     */
    constructor(element, url){

        this.url = url
        this.element = element
        this.Urls = []
        this.urlMovie = []
        this.UrlGenre()
    } 
    

    // fonction qui récupére les deux premieres urls des pages d'un genre
    UrlGenre = async function(){

        fetch(this.url).then((resp) => resp.json()).then((result) =>{ 
            this.Urls = [this.url, result.next ]
            this.findMovieUrls()
        })
    }
 

    // FOnction qui cherche les urls des films d'un genre
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

    // Fonction qui fait appelle a la classe 'Movie' et lui envoie les urls des films
    setInfoMovies = function(){
        for (let i = 0;   i < this.urlMovie.length ;i++){
            new Movie(this.element, this.urlMovie[i])
            dataTarget++
        }
    }
}
