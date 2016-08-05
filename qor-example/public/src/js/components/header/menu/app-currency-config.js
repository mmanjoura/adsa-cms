import React from 'react';

export default () => {
    return (

      <li className="li-col currency">
        <h4>Currency</h4>
        <ul>
          <li className="currency__item active"><a href="#"><span>$</span>US Dollar</a></li>
          <li className="currency__item"><a href="#"><span>€</span>Euro</a></li>
          <li className="currency__item"><a href="#"><span>£</span>British Pound</a></li>
          <li className="currency__item"><a href="#"><span>¥</span>Japanese Yen</a></li>
          <li className="currency__item"><a href="#"><span>₹</span>Indian Rupee</a></li>
        </ul>
      </li>
    );
};
