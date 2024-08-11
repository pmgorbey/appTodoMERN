import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
    // Local state for Token, UserId and isReady
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isReady, setIsReady] = useState(false);

    // Function Login
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);
        // Putting Token and UserId to LocalStorage
        localStorage.setItem('userData', JSON.stringify({
            token: jwtToken,
            userId: id
        }));
    }, []);

    // Function Logout
    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }

    // Checking if there is a Token, we can enter to App
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data && data.token) {   
            login(data.token, data.userId);
        }
        setIsReady(true);
    }, [login]);

    return {login, logout, token, userId, isReady}
}