import Header from 'components/Header';
import style from './UserLayout.module.css';
import classNames from 'classnames/bind';
import Footer from 'components/Footer';

const cx = classNames.bind(style);

export default function UserLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header isLogin={false} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}