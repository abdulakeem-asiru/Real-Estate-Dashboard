import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DashboardSkeleton = () => {
  const tableHeaders = ['Name', 'Email', 'Role', 'Status', 'Actions'];
  const tableRows = Array(5).fill(null); // 5 rows for loading state
  const statCards = Array(4).fill(null); // 4 stat cards

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width={200} height={30} />
        <Skeleton width={100} height={30} />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <Skeleton height={20} width={100} className="mb-2" />
            <Skeleton height={30} width={60} />
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div>
        <Skeleton height={30} width={150} className="mb-4" />
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                {tableHeaders.map((header, i) => (
                  <th key={i} className="p-4 text-left">
                    <Skeleton height={20} width={80} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((_, rowIndex) => (
                <tr key={rowIndex} className="border-t">
                  {tableHeaders.map((_, colIndex) => (
                    <td key={colIndex} className="p-4">
                      <Skeleton height={20} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Section */}
      <div>
        <Skeleton height={300} />
      </div>
    </div>
  );
};

export default DashboardSkeleton;
