import * as React from "react"

export default function ButtonEcsSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={241}
            height={121}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 15 8"
            {...props}
        >
            <path
                d="M1 0h14v8H1C0 8 0 7 0 7V1c0-1 0-1 1-1z"
                style={{
                    fill: "none",
                    stroke: `${props.color}`,
                    strokeWidth: 0.317469,
                }}
            />
            <path
                d="M5 2h2-2v1h1v1H5v1h2v1H5V2zm3 4H7V3h1v1-1H7v2h1v1zm2 0H9V5h1V4H9V3h1-1l1 1v2z"
                style={{
                    fill: `${props.color}`,
                    fillRule: "nonzero",
                }}
            />
        </svg>
    )
}
