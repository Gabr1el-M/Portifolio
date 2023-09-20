import React from "react";

export const metadata = {
    title: "Sobre mim",
    description: "Página sobre mim"
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