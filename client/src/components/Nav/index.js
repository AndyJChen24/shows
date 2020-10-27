import React from 'react';

function Nav() {

    return(
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between sticky-top"
        >
            <a
                className="App-link"
                href={"/auth/login"}
            >
                <button>Login</button>
            </a>

            <a
                className="App-link"
                href={"/auth/login"}
            >
                <button>Register</button>
            </a>
        </nav>
    )
}

export default Nav;