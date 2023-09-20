import React from "react";

export const metadata = {
    title: "Home | Projetos | conhecimentos",
    description: "Página Home"
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