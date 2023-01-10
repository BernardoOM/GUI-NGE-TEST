import * as React from "react"

export default function AgilitySvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={601}
            height={546}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 582 528"
            {...props}
        >
            <path
                d="M137 51H51c-9 0-17 8-17 17 0 10 8 17 17 17h86c10 0 17-7 17-17 0-9-7-17-17-17zm375 0c0-28-23-51-51-51s-51 23-51 51 23 51 51 51 51-23 51-51zM226 321c-9-9-15-19-18-31L28 470c-13 13-13 35 0 48 13 14 35 14 48 0l174-173-24-24zm92-290c-13-9-31-7-43 5l-93 93c-14 14-14 35 0 48 13 14 34 14 48 0l74-74 25 18 33-33c5-5 12-10 19-13l-63-44zm230 173H444v-68c0-30-36-45-58-24L250 249c-14 13-14 34 0 48l78 78-95 95c-14 13-14 35 0 48 13 14 35 14 48 0l119-119c13-13 13-35 0-48l-78-78 54-54v20c0 18 15 34 34 34h138c18 0 34-16 34-34 0-19-16-35-34-35zm-445-85H17c-9 0-17 8-17 17 0 10 8 17 17 17h86c10 0 17-7 17-17 0-9-7-17-17-17zm34 68H51c-9 0-17 8-17 17 0 10 8 18 17 18h86c10 0 17-8 17-18 0-9-7-17-17-17z"
                style={{
                    fill: `${props.color}`,
                }}
            />
        </svg>
    )
}
