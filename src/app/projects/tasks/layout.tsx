import React from "react";

export const metadata = {
    title: "Projetos | Tasks",
    description: "Página tasks"
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