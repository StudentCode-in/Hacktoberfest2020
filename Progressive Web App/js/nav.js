document.addEventListener("DOMContentLoaded", () => {
  let nav = `
  <li><a href="#home">Home</a></li>
  <li><a href="#team">Team</a></li>
  <li><a href="#favorites">Favorits</a></li>
  `;
  let sidenav = document.querySelectorAll(".sidenav")
  M.Sidenav.init(sidenav)

  document.querySelectorAll('.topnav, .sidenav').forEach((el) => {
    el.innerHTML = nav;
  })

  document.querySelectorAll('.sidenav a, .topnav a').forEach((el) => {
    el.addEventListener("click", function (event) {
      let sidenav = document.querySelector(".sidenav");
      M.Sidenav.getInstance(sidenav).close();
      page = event.target.getAttribute("href").substr(1);
      loadPage(page);
    });
  })

  let content = document.getElementById('content')
  const loadPage = (page) => {
    return fetch(`pages/${page}.html`).then((res) => {
      return res.text()
    }).then((text) => {
      content.innerHTML = text
    }).catch((err) => {
      content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
    })
  }

  var page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page)
})