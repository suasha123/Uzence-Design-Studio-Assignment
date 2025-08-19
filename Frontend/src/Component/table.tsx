import  { useState } from "react";

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortOrder, setSortOrder] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  // Handle row selection
  const handleRowClick = (row: T) => {
    if (!selectable) return;
    let newSelection: T[];
    if (selectedRows.includes(row)) {
      newSelection = selectedRows.filter((r) => r !== row);
    } else {
      newSelection = [...selectedRows, row];
    }
    setSelectedRows(newSelection);
    onRowSelect?.(newSelection);
  };

  // Handle column sorting
  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    let direction: "asc" | "desc" = "asc";
    if (sortOrder?.key === col.dataIndex && sortOrder.direction === "asc") {
      direction = "desc";
    }
    setSortOrder({ key: col.dataIndex, direction });
  };

  // Sort data if sortConfig is set
  let sortedData = [...data];
  if (sortOrder) {
    sortedData.sort((a, b) => {
      const aVal = a[sortOrder.key] ?? "";
      const bVal = b[sortOrder.key] ?? "";

      if (aVal === undefined || bVal === undefined) return 0;

      if (aVal < bVal) return sortOrder.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Loading and empty states
  if (loading) {
  return (
    <div className="flex justify-center items-center py-10 gap-4">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      Loading Table
    </div>
  )
}


  if (!data.length) {
    return <div className="text-center py-8 text-gray-500">No data found</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full border border-gray-200 divide-y divide-gray-200"
        aria-label="Data Table"
      >
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer select-none"
                onClick={() => handleSort(col)}
              >
                <div className="flex items-center space-x-1">
                  <span>{col.title}</span>
                  {col.sortable && sortOrder?.key === col.dataIndex && (
                    <span>{sortOrder.direction === "asc" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-100 cursor-pointer ${
                selectedRows.includes(row) ? "bg-blue-100" : ""
              }`}
              onClick={() => handleRowClick(row)}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-sm text-gray-700">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
