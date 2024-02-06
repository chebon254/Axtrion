"use client"

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({
    children, 
}: WrapperProps ) => {
    const [isClient, setIsclient] = useState(false);
    const { collapsed } = useSidebar((state) => state);

    useEffect(() => {
        setIsclient(true);
    }, []);

    if (!isClient) return (
        <aside className={ cn(
            "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50"
            )}
        >
            <ToggleSkeleton/>
            <RecommendedSkeleton/>
        </aside>
    );
    
    return (
        <aside 
            className={ cn(
                "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50",
                collapsed && "w-[70px]"
                )}
        >
            {children}
        </aside>
    );
};