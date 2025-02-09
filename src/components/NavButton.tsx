import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components.css';

interface NavButtonProps {
    text: string;
    link: string;
}

function NavButton({ text, link }: NavButtonProps) {
    return (
        <Link to={link} className="NavButtonContainer">
            <button className="NavButton">{text}</button>
        </Link>
    );
}

export default NavButton;