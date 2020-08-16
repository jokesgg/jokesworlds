import React, { Component, Fragment } from 'react';
import { removeMozilla, getHubsLink } from '../assets/js/parse';

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
        <div style={styles.bgImg}>
          <a
            href={`https://youtu.be/${this.props.video.snippet.resourceId.videoId}`}
            target='_blank'
          >
            <div className='youtube-header'>
              <div>
                <p>{removeMozilla(this.props.video.snippet.title)}</p>
              </div>
              <div className='icon-wrap'>
                <a
                  className='icon-div'
                  href={getHubsLink(this.props.video.snippet.description)}
                  target='_blank'
                >
                  <i className='fas fa-vr-cardboard'></i>
                </a>
              </div>
            </div>
          </a>
        </div>
      </Fragment>
    );
  }
}
