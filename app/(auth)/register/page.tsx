'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'customer' | 'service-provider'>('customer');

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'customer' || roleParam === 'service-provider') {
      setRole(roleParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Labfry Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create your Account
          </h1>
          <p className="text-gray-600 text-sm">
            When sports Meets smart Tech.
          </p>
        </div>

        {/* Register Form */}
        <RegisterForm role={role} />
      </div>
    </div>
  );
}