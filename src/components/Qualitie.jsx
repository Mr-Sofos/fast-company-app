import React from 'react'

const Qualitie = ({qualities}) => {
  return (
    <td>
      {qualities.map((qualitie) => (
        <span className={`m-1 p-1 rounded text-light bg-${qualitie.color}`}>
          {qualitie.name}
        </span>
      ))}
    </td>
  )
}

export default Qualitie
