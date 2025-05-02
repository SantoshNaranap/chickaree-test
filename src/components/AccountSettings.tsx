
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AccountSettings = () => {
  return (
    <div className="w-full max-w-3xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Account Settings</h2>
        <p className="text-oralia-text-gray">Manage your account information</p>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" className="mb-2">Change Photo</Button>
            <p className="text-xs text-oralia-text-gray">Recommended: Square JPG, PNG. At least 200x200px.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              placeholder="John"
              className="bg-oralia-dark-gray border-oralia-light-gray text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Smith"
              className="bg-oralia-dark-gray border-oralia-light-gray text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            placeholder="john.smith@example.com"
            className="bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input 
            id="currentPassword" 
            type="password"
            className="bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input 
              id="newPassword" 
              type="password"
              className="bg-oralia-dark-gray border-oralia-light-gray text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input 
              id="confirmPassword" 
              type="password"
              className="bg-oralia-dark-gray border-oralia-light-gray text-white"
            />
          </div>
        </div>

        <Button className="w-full bg-oralia-light-purple hover:bg-oralia-purple mt-6">
          SAVE CHANGES
        </Button>
      </div>
    </div>
  );
};

export default AccountSettings;
