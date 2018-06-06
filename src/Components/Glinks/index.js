import React, { Component } from 'react';

const Glinks = ({ link }) => (
      <React.Fragment>
        <div id="accordion">
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#${link.linkName}`} aria-expanded="false" aria-controls="collapseThree">
          {link.linkName}
        </button>
      </h5>
    </div>
    <div id={link.linkName} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
            {link.description}
          </div>
          <div className="card-body">
            <p>Frequency: {link.frequency}</p>
          </div>
          <div className="card-body">
            <a href={`${link.url}`} target="_blank" class="btn btn-primary btn-lg" role="button">Link</a>
          </div>
    </div>
  </div>
</div>
      </React.Fragment>
    );

export default Glinks;