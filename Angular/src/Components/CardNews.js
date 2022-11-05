class Cardnews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card-left")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right")

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("photo") || "/assets/default-photo.jpg"
        newsImage.alt = "Imagem do Darth Vader"
        cardRight.appendChild(newsImage)


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px black;
                -webkit-box-shadow: 9px 9px 27px 0px black;
                -moz-box-shadow: 9px 9px 27px 0px black;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card-left, .card-right {
            
            }
            
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card-left > span {
                font-weight: 400;
            }
            
            .card-left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card-left > p {
                color: rgb(70, 70, 70);
            }
        `

        return style
    }
}

customElements.define("card-news", Cardnews) 