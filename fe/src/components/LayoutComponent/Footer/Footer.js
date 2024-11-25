

import style from './Footer.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import LogoWeb from 'components/mini.components/LogoWeb';
const cx = classNames.bind(style);


export default function Footer({ }) {
    return (
        <footer className={cx('container')}>
            <div className={cx('contact')}>
                <LogoWeb big={true} customText="About Us" />
                <p>
                    <span>FireKing.VN</span> là một dự án thuộc sự quản lý của <a href='https://wtfdev.xyz/' target='_blank'>WTF Dev</a>. Đề cao tiêu chí chất lượng và tốc độ, chúng tôi luôn nỗ lực để tạo ra những trải nghiệm game tuyệt vời nhất dành cho khách hàng.
                    <br />
                    Mọi tài khoản games tại <span>FireKing</span> đều sẽ được hệ thống chuyển giao ngay lập tức tới khách hàng sau khi thanh toán nhằm đảm bảo khách hàng của chúng tôi sẽ không phải chờ đợi lâu để bắt đầu hành trình trải nghiệm game của mình.
                    <br />
                    Hotline: <a href='tel:0123.456.789'>0123.456.789</a>
                </p>
            </div>
            <div className={cx('rightInfo')}>
                <div className={cx('infoContainer')}>
                    <div className={cx('info')}>
                        <h1>Mua tài khoản</h1>
                        <ul>
                            <li><a href='/'>Hướng dẫn mua</a></li>
                            <li><a href='/'>Hình thức thanh toán</a></li>
                            <li><a href='/'>Bảo hành & Hoàn tiền</a></li>
                            <li><a href='/'>Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>
                    <div className={cx('info')}>
                        <h1>Thông tin</h1>
                        <ul>
                            <li><a href='/'>Điều khoản dịch vụ</a></li>
                            <li><a href='/'>Chính sách bảo mật</a></li>
                            <li><a href='/'>Về chúng tôi</a></li>
                            <li><a href='/'>Liên hệ</a></li>
                        </ul>
                    </div>   <div className={cx('info')}>
                        <h1>Bán tài khoản</h1>
                        <ul>
                            <li><a href='/'>Hướng dẫn bán</a></li>
                            <li><a href='/'>Đăng ký đối tác</a></li>
                            <li><a href='/'>Chương trình đối tác</a></li>
                            <li><a href='/'>Đăng nhập hệ thống</a></li>
                        </ul>
                    </div>


                </div>
                <div className={cx('grBtn')}>
                    <Button className={cx('iconHref')} icon={faFacebook} left={true} variab='text' ></Button>
                    <Button className={cx('iconHref')} icon={faInstagram} left={true} variab='text' ></Button>
                    <Button className={cx('iconHref')} icon={faTiktok} left={true} variab='text' ></Button>


                </div>
            </div >

        </footer >

    )
}

