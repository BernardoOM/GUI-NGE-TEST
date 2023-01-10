import React from "react"
import "./Quest.css"
import { ImRadioUnchecked } from "react-icons/im"

export default function Quest({ id, data, handleSelection }) {
    return (
        <div
            className={data.selected ? "quest active" : "quest"}
            onClick={() => handleSelection(id)}
        >
            {data.selected && (
                <ImRadioUnchecked color="#100e0c" size={18} style={{ marginRight: 5 }} />
            )}
            <h2 className={data.selected ? "text-quest active" : "text-quest"}>
                {`${data.name}`.toUpperCase()}
            </h2>
        </div>
    )
}
