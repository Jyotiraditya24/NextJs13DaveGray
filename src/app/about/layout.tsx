import React from "react";

export default function AboutLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <div>
            <h1>Only on about</h1>
            {children}
        </div>
    )
}