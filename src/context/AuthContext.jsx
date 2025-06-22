import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate } from 'react-router';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Konfigurasi timeout (dalam milidetik)
  const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 menit
  const SESSION_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 menit
  
  let inactivityTimer = null;
  let refreshTimer = null;

  // Reset timer inaktivitas
  const resetInactivityTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    
    if (session) {
      inactivityTimer = setTimeout(() => {
        handleAutoLogout();
      }, INACTIVITY_TIMEOUT);
    }
  };

  // Auto logout
  const handleAutoLogout = async () => {
    console.log('Auto logout due to inactivity');
    await supabase.auth.signOut();
    setSession(null);
    navigate('/login');
  };

  // Refresh session secara berkala
  const setupSessionRefresh = () => {
    if (refreshTimer) {
      clearInterval(refreshTimer);
    }

    refreshTimer = setInterval(async () => {
      if (session) {
        const { data, error } = await supabase.auth.getSession();
        if (error || !data.session) {
          console.log('Session expired, logging out');
          await supabase.auth.signOut();
          setSession(null);
          navigate('/login');
        }
      }
    }, SESSION_REFRESH_INTERVAL);
  };

  // Setup event listeners untuk mendeteksi aktivitas user
  const setupActivityListeners = () => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const resetTimer = () => {
      resetInactivityTimer();
    };

    events.forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });

    // Cleanup function
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  };

  useEffect(() => {
    // Setup initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
      
      if (session) {
        resetInactivityTimer();
        setupSessionRefresh();
      }
    };

    getInitialSession();

    // Setup auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (session) {
          resetInactivityTimer();
          setupSessionRefresh();
        } else {
          if (inactivityTimer) clearTimeout(inactivityTimer);
          if (refreshTimer) clearInterval(refreshTimer);
        }
      }
    );

    // Setup activity listeners
    const cleanupActivityListeners = setupActivityListeners();

    // Cleanup
    return () => {
      subscription.unsubscribe();
      cleanupActivityListeners();
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (refreshTimer) clearInterval(refreshTimer);
    };
  }, []);

  // Login function
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  // Logout function
  const logout = async () => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    if (refreshTimer) clearInterval(refreshTimer);
    await supabase.auth.signOut();
    setSession(null);
    navigate('/login');
  };

  // Register function
  const register = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  };

  const value = {
    session,
    loading,
    login,
    logout,
    register,
    resetInactivityTimer
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
