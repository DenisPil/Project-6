const url1 = "http://localhost:8000/api/v1/titles/9"

class Movie {

    constructor(element, url, index){
        this.url = url;
        this.index = index
        this.element = element

        let root = this.createDivWhitClass('movies')
        let container = this.createDivWhitClass('movie')
        
        this.movieTitle =  this.createDivWhitClass('movie_title')
        let p = document.createElement('p')
        this.movieTitle.appendChild(p)

        this.movieId =  this.createDivWhitClass('movie_id')
        
        this.movieImg = this.createDivWhitClass('movie_img')
        let img = document.createElement('img')
        img.setAttribute("src", " ")
        this.movieImg.appendChild(img)

        container.appendChild(this.movieTitle)
        container.appendChild(this.movieId)
        container.appendChild(this.movieImg)
        root.appendChild(container)
        this.element.appendChild(root)

        this.dico
        let gg = this.getInfo()
        console.log(this.dico)

    }

    getInfo = async function(){

        let response = await fetch(this.url)
        return response.json()
        .then(function(value) {

            let title = value.title;
            let actors = value.actors;
            dico = actors

            console.log(actors)
        })
    }

    createDivWhitClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
        }


}


const dom = document.querySelector('#carousel')
new Movie(dom, url1,0, {

})
/**     

            getInfo = async function(){
        var myImage = document.querySelector('movie_img');
        console.log(myImage)
        var myRequest = new Request('https://m.media-amazon.com/images/M/MV5BNjA5Y2ZhYzctNDc1Yy00OGViLWI3NGUtOTYwZmE3NDFiYmIxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY268_CR72,0,182,268_AL_.jpg');
    
        fetch(myRequest)
        .then(function(response) {
            if (response.ok) {

            }
            return response.blob();
        })
        .then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
            console.log(myImage)
        })
            
    }


    url= url + payload pour récup les 7 meilleurs films adventures 
async fetchAdventureMovies(url) { 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data =await response.json();
        console.log(data);
        let tabImgMovie = []
        tabAllDataByMovie =[]
        for (item in data) {
            const responseMovie= await fetch(item.id ou url je sais 
             pas la key de l 'objet xD)
            if (!responseMovie.ok) {
                throw new Error(responseMovie.status);
            }
            const movie =await responseMovie.json();
            tabImgMovie.push(movie.img )// ici on part du principe 
          que l'objet movie contient ( img : blablabla.png ou jpeg).
            tabAllDataByMovie.push(movie)
        }
        console.log(tabImgMovie)
        console.log(tabAllDataByMovie)
        ou faire se que tu veux avec les tabs
    } catch (error) {
        console.log(error);
    }

} 











  getInfo = async function(){

        try {
            const response = await fetch("http://localhost:8000/api/v1/titles/9");
            if (!response.ok) {
                throw new Error(response.status);
            }
            const data =await response.json();
            console.log(data);

            let tabAllDataByMovie =[]
            for (let item in data) {
                const responseMovie= await fetch
                if (!responseMovie.ok) {
                    throw new Error(responseMovie.status);
                }
                const movie =await responseMovie.json();
                tabAllDataByMovie.push(movie.img )
            }
            console.log(tabAllDataByMovie)
            
        }catch (error) {
            console.log(error);
        }     
    }
    */





    /** 
    getUrlImage(){

        let urlImg = this.test()
        .then(console.log(urlImg));
    }

    getInfos = async function() {
        let response = await fetch(this.url)
        return response.json()
    }

    test () {
        fetch(this.url)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                return data
            })
    }*/

    /** 
       fetch("http://localhost:8000/api/v1/titles/9")
        .then(function(res) {
            if (res.ok) {
            return res.json();
            }
        })
        .then(function(value) {

            let title = value.title;
            let actors = value.actors;
            let imdb_score = value.imdb_score;
            let description = value.long_description;
            let genres = value.genres;
            let image = value.image_url;
            let url = value.url;
            let date = value.date_published;
            let director = value.directors;
            let dico = {'title': title, 'actors': actors,'imdb_score': imdb_score,'description': description,'genres': genres,'image': image,'url': url,'date': date,'director': director};
            this.dico = dico

            console.log(this.dico)

            });
        }    */
