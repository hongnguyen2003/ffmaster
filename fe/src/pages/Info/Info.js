import CatalogItem from 'components/CatalogItem';
import UserLayout from 'layouts/User';
import InfoItemGame from 'components/InfoItemGame';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Info.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
export default function Info() {
    const [recommend, setRecommend] = useState([]);
    const { id } = useParams(); // Lấy giá trị của :id
    const [dataItem, setDataItem] = useState(null);
    const addInfoAccKey = (data) => {
        if (Array.isArray(data)) {
            return data.map(item => {
                const tags = ['vip', 'sale', 'hot'];
                const randomTag = tags[Math.floor(Math.random() * tags.length)];
                return { ...item, infoAcc: randomTag }
            });
        };
        return data;
    };

    const fetchData = async (url, setData) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
            });
            if (response.ok) {
                let data = await response.json();
                data = addInfoAccKey(data);
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

    useEffect(() => {
        fetchData(`http://localhost:8080/api/getItemDetail?id=${id}`, setDataItem);
        fetchData('http://localhost:8080/api/getListItems', setRecommend);
    }, [id]);
    return (
        <UserLayout>
            <div className={cx('container')}>

                <InfoItemGame dataInfo={dataItem} />
                <CatalogItem nameCatalog='Tài khoản tương tự' sampleData={recommend} tagCatalog='recommend' />
            </div>
        </UserLayout>
    );
}