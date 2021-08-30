import React, {useState} from 'react'

const BookMark = () => {
  const [favorite, setFavorite] = useState(false)
  const isFavorite = () => (favorite ? setFavorite(false) : setFavorite(true))

  return (
    <td className='text-center'>
      <span className='bookmark' onClick={isFavorite}>
        {favorite ? (
          <i class='bi bi-bookmark-heart-fill'></i>
        ) : (
          <i class='bi bi-bookmark'></i>
        )}
      </span>
    </td>
  )
}

export default BookMark
