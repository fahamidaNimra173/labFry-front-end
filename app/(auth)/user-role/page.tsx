'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function SelectRolePage() {
  const router = useRouter();

  const handleRoleSelect = (role: 'customer' | 'service-provider') => {
    // Navigate to register page with role as query parameter
    router.push(`/auth/register?role=${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Labfry Logo-02 (1) 1.png" // Replace with your logo path
            alt="Labfry Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Select a Role
          </h1>
          <p className="text-gray-600 text-sm">
            Choose the option that best describes you so we can tailor your experience.
          </p>
        </div>

        {/* Role Buttons */}
        <div className="space-y-4">
          {/* Customer Button */}
          <button
            onClick={() => handleRoleSelect('customer')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-50 text-red-600 border-2 border-red-200 rounded-lg hover:bg-red-100 transition-all font-medium group"
          >
            <span>I am a Customer</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Service Provider Button */}
          <button
            onClick={() => handleRoleSelect('service-provider')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all font-medium group"
          >
            <span>I am a Service Provider</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}