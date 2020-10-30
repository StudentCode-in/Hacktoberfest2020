const token = "6270e9998f2645b49a491fa56bedf33c";

function getFromCache(endpoint) {
  return new Promise((resolve, reject) => {
    if ("caches" in window) {
      caches.match(endpoint).then((res) => {
        if (res) {
          return resolve(res.json())
        } else {
          return reject();
        }
      })
    } else {
      return reject()
    }
  })

}

function getCompetition() {
  return getFromCache('https://api.football-data.org/v2/competitions/2021').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2021', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => {
      return res.json()
    }).then((json) => {
      return json
    }).catch((err) => {
      console.log('ups error api')
    })
  })
}



function getStanding() {
  return getFromCache('https://api.football-data.org/v2/competitions/2021/standings').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2021/standings', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => {
      return res.json()
    }).then((json) => {
      return json
    }).catch((err) => {
      console.log('ups error api')
    })
  })
}

function getTeams() {
  return getFromCache('https://api.football-data.org/v2/competitions/2021/teams').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2021/teams', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => res.json()).then((json) => json).catch((err) => console.log(err))
  })
}