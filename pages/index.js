import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ hi, preview }) {
  

  return (
    <Layout>
        <img src="https://i.imgur.com/Fa0nYet.png"></img>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const hi = 'hi'
  return {
    props: { hi }, // will be passed to the page component as props
  };
}