class Carousel{

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options.slidesToScroll Nombre délement a faire défiler
     * @param {Object} options.slidesVisible Nb element visible dans le slide
     * @param {boolean} options.loop doit on boucler en fin de carousel
     */
    constructor(element, options = {}){
    this.element = element
    this.options = Object.assign({},{
      slidesToScroll:1,
      slidesVisible: 2,
    }, options)
    let children = [].slice.call(element.children)
    this.isMobile = false
    this.currentItem = 0
    // Modification du DOM
    this.root = this.createDivWhitClass('carousel')
    this.container = this.createDivWhitClass('carousel__container')
    this.root.appendChild(this.container)
    this.element.appendChild(this.root)
    this.items = children.map((child) =>{
        let item = this.createDivWhitClass('carousel__item')
        item.appendChild(child)
        this.container.appendChild(item)
        return item
    })
    this.setStyle()
    this.createNavigation()

    // Evenements
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize.bind(this))
    }

    /**
     * Applique les bonnes dimensions aux elements du carousel
     */
    setStyle() {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = (( 100 / this.slidesVisible) / ratio) + "%") 
    }

    createNavigation() {
        let nextButton = this.createDivWhitClass ('carousel__next')
        let prevButton = this.createDivWhitClass ('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
            
    }

    next(){
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev(){

        this.gotoItem(this.currentItem - this.slidesToScroll)      
    }

    /**
     * Déplace le carousel vers l'element ciblé
     * @param {number} index 
     */
    gotoItem(index){
        if (index < 0) {
            index = this.items.length - this.options.slidesVisible
        }else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%,0,0)'
        this.currentItem = index
        }

    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
        }
    }    

    /**
     * @return {nombre}
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
     * @return {string}
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible
    }

    /** 
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */   

createDivWhitClass (className){
    let div = document.createElement('div')
    div.setAttribute('class',className)
    return div
    }
}

new Carousel(document.querySelector('#carousel_top_rated_movies'),{
    slidesVisible: 5,
    slidesToScroll:3

})

new Carousel(document.querySelector('#carousel_adventure_movies'),{
    slidesVisible: 5,
    slidesToScroll:3

})
new Carousel(document.querySelector('#carousel_sci-fi_movies'),{
    slidesVisible: 5,
    slidesToScroll:3

})









/** TTTEEEEEESSSSSSST*/
