import React from "react"
import PropTypes from "prop-types"
const BookMark = ({ status, ...rest }) => {
  // const [favorite, setFavorite] = useState(false)
  // const isFavorite = () => (favorite ? setFavorite(false) : setFavorite(true))
  // const bookmark = () => {
  //   if (favorite) return <i className="bi bi-bookmark-heart-fill"></i>
  //   return <i className="bi bi-bookmark"></i>
  // }

  return (
    <td className="text-center">
      <span className="bookmark" {...rest}>
        {<i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>}
      </span>
    </td>
  )
}
BookMark.propTypes = {
  status: PropTypes.bool
}

export default BookMark
