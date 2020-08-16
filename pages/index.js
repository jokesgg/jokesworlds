import React, { Component } from 'react';
import Layout from '../components/Layout';
import { getVideos } from '../assets/js/youtube';
import Video from '../components/Video';

export default function Index({ videos, preview }) {
  return (
    <Layout>
      <section id='header'>Mozilla Hub Worlds (scenes)</section>
      <section id='videos'>
        {videos.items.map((video, i) => (
          <Video key={i} video={video} />
        ))}
      </section>
      <section id='footer'></section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const videos = await getVideos();

  return {
    props: { videos }, // will be passed to the page component as props
  };
}
