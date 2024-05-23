import { Link } from "react-router-dom";

export function MainNavigation () {

    return (

        /* nav>ul>li*4>a */
        <nav>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>

    )
}