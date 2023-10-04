import React from "react";

export const metadata = {
    title: "Projetos | System",
    description: "Página system"
}

export default function aboutLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <>
         {children}
        </>
    )
}