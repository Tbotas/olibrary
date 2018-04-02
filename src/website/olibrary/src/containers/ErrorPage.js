import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => (
    <div>
        <p>Ooops ! Cette page est introuvable</p>
        <Link to="/">Accueil</Link>
    </div>
)

export default ErrorPage