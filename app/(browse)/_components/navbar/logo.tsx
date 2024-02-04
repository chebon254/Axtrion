import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="lg:flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="p-4">
                    <Image 
                        src="/axtrion_logo.png"
                        alt="Axtrion"
                        height="52"
                        width="186"
                    />
                </div>
            </div>
        </Link>
    )
};