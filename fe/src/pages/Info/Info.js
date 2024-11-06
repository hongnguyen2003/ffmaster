import CatalogItem from 'components/CatalogItem';
import UserLayout from 'layouts/User';
import { dataBanner } from 'data/home';
import InfoItemGame from 'components/InfoItemGame';
export default function Home() {
    return (
        <UserLayout>
            <InfoItemGame />
            <CatalogItem nameCatalog='Tài khoản tương tự' sampleData={dataBanner} />
        </UserLayout>
    );
}