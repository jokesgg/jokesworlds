import React, { Component, Fragment } from 'react';
import { removeMozilla } from '../assets/js/parse';

export default class Video extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      bgImg: {
        backgroundImage: `url(${this.props.video.snippet.thumbnails.high.url})`,
      },
    };
    return (
      <Fragment>
        <a
          href={`https://youtu.be/${this.props.video.snippet.resourceId.videoId}`}
          target='_blank'
        >
          <div style={styles.bgImg}>
            <p>{removeMozilla(this.props.video.snippet.title)}</p>
          </div>
        </a>
      </Fragment>
    );
  }
}
