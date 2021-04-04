import css from "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   connectedCallback(){
       this.render();
   }
 
   render() {
       this.shadowDOM.innerHTML = `
       <style>
            ${css}
        </style>
       <div class="jumbotron jumbotron-fluid bg-success text-white">
        <div class="container text-center">
          <h1 class="display-3">Meal Search</h1>
        </div>
      </div>
      `;
   }
}
 
customElements.define("nav-bar", NavBar);