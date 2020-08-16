import fetch from 'axios';
import getConfig from 'next/config';
import mockData from '../mock/data.json';
const key = process.env.APIKEY;
const playlist = process.env.PLAYLIST;
const maxResults = 100;
const apiURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&type=video&order=date&maxResults=${maxResults}&playlistId=${playlist}&key=${key}`;

export async function getVideos() {
  const videos = await fetch(apiURL);
  return videos.data;
}
