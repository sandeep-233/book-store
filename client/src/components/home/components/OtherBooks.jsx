import React, { useEffect, useState } from 'react'
import { BookCards } from '../../common/BookCards';

export const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
      fetch("http://localhost:4000/all-books").then(res => res.json()).then(data => setBooks(data.slice(3,10)))
    }, [])

  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}
