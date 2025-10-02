// User interface
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'customer' | 'service-provider';
  isVerified: boolean;
  isActive: boolean;
  isOnline: boolean;
  createdAt: string;
}

// Register form data
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

// Login form data
export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Verify email data
export interface VerifyEmailData {
  email: string;
  code: string;
}

// API Response types
export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;
}