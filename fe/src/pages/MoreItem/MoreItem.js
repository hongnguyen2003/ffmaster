import ListGirdItem from 'components/ListGirdItem';
import UserLayout from 'layouts/User';
import style from './MoreItem.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
const cx = classNames.bind(style);

export default function MoreItem() {
    const [data, setData] = useState([]);
    const { type } = useParams(); // Lấy giá trị của :type
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

    const dataUrl = {
        vip: 'getVipItems',
        hot: 'getHotItems',
        sale: 'getSaleItems',
        goodprice: 'getGoodPriceItems',
        new: 'getNewlyUpdatedItems',
        recommend: 'getListItems',
    };

    useEffect(() => {
        fetchData(`http://localhost:8080/api/${dataUrl[type]}?limit=${limit}&offset=${offset}`, setData, type);
    }, []);

    return (
        <UserLayout>
            <div className={cx('container')}>
                <ListGirdItem nameCatalog={`Tài khoản ${type.toUpperCase()}`} tagCatalog={type} sampleData={data} />

            </div>
        </UserLayout>
    );
}