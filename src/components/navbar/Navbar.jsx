import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar sm w-11/12 shadow-sm mx-auto">
                <div className="flex-1">
                    <a className="text-xl font-bold">CS — Ticket System</a>
                </div>
                <div className="flex-none hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-s font-medium">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <button className="btn rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] text-white px-4 py-2 font-semibold">
                        + New Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
