'use client';

import React from 'react';
import Image from 'next/image';
import VerifyEmailForm from '../../components/auth/VeryEmailForm';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Labfry Logo-02 (1) 1.png"
            alt="Labfry Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Please check your email!
          </h1>
        </div>

        {/* Verify Form */}
        <VerifyEmailForm />
      </div>
    </div>
  );
}