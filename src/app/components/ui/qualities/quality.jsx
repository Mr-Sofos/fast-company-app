import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";
const Quality = ({ qual }) => {
    const { getQuality } = useQualities();
    const { name, color } = getQuality(qual._id);
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};
Quality.propTypes = {
    qual: PropTypes.object
};

export default Quality;
