import { use, useEffect, useState } from 'react';
import Ticket from '../ticket/Ticket';
import { toast } from 'react-toastify';

const Task = ({ loadData, setInProgressCount, setResolvedCount }) => {
  const tickets = use(loadData);

  const [customerTickets, setCustomerTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [removedIds, setRemovedIds] = useState([]);

  useEffect(() => {
    setCustomerTickets(tickets || []);
  }, [tickets]);

  useEffect(() => {
    setInProgressCount?.(taskStatus.length);
  }, [taskStatus, setInProgressCount]);

  useEffect(() => {
    setResolvedCount?.(resolved.length);
  }, [resolved, setResolvedCount]);

  const handleAddToTask = (ticket) => {
    if (taskStatus.some(t => t.id === ticket.id)) {
      toast.info('Already in Task Status');
      return;
    }
    setTaskStatus(prev => [...prev, ticket]);
    toast.success(`${ticket.title} added to Task Status`);
  };

  const handleComplete = (id) => {
    const t = taskStatus.find(x => x.id === id);
    if (!t) return;

    setTaskStatus(prev => prev.filter(x => x.id !== id));
    setResolved(prev => [...prev, t]);
    setCustomerTickets(prev => prev.filter(x => x.id !== id));
    setRemovedIds(prev => (prev.includes(id) ? prev : [...prev, id]));

    toast.success(`${t.title} marked as Resolved`);
  };

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 w-11/12 mx-auto py-10">
      <div className="md:col-span-2 grid gap-5 sm:grid-cols-1 md:grid-cols-2">
        {customerTickets
          .filter(ticket => !removedIds.includes(ticket.id))
          .map(ticket => (
            <div key={ticket.id} onClick={() => handleAddToTask(ticket)}>
              <Ticket ticket={ticket} />
            </div>
          ))
        }
        {customerTickets.filter(t => !removedIds.includes(t.id)).length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No customer tickets left.
          </div>
        )}
      </div>

      <div className="md:col-span-1 space-y-10">
        <div className="Task-bar-container">
          <h2 className="text-xl font-semibold">Task Status</h2>
          <p>Select a ticket to add to Task Status</p>

          <div className="mt-3 space-y-2">
            {taskStatus.length === 0 && (
              <p className="text-sm text-gray-500">No tasks yet.</p>
            )}
            {taskStatus.map(t => (
              <div key={t.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span className="text-sm">{t.title}</span>
                <button
                  onClick={() => handleComplete(t.id)}
                  className="px-2 py-1 bg-green-600 text-white rounded"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="resolved-bar-container">
          <h2 className="text-xl font-semibold">Resolved Task</h2>
          {resolved.length === 0 ? (
            <p>No resolved tasks yet.</p>
          ) : (
            <div className="mt-3 space-y-2">
              {resolved.map(t => (
                <div
                  key={t.id}
                  className="flex items-center justify-between bg-green-50 text-green-700 px-2 py-1 rounded text-sm"
                >
                  <span className="truncate">{t.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
