import { clientID, clientSecret, lyricsKey} from "./apiConfig";

//Sourced from here: https://github.com/sammy007-debug/How-to-use-Spotify-s-API-with-Javascript/blob/main/app.js
export const APIController = (function () {
  var client_id = clientID; // Your client id
  var client_secret = clientSecret; // Your secret
  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
  };

  const _getGenres = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    return data.categories.items;
  };
  const _getPlaylistById = async (token, id) => {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data;
  };

  const _getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;

    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    return data.playlists.items;
  };

  const _getTracks = async (token, tracksEndPoint) => {
    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data.items;
  };

  const _getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data;
  };
  const _getLanguage = async (artist, title) => {
    const endpoint = `https://api.genius.com/search?q=${encodeURIComponent(
      title
    )}&${encodeURIComponent(artist)}&access_token=${lyricsKey}`;

    const result = await fetch(endpoint);
    const data = await result.json();
    const song = data.response.hits[0].result;
    const songId = song.id;
    const lyricsEndpoint = `https://api.genius.com/songs/${songId}?access_token=${lyricsKey}`;
    const language = await fetch(lyricsEndpoint)
    const final = await language.json()
    return final;
  };
  const _getLyricsID = async (isrc) => {
    const endpoint = `/track.get?apikey=dd5ba499ed0f45b0a5d5513b2636daa4&track_isrc=${isrc}/`;

    const result = await fetch(endpoint);
    const data = await result.json();
    return data;
  };
  const _getLyrics = async (id) => {
    const result = await fetch(
      `/track.lyrics.get?apikey=dd5ba499ed0f45b0a5d5513b2636daa4&track_id=${id}/`
    );
    const data = await result.json();
    return data;
  };

  return {
    getToken() {
      return _getToken();
    },
    getGenres(token) {
      return _getGenres(token);
    },
    getPlaylistByGenre(token, genreId) {
      return _getPlaylistByGenre(token, genreId);
    },
    getTracks(token, tracksEndPoint) {
      return _getTracks(token, tracksEndPoint);
    },
    getTrack(token, trackEndPoint) {
      return _getTrack(token, trackEndPoint);
    },
    getPlaylistById(token, id) {
      return _getPlaylistById(token, id);
    },
    getLyricsID(isrc) {
      return _getLyricsID(isrc);
    },
    getLyrics(id) {
      return _getLyrics(id);
    },
    getLanguage(artist, title) {
        return _getLanguage(artist, title);
      },
  };
})();
