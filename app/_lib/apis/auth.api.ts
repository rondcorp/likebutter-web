import { apiFetch } from '../apiClient';
import { ApiResponse } from '@/app/_types/api';
import { LoginResponse } from '@/stores/authStore';

export const login = (
  email: string,
  password: string
): Promise<ApiResponse<LoginResponse>> => {
  return apiFetch<LoginResponse>(
    '/auth/login',
    {
      method: 'POST',
      body: { email, password },
    },
    false
  );
};

export const signup = (signupData: any): Promise<ApiResponse<any>> => {
  return apiFetch(
    '/auth/sign-up',
    {
      method: 'POST',
      body: signupData,
    },
    false
  );
};

export const logout = (): Promise<ApiResponse<any>> => {
  return apiFetch('/auth/logout', { method: 'DELETE' }, true);
};


