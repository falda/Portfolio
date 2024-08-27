import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <main className="presentation" role="main">
            <section className="introduction" role="contentinfo"> 
                <h1>I'm Loic Falda</h1>
                <h2>Developer</h2>
                <h3>A little description of my work</h3>
            </section>
            <section className="ctas" aria-labelledby="cta-header">
                <h2 id="cta-header" className="visually-hidden">Call to Actions</h2>
                <article className="workCta">
                    <h2>Here's my work</h2>
                    <button onClick={() => navigate('/projets')} aria-label="See my projects" type="button">See My Projects</button>
                </article>
                <article className="contactCta">
                    <h2>Contact me</h2>
                    <button onClick={() => navigate('/contact')} aria-label="Get in touch" type="button">Get in Touch</button>
                </article>
            </section>
        </main>
    );
}



export default Home;
