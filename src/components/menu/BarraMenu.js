import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
function BarraMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BarraMenu;
