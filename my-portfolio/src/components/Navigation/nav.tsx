// components/Navigation.js
import Link from 'next/link';
import navLinks from '@/data/navLinks';

const Navigation = () => {
    return (
        <nav>
            <div className="group">
                <ul className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link className='font-bold text-[var(--secondary-color)] text-6xl opacity-100 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300' href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
