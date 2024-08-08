declare global {
  type AuthencationState = {
    isLoggedIn: boolean;
    userData?: UserData;
  };
}

export {};
