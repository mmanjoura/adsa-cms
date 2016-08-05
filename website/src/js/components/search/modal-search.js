import React from 'react';

export default () => {
    return (
      <div className="overlay overlay-scale">
        <button type="button" className="overlay-close"> ✕ </button>
        <div className="overlay__content">
          <form id="search-form" className="search-form outer" action="#" method="post">
            <div className="input-group input-group--wd">
              <input type="text" className=" input--full" placeholder="search text here ..." />
              <span className="input-group__bar" /> </div>
            <button className="btn btn--wd text-uppercase wave waves-effect">Search</button>
          </form>
        </div>
      </div>
    );
};