import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-blue-100 fixed w-screen top-0 left-0 z-0">
                <div
                    className="mx-auto py-4 px-2 text-blue-600 flex items-center"
                    style={{ maxWidth: '1500px' }}
                >
                    {/* <button
                        className="mr-4 md:hidden hover:text-blue-800"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <i className="fas fa-bars fa-lg "></i>
                    </button> */}
                    <Link to={'/'}>
                        <h1 className="text-lg font-bold">Quizzastrics</h1>
                    </Link>
                    <div className="flex space-x-4 ml-auto">
                        {/* <button
                            className="hover:text-blue-800"
                            // onClick={() => navigate('/login')}
                        >
                            Login
                        </button>
                        <button
                            className="hover:text-blue-800"
                            // onClick={() => navigate('/signup')}
                        >
                            Register
                        </button> */}
                    </div>
                </div>
            </div>

            {sidebarOpen && <SidebarModal setSidebarOpen={setSidebarOpen} />}
        </>
    );
}

export function SidebarModal({
    setSidebarOpen,
}: {
    setSidebarOpen: (state: boolean) => void;
}) {
    return (
        <div
            id="sidebar-modal-wrapper"
            className="z-10 h-screen w-screen fixed top-0 left-0 bg-gray-50 bg-opacity-50"
            onClick={(e) => {
                if ((e.target as Element).id === 'sidebar-modal-wrapper') {
                    setSidebarOpen(false);
                } else if (
                    (e.target as Element).tagName === 'BUTTON' ||
                    // e.target.tagName === 'DIV' ||
                    (e.target as Element).tagName === 'A'
                ) {
                    setSidebarOpen(false);
                }
            }}
        >
            <div className="max-w-xs bg-gray-50">
                <div className="flex">
                    <button
                        className="text-4xl ml-auto focus:text-red-700"
                        onClick={() => setSidebarOpen(false)}
                    >
                        &times;
                    </button>
                </div>

                <h1>i am sidebar</h1>
                {/* <Sidebar setRoute={setRoute} /> */}
            </div>
        </div>
    );
}
