import React from 'react';
import './ShortenerForm.css';

const ShortenerForm = () => {
  return (
    <div className="shortener-container">
      <h1>SHORTEN YOUR URL'S</h1>
      <form className="url-form">
        {[1, 2, 3, 4, 5].map((id) => (
          <div key={id} className="url-block">
            <h4>URL {id}</h4>
            <input type="text" placeholder="Long URL *" required />
            <div className="input-row">
              <input type="number" placeholder="Validity (Minutes) *" defaultValue={30} />
              <input type="text" placeholder="Custom Shortcode" />
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">SHORTEN URLS</button>
      </form>
      <div className="">
        <h3>your shortned url's</h3>
        {}
      </div>
    </div>
  );
};

export default ShortenerForm;