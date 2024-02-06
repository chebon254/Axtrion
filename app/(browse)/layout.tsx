import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";
import { Suspense } from "react";

const BrowseLayout = (
    {children,}: {children: React.ReactNode;}) => {
    return (
        <>
            <Navbar />
            <div className="mt-20">
                <Suspense fallback={<SidebarSkeleton/>}></Suspense>
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
};

export default BrowseLayout;