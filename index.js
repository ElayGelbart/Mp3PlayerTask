const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(/* your code here */)
  },
}


function getSongFromID(id) {
  for (let i = 0; i < player.songs.length; i++) {
    if (player.songs[i].id === id) {
      return { title, album, artist, duration, } = player.songs[i], arrId = i;
    }
  }
  throw 'Please enter valid id';
}
function durationToMMSS(duration) {
  let mm = Math.floor(duration / 60);
  let dd = duration % 60;
  if (mm < 10) {
    mm = '0' + mm;
  }
  return `${mm}:${dd}`
}

function playSong(id) {
  getSongFromID(id);
  console.log(`Playing ${title} from ${album} by ${artist} | ${durationToMMSS(duration)}.`)
}

function removeSong(id) {
  getSongFromID(id);
  player.songs.splice(arrId, 1);
  for (let key of player.playlists) {
    let indexInList = key.songs.indexOf(id);
    if (indexInList >= 0) {
      key.songs.splice(indexInList, 1);
    }
  }
}

function getBiggestSongID() {
  let biggestID = 0;
  for (let key of player.songs) {
    if (key.id > biggestID) {
      biggestID = key.id;
    }
  }
  return biggestID;
}

function addSong(title, album, artist, duration, id) {
  if (!id) {
    id = getBiggestSongID() + 1;
  }
  for (let key of player.songs) {
    if (key.id === id) {
      throw 'This ID is taken, pick another ID';
    }
  }
  let newArr = {
    'id': id,
    'title': title,
    'album': album,
    'artist': artist,
    'duration': duration
  };
  player.songs.push(newArr);
}

function removePlaylist(id) {
  for (let i = 0; i < player.playlists.length; i++) {
    if (player.playlists[i].id === id) {
      return player.playlists.splice(i, 1);
    }
  }
  throw 'Enter valid id';
}

function getBiggestPlaylistID() {
  let biggestID = 0;
  for (let key of player.playlists) {
    if (key.id > biggestID) {
      biggestID = key.id;
    }
  }
  return biggestID;
}

function createPlaylist(name, id) {
  if (!id) {
    id = getBiggestPlaylistID() + 1;
  }
  for (let key of player.playlists) {
    if (key.id === id) {
      throw 'This ID is taken, pick another ID';
    }
  }
  let newArr = {
    'id': id,
    'name': name,
    'songs': []
  };
  player.playlists.push(newArr);
}

function playPlaylist(id) {
  for (let i = 0; i < player.playlists.length; i++) {
    if (player.playlists[i].id === id) {
      for (let j = 0; j < player.playlists[i].songs.length; j++) {
       playSong( player.playlists[i].songs[j]);
      }
      return;
    }
  }
  throw 'Enter valid id';
}

function getPlaylistIndexFromID(playlistId){
  for (let i = 0; i < player.playlists.length; i++) {
    if (player.playlists[i].id === playlistId) {
      return playlistArrplace=i;
    }
  }
  throw 'Enter valid id';
}


function editPlaylist(playlistId, songId) {
  getSongFromID(songId);
  getPlaylistIndexFromID(playlistId);
  indexOfSongInPlaylist = player.playlists[playlistArrplace].songs.indexOf(songId);
  if(indexOfSongInPlaylist<0){
    player.playlists[playlistArrplace].songs.push(songId);
  }
  else{
    player.playlists[playlistArrplace].songs.splice(indexOfSongInPlaylist,1);
  }
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
