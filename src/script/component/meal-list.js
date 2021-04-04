import './meal-item.js';
import css from "bootstrap/dist/css/bootstrap.min.css";
 
class MealList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set meals(meals) {
       this._meals = meals;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
            ${css}
       </style>
       `;
       this.shadowDOM.innerHTML += `
       <div class="col-md-8 offset-md-2 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">${message}</h5>
            </div>
          </div>
        </div>
       `;
   }
 
   render() {
       this.shadowDOM.innerHTML = "" ;
       this._meals.forEach(meal => {
           const mealItemElement = document.createElement("meal-item");
           mealItemElement.meal = meal
           this.shadowDOM.appendChild(mealItemElement);
       })
   }
}
 
customElements.define("meal-list", MealList);