"use client";
import { Table, type Column } from '@idds/react';
import type { ReactNode } from 'react';

type TableWithAPIProps = {
  columns: Array<
    | Column
    | { key: string; label: string; render?: (row: any) => ReactNode; width?: string | number; className?: string }
  >;
  data: any[];
  pageSize?: number;
  showSearch?: boolean;
  showPagination?: boolean;
  rowKey?: string;
  className?: string;
  children?: ReactNode;
};

export default function TableWithAPI({
  columns,
  data,
  pageSize = 10,
  showSearch = false,
  showPagination = true,
  rowKey = 'id',
  className = '',
  children,
}: TableWithAPIProps) {
  const tableClassName = ['table-zebra-innovative', className].filter(Boolean).join(' ');

  // Map key/label to accessor/header if needed
  const normalizedColumns = columns.map((col: any) => {
    if (col.accessor && col.header) return col;
    const normalized: any = {
      accessor: col.key,
      header: col.label,
      width: col.width,
      className: col.className,
    };
    if (typeof col.render === 'function') {
      normalized.render = (row: any) => col.render(row);
    }
    return normalized;
  });
  console.log('TableWithAPI columns:', normalizedColumns);
  console.log('TableWithAPI data:', data);
  console.log('Data length:', data?.length || 0);
  
  if (!data?.length) {
    return (
      <div className={`space-y-4 ${className}`}>
        {children}
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center text-gray-500">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="text-lg font-semibold mb-1">No data found</h3>
          <p className="text-sm">Data akan muncul setelah tersedia.</p>
        </div>
      </div>
    );
  }
  
  // Implement fetchData for local data
  const fetchData = async ({ page, pageSize: ps, sortField, sortOrder, searchTerm }: any) => {
    let filtered = data;
    if (searchTerm) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((v) => String(v).toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (sortField) {
      filtered = [...filtered].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'desc' ? 1 : -1;
        if (a[sortField] > b[sortField]) return sortOrder === 'desc' ? -1 : 1;
        return 0;
      });
    }
    const start = (page - 1) * ps;
    const end = start + ps;
    return { data: filtered.slice(start, end), total: filtered.length };
  };
  return (
    <div className={`space-y-4 ${className}`} >
      {children}
      <Table
        columns={normalizedColumns}
        fetchData={fetchData}
        initialPageSize={pageSize}
        showSearch={showSearch}
        showPagination={showPagination}
        rowKey={rowKey}
        className={tableClassName}
      />
    </div>
  );
}
