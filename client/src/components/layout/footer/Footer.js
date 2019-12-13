import React from 'react';

import './Footer.css';

const Footer = () => (
    <div>
        <footer>
            <p>
                {<>&copy;</>}
                <a
                    href="https://sarals-ethnic-wear.herokuapp.com/"
                    target="_self"
                    rel="noopener noreferrer"
                >

                    Saral's Ethnic Store
        </a>{" "}
                {new Date().getFullYear()}
            </p>
        </footer>
    </div>
);

export default Footer;
