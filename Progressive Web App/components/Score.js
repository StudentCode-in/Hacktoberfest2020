class Score extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getStanding().then((data) => {
      this.innerHTML = ''
      var row = '';
      data.standings[0].table.forEach((el, i) => {
        row += `
            <tr>
              <td>${i+1}</td>
              <td>${el.team.name}</td>
              <td>${el.team.name}</td>
              <td>${el.points}</td>
            </tr>
      `;
      })
      this.innerHTML = `
      <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Badge</th>
          <th>Name</th>
          <th>Point</th>
        </tr>
      </thead>

      <tbody id="standing">
        ${row}
      </tbody>
    </table>`
    })
  }

}

customElements.define('score-component', Score)