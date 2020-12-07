import React from 'react';
import './Link.css';

type LinkProps = {
    url: string;
    className?: string;
};

const Link: React.FC<LinkProps> = ({ children, className, url }) => (
    <a className={`${className} link`} href={url} target="_blank">
        {children}
    </a>
)

export default Link;
