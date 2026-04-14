"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  const pathname = usePathname();
  
  // Format the pathname into breadcrumb items dynamically
  const generateBreadcrumbs = () => {
    if (!pathname || pathname === '/') return [{ label: title }];
    
    const segments = pathname.split('/').filter(p => p !== '');
    
    // Determine the base route
    const baseHref = segments[0] === 'admin' ? '/admin/dashboard' : '/user/dashboard';
    
    const items: import('@/components/ui/Breadcrumb').BreadcrumbItem[] = [
      { label: 'Beranda', href: baseHref }
    ];
    
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Clean up the URL segment (e.g., "sasaran-strategis" -> "Sasaran Strategis")
      const formattedLabel = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      items.push({
        // For the final leaf node, use the exact Page title, otherwise use the formatted URL segment
        label: isLast ? title : formattedLabel,
        href: isLast ? undefined : currentPath
      });
    });
    
    return items;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <div className="flex flex-col mb-10 gap-3 max-w-7xl mx-auto w-full">
      <div className="w-full mb-1">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="flex items-start justify-between gap-6 w-full">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">{title}</h1>
          {description && <p className="text-gray-500 text-base mt-2">{description}</p>}
        </div>
        {action && (
          <div className="shrink-0 flex items-center">{action}</div>
        )}
      </div>
    </div>
  );
}

