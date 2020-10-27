import React from 'react';

function Nav( {auth} ) {

    return(
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between sticky-top"
        >
            { !auth &&
                <div>
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
                </div>
            }
            { auth && 
                <div>
                    <p>
                        You are logged in as {auth && auth.nickname ? auth.nickname : null}
                    </p>
                    <a
                        className="App-link"
                        href={"/auth/logout"}
                    >
                        Logout
                    </a>
                </div>
            }
        </nav>
    )
}

export default Nav;