import ListGirdItem from 'components/ListGirdItem';
import UserLayout from 'layouts/User';
import style from './Search.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import {  useParams, useSearchParams, useLocation } from 'react-router-dom';
const cx = classNames.bind(style);

export default function Search() {
    const [data, setData] = useState([]);
    const { query } = useParams(); // Lấy giá trị của :name
    const { limit, offset } = useSearchParams(); // Lấy giá trị của ?limit

    const addInfoAccKey = (data, tag) => {
        return data.map(item => ({ ...item, infoAcc: tag }));
    };

    const fetchData = async (url, setData, tag) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
            });
            if (response.ok) {
                let data = await response.json();
                data = addInfoAccKey(data, tag);
                setData(data);
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                console.error('Network error: Failed to fetch');
            } else {
                console.error('Error fetching data:', error);
            }
        }
    };

    const url = useLocation();

    useEffect(() => {
        fetchData(`http://localhost:8080/api/search/?query=${query}&limit=${limit}&offset=${offset}`, setData, query);
    }, [url]);

    return (
        <UserLayout>
            <div className={cx('container')}>
                <ListGirdItem nameCatalog={`Kết quả tìm kiếm của ${query.toUpperCase()}`} tagCatalog={query} sampleData={data} />

            </div>
        </UserLayout>
    );
}