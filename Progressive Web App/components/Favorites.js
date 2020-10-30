class Favorites extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getTeamFavorite().then((data) => {
      this.innerHTML = ''
      data.forEach((el, i) => {
        this.innerHTML += `
            <ul class="collection" id="${el.id}">
              <li class="collection-item avatar">
                <img src="${el.crestUrl}" alt="Logo" class="circle">
                <span class="title">${el.shortName}</span>
                <p>${el.name} <br>
                  <a href="${el.website}" target="_blank">${el.website}</a>
                </p>
                <button id = "fav-btn" onclick = "removeFromFavorite(${el.id}, '${el.crestUrl}', '${el.shortName}', '${el.name}', '${el.website}')" class="btn secondary-content"> hapus </button>
              </li>
            </ul>
      `;
      })
    })
  }

}

customElements.define('favorites-component', Favorites)