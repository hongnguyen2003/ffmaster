import Banner from 'components/Banner';
import NewUpdateCatalog from 'components/NewUpdateCatalog';
import CatalogItem from 'components/CatalogItem';
import UserLayout from 'layouts/User';
import LuckySpin from 'components/LuckySpin';
import { sampleDataVip, sampleDataHot, sampleDataSale, sampleDataBanner } from 'data/home';

export default function Home() {
    return (
        <UserLayout>
         

            <Banner data={sampleDataBanner} />
            <NewUpdateCatalog />
            <CatalogItem nameCatalog='Tài khoản VIP' tagCatalog='tag_vip' sampleData={sampleDataVip} />
            <CatalogItem nameCatalog='Tài khoản HOT' tagCatalog='tag_hot' sampleData={sampleDataHot} />
            <CatalogItem nameCatalog='Tài khoản SALE' tagCatalog='tag_sale' sampleData={sampleDataSale} />
        </UserLayout>
    );
}