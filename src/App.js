import React, { useState } from "react"
import "./App.css"
import NavMenu from "./components/NavMenu"
import Skills from "./menus/Skills"
import Quests from "./menus/Quests"
import ButtonBackSvg from "./components/Icons/ButtonBackSvg"
import ButtonEcsSvg from "./components/Icons/ButtonEcsSvg"

const menus = ["Quests", "Skills"]

export default function App() {
    const [currentMenu, setCurrentMenu] = useState(menus[0])

    const handleMenu = (arrowType) => {
        const index = menus.findIndex((current) => current === currentMenu)

        if (arrowType === "left" && index !== 0) {
            setCurrentMenu(menus[index - 1])
        } else if (arrowType === "right" && index !== menus.length - 1) {
            setCurrentMenu(menus[index + 1])
        }
    }

    function showContent() {
        switch (currentMenu) {
            case "Quests": {
                return <Quests />
            }
            case "Skills": {
                return <Skills />
            }
            default: {
                return null
            }
        }
    }

    return (
        <div className="container">
            <div>
                <NavMenu handleMenu={handleMenu} currentNavMenu={currentMenu} />
            </div>
            <div className="content-container">{showContent()}</div>
            <div className="buttons-container">
                <div className="button-left">
                    <ButtonBackSvg width={256} height={32} color="#fff" />
                </div>
                <span> VIEW SKILL TREE</span>
                <div className="button-right">
                    <ButtonEcsSvg width={256} height={32} color="#fff" />
                </div>
                <span>BACK</span>
            </div>
        </div>
    )
}
