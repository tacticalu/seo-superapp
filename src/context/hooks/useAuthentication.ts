// src/context/hooks/useAuthentication.ts

const useAuthentication = () => {
  // This bypasses auth so you can load dashboards
  return { isAuthenticated: true };
};

export default useAuthentication;
