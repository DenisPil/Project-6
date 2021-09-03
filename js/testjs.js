class Movie {

    constructor(element, options = {}){
        this.element = element
        this.options = Object.assign({},{
            image: ""
        }, options)
        let root = this.createDivWhitClass('movies')
        let container = this.createDivWhitClass('movie')
        
        this.movieTitle =  this.createDivWhitClass('movie_title')
        let p = document.createElement('p')
        this.movieTitle.appendChild(p)

        this.movieId =  this.createDivWhitClass('movie_id')
        this.movieImg = this.createDivWhitClass('movie_img')

        container.appendChild(this.movieTitle)
        container.appendChild(this.movieId)
        container.appendChild(this.movieImg)
        root.appendChild(container)
        this.element.appendChild(root)

        this.dico = []
        this.fetchMovie()
        this.dico = this.fetchMovie()
        this.jojo(this.dico)
        console.log(this.dico)
    }

    fetchMovie(){
        fetch("http://localhost:8000/api/v1/titles/9")
        .then(function(res) {
            if (res.ok) {
            return res.json();
            }
        })
    }
    jojo(dico) {

        
        console.log(dico)

            }
            


    createDivWhitClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
        }

}





new Movie(document.querySelector('#carousel'), {
    image: ""
})

