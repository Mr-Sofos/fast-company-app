import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const NavProfile = () => {
    const [isOpen, setOpen] = useState(false);
    const { currentUser } = useAuth();
    const toggleMenu = () => setOpen((prevState) => !prevState);
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    className="rounded-circle shadow-1-strong me-3"
                    alt="avatar"
                    width="65"
                    height="65"
                />
            </div>
            <div className={`w-100 dropdown-menu ${isOpen ? "show" : ""}`}>
                <Link
                    className="dropdown-item"
                    to={`/users/${currentUser._id}`}
                >
                    Profile
                </Link>
                <Link className="dropdown-item" to="logout">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
