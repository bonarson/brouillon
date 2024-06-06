import React from 'react';

export interface AboutClientProps {
    name: string,
    mail: string,
    phone: string,
    message: string
};

const AboutClient: React.FC<AboutClientProps> = ({ name, mail, phone, message }) => {
    return (
        <div>
            <h1>bienvenue  : {name}</h1>
            <h1>verifier votre information </h1>
            <li>{mail}</li>
            <li>{phone}</li>
            <li>{message}</li>
        </div>
    );
};

export default AboutClient;
