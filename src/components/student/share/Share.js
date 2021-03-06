import React, { useState } from 'react';
import {
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Share = ({ studentId, name, about }) => {
  const [hide, toggleHide] = useState(true);
  const url = `https://hirelambdastudents.com/student/profile/${studentId}`;
  about = 'about string';
  return (
    <div className='share-wrapper'>
      <Link
        className='share-btn'
        onClick={() => {
          toggleHide(!hide);
        }}
        to='#'
      >
        Share
      </Link>
      <div className='share-links'>
        <Fade when={!hide}>
          <div className='share-button'>
            <LinkedinShareButton
              url={url}
              title={`Hire Lambda Students: ${name}`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className='share-button'>
            <TwitterShareButton
              url={url}
              title={`Hire Lambda Students: ${name}`}
              hashtags={['lambda', 'developers', 'hirelambda']}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Share;
