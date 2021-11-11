import PropTypes from "prop-types"
import React, { useProfession } from "../../hooks/useProfession"

const Profession = ({ id }) => {
  console.log(id)
  const { isLoading, getProfession } = useProfession()
  const prof = getProfession(id)
  console.log(prof.name)
  if (!isLoading) {
    return <p>{prof.name}</p>
  } else {
    return <h1>Loading...</h1>
  }
}

Profession.propTypes = {
  id: PropTypes.string
}

export default Profession
