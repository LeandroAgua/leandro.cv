import { useState } from 'react';

const Itens = [
    {link: '/', name: 'Home', active: true, disabled: false, left: true},
    {link: '/cv', name: 'CV', active: false, disabled: false, left: false},
    {link: '/projects', name: 'Projects', active: false, disabled: false, left: false},
    {link: '/about', name: 'Me', active: false, disabled: false, left: false},
]

function TopMenu(){
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg px-3 py-2" style={{ backgroundColor: '#0E4732'}}>
            <div className="container-fluid">
                <div className="navbar-brand">
                    {Itens.filter(item => item.left).map((item, index) => (
                        <a
                            key={index}
                            className={`navbar-brand text-white fw-bold text-decoration-none ${item.active ? 'opacity-100' : 'opacity-75'}`}
                            href={item.link}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                    style={{ filter: 'invert(1)' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {Itens.filter(item => !item.left).map((item, index) => (
                            <li className="nav-item mx-1" key={index}>
                                <a
                                    className={`nav-link px-3 py-2 rounded transition-all ${
                                        item.active
                                            ? 'active text-white fw-semibold'
                                            : 'text-white-50'
                                    } ${
                                        item.disabled
                                            ? 'disabled opacity-50 pe-none'
                                            : ''
                                    }`}
                                    aria-current={item.active ? 'page' : undefined}
                                    href={item.disabled ? undefined : item.link}
                                    style={{
                                        ...(item.active ? { backgroundColor: 'rgba(255, 255, 255, 0.15)' } : {}),
                                        ...(!item.disabled ? {
                                            transition: 'all 0.3s ease',
                                        } : {})
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!item.disabled && !item.active) {
                                            // @ts-ignore
                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                            // @ts-ignore
                                            e.target.style.color = 'white';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!item.disabled && !item.active) {
                                            // @ts-ignore
                                            e.target.style.backgroundColor = 'transparent';
                                            // @ts-ignore
                                            e.target.style.color = 'rgba(255, 255, 255, 0.5)';
                                        }
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopMenu;