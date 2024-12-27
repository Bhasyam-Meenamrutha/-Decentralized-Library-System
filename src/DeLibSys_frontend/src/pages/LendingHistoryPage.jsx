
import React from 'react';

const LendingHistoryPage = () => {
  // Sample data for lending history
  const lendingHistory = [
    {
      id: 1,
      title: 'Blockchain Basics',
      borrower: 'Alice',
      borrowedDate: '2024-11-15',
      returnedDate: '2024-12-01',
    },
    {
      id: 2,
      title: 'Solidity Essentials',
      borrower: 'Bob',
      borrowedDate: '2024-12-05',
      returnedDate: '2024-12-20',
    },
  ];

  return (
    <div>
      <header>
        <h2>Lending History</h2>
      </header>
      <div>
        {lendingHistory.length > 0 ? (
          lendingHistory.map((entry) => (
            <div className="card" key={entry.id}>
              <h3>{entry.title}</h3>
              <p>Borrower: {entry.borrower}</p>
              <p>Borrowed Date: {entry.borrowedDate}</p>
              <p>Returned Date: {entry.returnedDate}</p>
            </div>
          ))
        ) : (
          <p>No lending history available.</p>
        )}
      </div>
    </div>
  );
};

export default LendingHistoryPage;
