import UserLayout from 'layouts/User';
import InfomationForm from 'components/AuthForm/InfomationForm';
export default function Home() {
    return (
        <UserLayout>
            <InfomationForm />
        </UserLayout>
    );
}