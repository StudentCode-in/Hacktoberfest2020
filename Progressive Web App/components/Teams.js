class Teams extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getTeams().then((data) => {
      this.innerHTML = ''
      data.teams.forEach((el, i) => {
        isSaved(el.id).then((isSaved) => {
          if (isSaved) {
            var btn = `<button onclick="addToFavorit(${el.id}, '${el.crestUrl}', '${el.shortName}', '${el.name}', '${el.website}', this)" class="btn secondary-content"> Tambah Favorit </button>`;
          } else {
            var btn = `<button onclick="addToFavorit(${el.id}, '${el.crestUrl}', '${el.shortName}', '${el.name}', '${el.website}', this)" class="btn disabled secondary-content"> Favorit </button>`;
          }
          this.innerHTML += `
            <ul class="collection">
              <li class="collection-item avatar">
                <img src="${el.crestUrl}" alt="Logo" class="circle">
                <span class="title">${el.shortName}</span>
                <p>${el.name} <br>
                  <a href="${el.website}" target="_blank">${el.website}</a>
                  ${btn}
                </p>
                
              </li>
            </ul>
      `;
        })

      })
    })
  }

}

customElements.define('teams-component', Teams)