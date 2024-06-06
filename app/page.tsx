// in src/pages/admin.tsx or src/app/admin/page.tsx depending on your routing setup
import React from 'react';
import dynamic from 'next/dynamic';
import AdminApp from '@/pages/AdminApp';



const AdminPage = () => {
  return <AdminApp />;
};

export default AdminPage;
