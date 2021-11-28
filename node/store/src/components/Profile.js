import React from "react";
import {useAuth0} from "@auth0/auth0-react"

export const Profile = () => {
    const {user, isAuthenticated, isLoading, logout} = useAuth0()
    if (isLoading) {
        return 
    }

    return (
        isAuthenticated && (
            <div>
                <ul className="navbar-nav ms-auto mt-1">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user.picture} className="rounded-circle me-2" width="35" alt={user.name}/>
                            {user.name}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                            <li><a class="dropdown-item" href="#" onClick={() => logout({returnTo:window.location.origin})}>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    )
}