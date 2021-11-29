import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities();
    console.log("d[kdfjhafpiu", qualities);
    if (isLoading) return "Loadind ...";
    return (
        <>
            {qualities.map((qual) => (
                <Quality key={qual._id} id={qual._id} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
