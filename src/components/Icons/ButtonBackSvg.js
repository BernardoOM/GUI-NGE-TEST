import * as React from "react"

export default function ButtonBackSvg(props) {
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
            viewBox="0 0 12 6"
            {...props}
        >
            <defs>
                <style>{".str1{stroke:#fff;stroke-width:.248025}.fil0{fill:none}"}</style>
            </defs>
            <g id="Capa_x0020_1">
                <path
                    className="fil0"
                    d="M0 0h12v6H0V0z"
                    style={{
                        stroke: `${props.color}`,
                        strokeWidth: 0.248025,
                    }}
                />
                <g id="_2292041062864">
                    <path className="fil0 str1" d="M8 2v1H5" />
                    <path
                        className="str1"
                        style={{
                            fill: `${props.color}`,
                        }}
                        d="M5 2v2L4 3z"
                    />
                </g>
            </g>
        </svg>
    )
}
