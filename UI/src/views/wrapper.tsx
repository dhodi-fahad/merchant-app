import React, { ReactNode } from 'react';
import Navbar from "../components/navbar/navbar.tsx";
import Pages from "./pages";

// Props for the Wrapper component
interface WrapperProps {
    children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    let navbar: ReactNode | null = null;
    let pages: ReactNode | null = null;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Navbar) {
                navbar = child;
            } else if (child.type === Pages) {
                pages = child;
            }
        }
    });

    return (
        <div className="sm:ml-64 w-screen h-screen bg-purple-50 overflow-y-scroll">
            {/* Render the Navbar component */}
            {navbar}

            {/* Render the Pages component */}
            {pages}
        </div>
    );
};

export default Wrapper;
