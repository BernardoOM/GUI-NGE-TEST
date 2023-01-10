import React from "react"
import MedalSvg from "../Icons/MedalSvg"
import AgilitySvg from "../Icons/AgilitySvg"
import PowerSvg from "../Icons/PowerSvg"
import "./Skill.css"

function Skill({
    id,
    name,
    currentLevel,
    currentLevelPoints,
    nextLevelPoints,
    currentSkillPoints,
    selected,
    barPoints,
    handleSelection,
}) {
    function getIcon() {
        switch (name) {
            case "survivor": {
                return (
                    <MedalSvg width={256} height={128} color={`${selected ? "#E09200" : "#fff"}`} />
                )
            }
            case "agility": {
                return (
                    <AgilitySvg
                        width={256}
                        height={128}
                        color={`${selected ? "#E09200" : "#fff"}`}
                    />
                )
            }
            case "power": {
                return (
                    <PowerSvg width={256} height={128} color={`${selected ? "#E09200" : "#fff"}`} />
                )
            }
            default:
                return null
        }
    }

    return (
        <div className="skill-content">
            <div className="title-skill" onClick={() => handleSelection(id)}>
                <h2 className={`${selected ? "text-title-skill active" : "text-title-skill"}`}>
                    {`${name}`.toUpperCase()}
                </h2>
                <h3 className={`${selected ? "text-level-skill active" : "text-level-skill"}`}>
                    LEVEL
                </h3>
            </div>
            <div className="image-skill">
                <div className="image-container">{getIcon()}</div>
            </div>
            <div className="level-skill">
                <div className="text-level">
                    <h4>LEVEL</h4>
                </div>
                <div className="text-number-level">
                    <h4>{currentLevel}</h4>
                </div>
            </div>
            <div className="level-points-skill">
                <div className="text-level-points">
                    <h4>LEVEL</h4>
                </div>
                <div className="text-number-level-points">
                    <h4>{currentLevelPoints}</h4>
                </div>
            </div>
            <div className="next-level-points-skill">
                <div className="text-next-level-points">
                    <h4>LEVEL</h4>
                </div>
                <div className="text-number-next-level-points">
                    <h4>{nextLevelPoints}</h4>
                </div>
            </div>
            <div className="bar-points-skill">
                <div className="bar-points-container">
                    <img style={{ width: barPoints }} src="bar.png" alt="barpoints" />
                </div>
            </div>
            <div className="skill-points">
                <div className="text-next-level-points">
                    <h3>SKILL POINTS</h3>
                </div>
                <div className="text-number-next-level-points">
                    <h3>{currentSkillPoints}</h3>
                </div>
            </div>
        </div>
    )
}

export default Skill
