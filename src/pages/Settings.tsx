
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import SettingsSidebar from '@/components/SettingsSidebar';
import ChatInterfaceSettings from '@/components/ChatInterfaceSettings';
import ModelConfigSettings from '@/components/ModelConfigSettings';
import ApiKeysSettings from '@/components/ApiKeysSettings';
import AccountSettings from '@/components/AccountSettings';
import BillingSettings from '@/components/BillingSettings';

const Settings = () => {
  const location = useLocation();
  
  return (
    <div className="flex h-screen bg-oralia-dark">
      <Sidebar />
      <div className="flex flex-1 overflow-hidden">
        <SettingsSidebar />
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 border-b border-oralia-light-gray">
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
          
          <Routes>
            <Route index element={<Navigate to="/settings/chat-interface" replace />} />
            <Route path="chat-interface" element={<ChatInterfaceSettings />} />
            <Route path="model-config" element={<ModelConfigSettings />} />
            <Route path="api-keys" element={<ApiKeysSettings />} />
            <Route path="account" element={<AccountSettings />} />
            <Route path="billing" element={<BillingSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;
