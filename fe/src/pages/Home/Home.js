import Banner from 'components/Banner';
import NewUpdateCatalog from 'components/NewUpdateCatalog';
import CatalogItem from 'components/CatalogItem';
import UserLayout from 'layouts/User';
import { sampleDataVip, sampleDataHot, sampleDataSale, dataBanner } from 'data/home';

export default function Home() {
    return (
        <UserLayout>
            <Banner data={dataBanner} />
            <NewUpdateCatalog />
            <CatalogItem nameCatalog='Tài khoản VIP' tagCatalog='tag_vip' sampleData={sampleDataVip} />
            <CatalogItem nameCatalog='Tài khoản HOT' tagCatalog='tag_hot' sampleData={sampleDataHot} />
            <CatalogItem nameCatalog='Tài khoản SALE' tagCatalog='tag_sale' sampleData={sampleDataSale} />
        </UserLayout>
    );
}