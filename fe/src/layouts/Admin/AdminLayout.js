import Header from 'components/LayoutComponent/Header';
import style from './AdminLayout.module.css';
import classNames from 'classnames/bind';
import LeftBar from 'components/LayoutComponent/LeftBar';
const cx = classNames.bind(style);

export default function AdminLayout({ children }) {

    return (
        <div className={cx('container')}>
            <Header/>
            <div className={cx('content')}>
                <LeftBar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}