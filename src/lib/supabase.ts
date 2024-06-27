import 'react-native-url-polyfill/auto';

import * as SecureStore from 'expo-secure-store';

import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = 'https://xpyhnttqqhdqmvjqksbi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweWhudHRxcWhkcW12anFrc2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDQzMDksImV4cCI6MjAzNDk4MDMwOX0.VlEhBfyTJFpAS38MRvqwNEsm28VuPj1ZsB-44koy1fs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});