import React from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Close menu when route changes (for /resume)
    React.useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Helper to close menu on anchor click
    const handleAnchorClick = () => setIsOpen(false);

    // Helper to handle navigation to sections from any page
    const handleSectionNav = (e, sectionId) => {
        e.preventDefault();
        setIsOpen(false);
        if (location.pathname !== "/") {
            // Go to home, then scroll after navigation
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            // Already on home, just scroll
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    React.useEffect(() => {
        // If navigated with scrollTo state, scroll to section
        if (location.pathname === "/" && location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100); // Wait for page render
        }
    }, [location]);

    return (
        <header className='w-full fixed top-0 left-0 z-50'>
            <nav className='bg-white/50 text-black p-4 shadow-lg backdrop-blur'>
                <div className='flex items-center justify-between'>
                    <a href="/" className="text-2xl font-bold">Eliezer Then Portfolio</a>
                    <button className='block text-black cursor-pointer md:hidden'
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MdMenuOpen className='text-3xl' /> : <MdMenu className='text-3xl' />}
                    </button>
                    <ul className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent 
                    md:flex-row transition-all duration-300 ease-in-out ${isOpen ? 'h-[240px]' : 'h-[0px]'}`}>
                        <li>
                          <a
                            href="#about-me"
                            onClick={e => handleSectionNav(e, "about-me")}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            About Me
                          </a>
                        </li>
                        <li>
                          <a
                            href="#timeline"
                            onClick={e => handleSectionNav(e, "timeline")}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a
                            href="#projects"
                            onClick={e => handleSectionNav(e, "projects")}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="#testimonials"
                            onClick={e => handleSectionNav(e, "testimonials")}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <Link to="/gallery" onClick={handleAnchorClick}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to="/resume" onClick={handleAnchorClick}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Resume
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            onClick={handleAnchorClick}
                            className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}>
                            Contact
                          </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;