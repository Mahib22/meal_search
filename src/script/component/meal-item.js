import css from "bootstrap/dist/css/bootstrap.min.css";

class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                ${css}
            </style>
            <div class="col-md-8 offset-md-2 mb-4">
                <div class="card">
                    <img src="${this._meal.strMealThumb}" class="img-thumbnail" alt="...">
                    <div class="card-body bg-light">
                        <h4 class="card-title">${this._meal.strMeal}</h4>
                        <h6 class="card-subtitle mb-3 text-muted">${this._meal.strArea}</h5>
                        <h5 class="card-title">Ingredients :</h5>
                        <div class="row mb-3">
                            <div class="col-sm-3">${this._meal.strIngredient1}</div>
                            <div class="col-sm-3">${this._meal.strIngredient6}</div>
                            <div class="col-sm-3">${this._meal.strIngredient11}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strIngredient2}</div>
                            <div class="col-sm-3">${this._meal.strIngredient7}</div>
                            <div class="col-sm-3">${this._meal.strIngredient12}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strIngredient3}</div>
                            <div class="col-sm-3">${this._meal.strIngredient8}</div>
                            <div class="col-sm-3">${this._meal.strIngredient13}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strIngredient4}</div>
                            <div class="col-sm-3">${this._meal.strIngredient9}</div>
                            <div class="col-sm-3">${this._meal.strIngredient14}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strIngredient5}</div>
                            <div class="col-sm-3">${this._meal.strIngredient10}</div>
                            <div class="col-sm-3">${this._meal.strIngredient15}</div>
                        </div>
                        <h5 class="card-title">Materials :</h5>
                        <div class="row mb-3">
                            <div class="col-sm-3">${this._meal.strMeasure1}</div>
                            <div class="col-sm-3">${this._meal.strMeasure6}</div>
                            <div class="col-sm-3">${this._meal.strMeasure11}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strMeasure2}</div>
                            <div class="col-sm-3">${this._meal.strMeasure7}</div>
                            <div class="col-sm-3">${this._meal.strMeasure12}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strMeasure3}</div>
                            <div class="col-sm-3">${this._meal.strMeasure8}</div>
                            <div class="col-sm-3">${this._meal.strMeasure13}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strMeasure4}</div>
                            <div class="col-sm-3">${this._meal.strMeasure9}</div>
                            <div class="col-sm-3">${this._meal.strMeasure14}</div>
                            <div class="w-100"></div>
                            <div class="col-sm-3">${this._meal.strMeasure5}</div>
                            <div class="col-sm-3">${this._meal.strMeasure10}</div>
                            <div class="col-sm-3">${this._meal.strMeasure15}</div>
                        </div>
                        <h5 class="card-title">Instructions :</h5>
                        <p class="card-text mb-3">${this._meal.strInstructions}</p>
                    </div>
                </div>
            </div>
            `;
    }
 }
  
 customElements.define("meal-item", MealItem);