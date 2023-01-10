import React from "react"
import "./NavMenu.css"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

function NavMenu({ currentNavMenu, handleMenu }) {
    return (
        <div className="nav-menu-container">
            <ul className="nav-menu">
                <li>
                    <IoArrowBackCircleOutline
                        color="#7f7f7f"
                        size={40}
                        style={{ cursor: "pointer", display: "flex" }}
                        onClick={() => handleMenu("left")}
                    />
                </li>
                <li className={`${currentNavMenu === "Map" ? "nav-item active" : "nav-item"}`}>
                    MAP
                </li>
                <li className={`${currentNavMenu === "Quests" ? "nav-item active" : "nav-item"}`}>
                    QUESTS
                </li>
                <li
                    className={`${currentNavMenu === "Inventory" ? "nav-item active" : "nav-item"}`}
                >
                    INVENTORY
                </li>
                <li
                    className={`${currentNavMenu === "Blueprint" ? "nav-item active" : "nav-item"}`}
                >
                    BLUEPRINT
                </li>
                <li className={`${currentNavMenu === "Skills" ? "nav-item active" : "nav-item"}`}>
                    SKILLS
                </li>
                <li>
                    <IoArrowForwardCircleOutline
                        color="#7f7f7f"
                        size={40}
                        style={{ cursor: "pointer", display: "flex" }}
                        onClick={() => handleMenu("right")}
                    />
                </li>
            </ul>
        </div>
    )
}

export default NavMenu
