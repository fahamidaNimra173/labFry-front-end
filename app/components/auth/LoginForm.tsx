'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

export default function AccountSuccessPage() {
  const router = useRouter();

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

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Account Created Successfully!
          </h1>
        </div>

        {/* Go to Home Button */}
        <Button
          onClick={() => router.push('/auth/login')}
          className="w-full"
        >
          Go To Home
        </Button>
      </div>
    </div>
  );
}