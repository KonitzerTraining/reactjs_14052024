//import { KolNav } from "@public-ui/react";
import { Link } from "react-router-dom";

export function MainNavigation() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/help">Hilfe</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}