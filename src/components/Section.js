class Section{
  constructor({renderer}, container) {
    this._renderer = renderer;
    this._contaner = document.querySelector(container);
  }

  renderCards(itmes){
    itmes.forEach( card => {
      this._renderer(card)
    })
  }

  addItem(card){
    this._contaner.prepend(card)
  }

}

export default Section
