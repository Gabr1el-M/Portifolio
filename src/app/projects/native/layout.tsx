import React from "react";

export const metadata = {
    title: "Projetos | Finance",
    description: "Página finance"
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