class cardButton extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'container')

        const componentH3 = document.createElement('h3')
        componentH3.textContent = this.getAttribute('titulo')

        const button_1 = document.createElement('button')
        button_1.type = this.getAttribute('tipo')
        button_1.textContent = this.getAttribute('texto')
        button_1.style.background = this.getAttribute('cor')

        componentRoot.appendChild(componentH3)
        componentRoot.appendChild(button_1)

        return componentRoot
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
            body {
                margin: 20px;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }

            h3 {
                margin: 0;
            }
            
            button {
                padding: 10px;
                width: 120px;
                background-color: aqua;
                border: 1px solid rgb(61, 152, 122);
                border-radius: 3px;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                font-weight: bold;
                margin: 10px 0;
            }
            
            button:hover {
                background-color: azure;
                border: 1px solid aqua;
                transition: 0.1s;
                cursor: pointer;
            }
        `

        return style
    }
}
customElements.define('card-button', cardButton)