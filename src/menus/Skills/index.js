import React, { useState } from "react"
import Skill from "../../components/Skill"
import { SKILLS_DATA } from "../../services/data"

function Skills() {
    const [mySkills, setMySkills] = useState(SKILLS_DATA)

    function handleSkillSelection(skillId) {
        if (skillId) {
            const updatedSkillsSelection = mySkills.map((skill) => {
                if (skillId === skill.id) {
                    skill["selected"] = true
                } else {
                    skill["selected"] = false
                }
                return skill
            })
            setMySkills(updatedSkillsSelection)
        }
    }

    return (
        <>
            {mySkills.map((data) => {
                return (
                    <Skill
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        currentLevel={data.level}
                        currentLevelPoints={data.levelPoints}
                        nextLevelPoints={data.nextLevelPoints}
                        currentSkillPoints={data.skillPoints}
                        selected={data.selected}
                        barPoints={(data.levelPoints / data.nextLevelPoints) * 300}
                        handleSelection={handleSkillSelection}
                    />
                )
            })}
        </>
    )
}

export default Skills
