import React from 'react';

export default () => {
		    return (

		      <li className="li-col languages languages--flag">
		        <h4>Language</h4>
		        <ul>
		          <li className="languages__item active"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/gb.png" alt /></span><span className="languages__item__label">En</span></a></li>
		          <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/de.png" alt /></span><span className="languages__item__label">De</span></a></li>
		          <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/fr.png" alt /></span><span className="languages__item__label">Fr</span></a></li>
		        </ul>
		      </li>
		    );
};
