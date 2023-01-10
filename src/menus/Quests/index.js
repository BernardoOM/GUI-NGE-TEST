import React, { useState } from "react"
import "./Quests.css"
import { ImRadioUnchecked } from "react-icons/im"
import Quest from "../../components/Quest"
import { QUESTS_DATA } from "../../services/data"

export default function Quests() {
    const [selectedQuest, setSelectedQuest] = useState(() => {
        return QUESTS_DATA.find((quest) => quest.selected)
    })

    const [myQuests, setMyQuests] = useState(QUESTS_DATA)

    function handleQuestSelection(questId) {
        if (questId) {
            const quests = QUESTS_DATA.map((quest) => {
                if (quest.id === questId) {
                    quest["selected"] = true
                } else {
                    quest["selected"] = false
                }
                return quest
            })
            setSelectedQuest(quests.find((quest) => quest.selected))
            setMyQuests(quests)
        }
    }

    return (
        <>
            <div className="quests-container">
                <div className="text-quests-container">
                    <h2 className="text-title-quests">QUESTS</h2>
                </div>
                <div className="quests-list-container">
                    {myQuests.map((quest) => {
                        return (
                            <Quest
                                key={quest.id}
                                id={quest.id}
                                data={quest}
                                handleSelection={handleQuestSelection}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="quest-type-container">
                <div className="text-quest-type-container">
                    <h2 className="text-quest-type">{selectedQuest.name.toUpperCase()}</h2>
                    <h3 className="text-story-quests">STORY QUESTS</h3>
                </div>
                <div className="content-quest-type-container">
                    <h3 className="text-tracker">OBJETIVE TRACKER</h3>
                    <div className="objective-quest-container">
                        <ImRadioUnchecked color="#fff" size={18} style={{ marginRight: 5 }} />
                        <h2 className="text-objective">{selectedQuest.objective.toUpperCase()}</h2>
                    </div>
                    <p className="description-quest">{selectedQuest.description}</p>
                </div>
                <div className="quest-rewards-details-container">
                    <div className="quest-rewards-container">
                        <h3 className="text-quest-rewards">REWARDS</h3>
                        <h4>YOU WILL RECEIVE</h4>
                        <span className="text-reward">{selectedQuest.rewards}</span>
                    </div>
                    <div className="quest-details-container">
                        <h3 className="text-quest-details">QUEST DETAILS</h3>
                        <h4>
                            ASSIGNED BY
                            <span className="text-assignedBy">{selectedQuest.assignedBy}</span>
                        </h4>
                        <h4>
                            LOCATION
                            <span className="text-location">{selectedQuest.location}</span>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

/**
 *  <div className={questsData[0].selected ? "quest active" : "quest"}>
                        <ImRadioUnchecked color="#100e0c" size={18} style={{ marginRight: 5 }} />
                        <h2 className={questsData[0].selected ? "text-quest active" : "text-quest"}>
                            {`${questsData[0].name}`.toUpperCase()}
                        </h2>
                    </div>
                    <div className={questsData[1].selected ? "quest active" : "quest"}>
                        <ImRadioUnchecked color="#100e0c" size={18} style={{ marginRight: 5 }} />
                        <h2 className={questsData[1].selected ? "text-quest active" : "text-quest"}>
                            {`${questsData[1].name}`.toUpperCase()}
                        </h2>
                    </div>
 */
