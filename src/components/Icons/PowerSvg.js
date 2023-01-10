import * as React from "react"

export default function PowerSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={538}
            height={538}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 106 106"
            {...props}
        >
            <path
                d="M105 102c-5-5-6-14-8-25-2-15-4-34-17-48l7-7h10c1 0 2-1 2-1l6-18c1-1 1-2 0-2-1-1-2-1-2-1L85 7c-1 0-1 1-1 2v10l-7 7C62 13 44 10 29 8 18 7 9 6 4 1 3 0 2 0 1 1 0 1 0 2 0 2v1l30 69-2 3H14L1 89c-1 0-1 1-1 2 1 1 1 1 2 1h11v11c0 1 1 2 2 2v1c1 0 2-1 2-1l13-13c1-1 1-1 1-2V78l3-3c9 4 69 30 69 30v1c1 0 2-1 2-1s1-1 1-2l-1-1zM24 92l-4 4V86H10l4-5h8c1 0 2 1 2 3v8zM8 9c6 5 14 7 22 10 12 5 25 9 35 18L34 69 8 9zm29 63 31-31c10 10 14 22 18 34 3 8 6 16 10 23L37 72z"
                style={{
                    fill: `${props.color}`,
                }}
            />
        </svg>
    )
}
