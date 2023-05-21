// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  document.title="CarZone | Blog"
  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>Compare SQL and NoSQL databases?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>What is express js? What is Nest JS?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>What is MongoDB aggregate and how does it work?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
