'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';

import { registerSchema, RegisterFormData } from '../../utils/validation';
import Alert from '../ui/Alert'
import Input from '../ui/Input';
import Button from '../ui/Button';
interface RegisterFormProps {
  role: 'customer' | 'service-provider';
}

export default function RegisterForm({ role }: RegisterFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      setError('');

      // TODO: Replace with actual API call
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, role }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      // Store email in localStorage for verification page
      localStorage.setItem('verificationEmail', data.email);

      // Navigate to verify email page
      router.push('/auth/verify-email');
   } catch (err) {
  const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
  setError(errorMessage);
} finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && <Alert type="error" message={error} />}

      {/* First Name & Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          placeholder="Monij"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Last name"
          placeholder="Last name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      {/* Email */}
      <Input
        label="Email address"
        type="email"
        placeholder="Email address"
        {...register('email')}
        error={errors.email?.message}
      />

      {/* Password */}
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        {...register('password')}
        error={errors.password?.message}
        icon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        }
      />

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        icon={
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="focus:outline-none"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        }
      />

      {/* Terms Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="agreeToTerms"
          {...register('agreeToTerms')}
          className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
        />
        <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
          I agree to Tech Takup{' '}
          <a href="#" className="text-red-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-red-600 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="text-sm text-red-500">{errors.agreeToTerms.message}</p>
      )}

      {/* Submit Button */}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600">
        Don ot have an account?{' '}
        <button
          type="button"
          onClick={() => router.push('/auth/login')}
          className="text-red-600 font-medium hover:underline"
        >
          Login
        </button>
      </p>
    </form>
  );
}