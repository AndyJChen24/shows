// Originally based on public domain code by Josh Streger https://github.com/jdstregz/secure-starter
import React from 'react';
import './App.css';
import Nav from './components/Nav';

function Home( {auth} ) {
    return (
        <div className="App">
            <Nav auth = {auth} />
            <header className="App-header">
                <p>
                    Seach Bar
                </p>
                
            </header>
        </div>
    );
}

export default Home;