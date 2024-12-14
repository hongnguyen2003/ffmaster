import Banner from 'components/Banner';
import NewUpdateCatalog from 'components/NewUpdateCatalog';
import CatalogItem from 'components/CatalogItem';
import UserLayout from 'layouts/User';
import style from './Home.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { sampleDataBanner } from 'data/home';
import InfoWebCatalog from 'components/InfoWebCatalog';
const cx = classNames.bind(style);

export default function Home() {
    const [dataVip, setDataVip] = useState([]);
    const [dataHot, setDataHot] = useState([]);
    const [dataSale, setDataSale] = useState([]);
    const [dataGoodPrice, setDataGoodPrice] = useState([]);
    const [dataNewlyUpdated, setDataNewlyUpdated] = useState([]);

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

    useEffect(() => {
        fetchData('http://localhost:8080/api/getVipItems', setDataVip, 'vip');
        fetchData('http://localhost:8080/api/getHotItems', setDataHot, 'hot');
        fetchData('http://localhost:8080/api/getSaleItems', setDataSale, 'sale');
        fetchData('http://localhost:8080/api/getGoodPriceItems', setDataGoodPrice, 'sale');
        fetchData('http://localhost:8080/api/getNewlyUpdatedItems', setDataNewlyUpdated, 'new');
    }, []);

    return (
        <UserLayout>
            <div className={cx('container')}>
                <Banner data={sampleDataBanner} />
                <div className={cx('mini-container')}>
                    <NewUpdateCatalog sampleData={dataNewlyUpdated} tagCatalog='new' />
                    <InfoWebCatalog />
                    <NewUpdateCatalog type sampleData={dataGoodPrice} tagCatalog='goodprice' />
                    <CatalogItem nameCatalog='Tài khoản VIP' tagCatalog='vip' sampleData={dataVip} id="moreinfo" />
                    <CatalogItem nameCatalog='Tài khoản HOT' tagCatalog='hot' sampleData={dataHot} />
                    <CatalogItem nameCatalog='Tài khoản SALE' tagCatalog='sale' sampleData={dataSale} />

                </div>
            </div>

        </UserLayout>
    );
}