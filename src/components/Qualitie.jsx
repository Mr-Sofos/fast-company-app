import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ qualities }) => {
  return (
    <td>
      {qualities.map((qualitie) => (
        <span
          className={`m-1 p-1 rounded text-light bg-${qualitie.color}`}
          key={qualitie._id}
        >
          {qualitie.name}
        </span>
      ))}
    </td>
  );
};

Qualitie.propTypes = {
  qualities: PropTypes.array
};

export default Qualitie;
