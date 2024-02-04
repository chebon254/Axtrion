import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const BrowseLayout = (
    {children,}: {children: React.ReactNode;}) => {
    return (
        <>
            <Navbar />
            <div className="mt-16">
                <Sidebar />
                {children}
            </div>
        </>
    );
};

export default BrowseLayout;