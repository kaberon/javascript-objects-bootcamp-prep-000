var playlist = {
  kanye: "wire",
<<<<<<< HEAD
  jay: "bam",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
 
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
=======
  jay: "bam"
}

function updatePlaylist(obj, key, value) {
  obj[key] = value
 
  return obj
}

updatePlaylist (playlist, nas, "NYSOM")
>>>>>>> b53a6f4e655789fedb53c00d43119c9224ad9d5f
