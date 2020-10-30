const db = idb.open("footballDB", 1, (upgradeDB) => {
  if (!upgradeDB.objectStoreNames.contains("favorit")) {
    let favorits = upgradeDB.createObjectStore("favorit", {
      keyPath: 'id'
    })
  }
})

function addToFavorit(id, crestUrl, shortName, name, website, btn) {
  db.then((db) => {
    let tx = db.transaction('favorit', 'readwrite')
    let store = tx.objectStore('favorit')
    let item = {
      id: id,
      crestUrl: crestUrl,
      shortName: shortName,
      name: shortName,
      website: website
    }
    store.put(item)
    return tx.complete;
  }).then(() => {
    M.toast({
      html: 'Berhasil ditambahkan'
    })
    btn.innerHTML = 'Favorit';
    btn.classList.add("disabled");
    return Promise.resolve('oke')
  }).catch((err) => console.log(err))
}

function isSaved(id) {
  return db.then(function (db) {
    let tx = db.transaction('favorit', 'readonly');
    let store = tx.objectStore('favorit');
    return store.get(id);
  }).then(function (val) {
    return Promise.resolve(val === undefined)
  })
}

function getTeamFavorite() {
  return db.then(function (db) {
    let tx = db.transaction('favorit', 'readonly');
    let store = tx.objectStore('favorit');
    return store.getAll();
  })
}


function removeFromFavorite(id) {
  db.then((db) => {
    let tx = db.transaction('favorit', 'readwrite');
    let store = tx.objectStore('favorit')
    store.delete(id)
    return tx.complete
  }).then(() => {
    M.toast({
      html: 'Berhasil dihapus'
    })
    document.getElementById(id).remove();
  })
}