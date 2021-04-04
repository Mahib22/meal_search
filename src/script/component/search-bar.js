import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
 
   get value() {
       return this.shadowDOM.querySelector("#searchElement").value;
   }
 
   render() {
       this.shadowDOM.innerHTML = `
       <style>
            ${css}
       </style>
        <div class="input-group input-group-lg col-md-6 offset-md-3 mb-5">
            <input class="form-control" placeholder="Search a meal" id="searchElement" type="search">
            <div class="input-group-append">
            <button class="btn btn-outline-primary" id="searchButtonElement" type="submit">Search</button>
            </div>
        </div>
       `;
 
       this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}

customElements.define("search-bar", SearchBar);