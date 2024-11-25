import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserInfo, login, logout } from '../redux/slices/authSlice';

const useAuthCheck = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [time, setTime] = useState(0);

    useEffect(() => {
        const handleIsAuth = async () => {
            try {
                if (time < 3) {
                    const response = await fetch('http://localhost:8080/api/getUser', {
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'include',
                    });
                    setTime(time + 1);
                    if (response.ok) {
                        const data = await response.json();
                        dispatch(changeUserInfo(data));
                        dispatch(login());
                    } else {
                        dispatch(logout());
                    }
                }
            } catch (error) {
                dispatch(logout());

                if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                    console.error('Network error: Failed to fetch');
                } else {
                    console.error('Error fetching data:', error);
                }
            }
        };

        handleIsAuth();

    }, [location, dispatch, time]);
};

export default useAuthCheck;