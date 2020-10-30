class Head extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getCompetition().then((data) => {
      this.innerHTML += `
      <center><h4>${data.name}</h4><small>${data.area.name}</small></center>
      `;

    })
  }

}

customElements.define('head-component', Head)