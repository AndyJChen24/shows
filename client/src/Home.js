// Originally based on public domain code by Josh Streger https://github.com/jdstregz/secure-starter
import React from 'react';
import './App.css';
import Nav from './components/Nav';

function Home() {
    return (
        <div className="App">
            <Nav/>
            <header className="App-header">
                <p>
                    You are not logged in
                </p>
                <a
                    className="App-link"
                    href={"/auth/login"}
                >
                    Login Here
                </a>
            </header>
        </div>
    );
}

export default Home;