import React from 'react'

const BookPage = (props) => (
    <div>
        Vous êtes sur la page du livre: {props.match.params.id}
    </div>
)

export default BookPage