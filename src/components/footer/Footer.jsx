import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content flex flex-col justify-between">
        <div className="w-11/12 mx-auto px-6 py-12 border-2 border-red-500">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-5 text-justify border-2 border-red-500">
        <div className=' border-2 border-red-500'>
        <h2 className="text-lg font-semibold">CS — Ticket System</h2>
        <p className="mt-4 text-sm leading-6 text-neutral-300 text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </div>

        <div className=' border-2 border-red-500'>
        <h3 className="font-semibold mb-3">Company</h3>
        <ul className="space-y-2 text-sm text-justify">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Contact Sales</a></li>
        </ul>
        </div>

        <div className=' border-2 border-red-500'>
        <h3 className="font-semibold mb-3">Services</h3>
        <ul className="space-y-2 text-sm text-justify">
        <li><a href="#">Products & Services</a></li>
        <li><a href="#">Customer Stories</a></li>
        <li><a href="#">Download Apps</a></li>
        </ul>
        </div>

        <div className=' border-2 border-red-500'>
        <h3 className="font-semibold mb-3">Information</h3>
        <ul className="space-y-2 text-sm text-justify">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Join Us</a></li>
        </ul>
        </div>

        <div className=' border-2 border-red-500'>
        <h3 className="font-semibold mb-3">Social Links</h3>
        <ul className="space-y-3 text-sm text-justify">
        <li className="flex items-center gap-3">
        <i className="fa-brands items-center fa-x-twitter"></i>@CS — Ticket System
        </li>
        <li className="flex items-center gap-3">
        <i className="fa-brands  items-center fa-linkedin"></i> @CS — Ticket System
        </li>
        <li className="flex items-center gap-3">
        <i className="fa-brands  items-center fa-facebook-f"></i>@CS — Ticket System
        </li>
        <li className="flex items-center gap-3">
        <i className="fa-solid  items-center fa-envelope"></i>support@cst.com
        </li>
        </ul>
        </div>
        </div>
        </div>


        <div className=" w-11/12 mx-auto py-4 text-center text-sm border-2 border-red-500">
        <p>
        © 2025 CS — Ticket System. All rights reserved.
        </p>
        </div>
        </footer>
    );
};

export default Footer;