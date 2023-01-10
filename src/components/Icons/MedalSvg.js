import * as React from "react"

export default function MedalSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={326}
            height={560}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 22 37"
            {...props}
        >
            <path
                d="M11 31 0 27v6l11 4 11-4v-6l-11 4zM5 18l6-3 6 3-1-6 4-5-6-1-3-6-3 6-7 1 5 5-1 6zm-5 6 11 4 11-4v-6l-11 4-11-4v6z"
                style={{
                    fill: `${props.color}`,
                }}
            />
        </svg>
    )
}
