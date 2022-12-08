export const TOKEN_KEY = "@token";
export const ROLE = "@role";
export const USER_ID = "@user_id" 

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getCurrentUserId = () => localStorage.getItem(USER_ID);

export const login = (token, id) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_ID, id);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_ID);
};