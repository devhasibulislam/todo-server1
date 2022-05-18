import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='shadow'>
            <hr />
            <footer className="footer items-center p-4 bg-white text-neutral-content container mx-auto">
                <div className="items-center grid-flow-col">
                    <p className='text-black'>Copyright © {year} - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <SocialIcon url='https://www.linkedin.com/in/hasibulislam999/' />
                    <SocialIcon url='https://twitter.com/hasibulislam999' />
                    <SocialIcon url='https://www.facebook.com/hasibulislam999.dev/' />
                </div>
            </footer>
        </section>
    );
};

export default Footer;