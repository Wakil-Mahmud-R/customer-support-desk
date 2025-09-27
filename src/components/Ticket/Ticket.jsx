import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-3 max-w-md">
      <div className="flex justify-between items-start gap-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {ticket.title}
        </h2>
        <span
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm 
            ${ticket.status === "Open" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full 
              ${ticket.status === "Open" ? "bg-green-600" : "bg-gray-400"}`}
          ></span>
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-600">
        {ticket.description}
      </p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-700">#{ticket.id}</span>
          <span
            className={`font-bold ${
              ticket.priority === "HIGH"
                ? "text-red-600"
                : ticket.priority === "MEDIUM"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-700">{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3M4 11h16m-2 8H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2z"
              />
            </svg>
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
