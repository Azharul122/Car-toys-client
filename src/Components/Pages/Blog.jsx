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
            <>Access token is a token use to access permisssion And Refresh token is used to refesh token.
          Access token created by admin then user can access particalar data .
          when Acccess token would be expired then then server sent him refresh token.After that when refresh token expired user can't access data.
          should we store them on HTTPonly cokie (authProvider)
           </>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>Compare SQL and NoSQL databases?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>What is express js? What is Nest JS?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center">
            <p className='font-semibold'>What is MongoDB aggregate and how does it work?</p>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </div>
          <div className="collapse-content">
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
