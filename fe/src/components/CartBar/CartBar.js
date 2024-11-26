import style from './CartBar.module.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellectCartType } from '../../redux/selectors/cartSelectors';
import { changeCartType } from '../../redux/slices/cartSlice';
import Cart from './Cart';
import Pay from './Pay';
const cx = classNames.bind(style);

export default function CartBar({ isShow, onClose, className, ...props }) {
    const type = useSelector(sellectCartType);
    const [typeForm, setCartType] = useState(type);
    useEffect(() => { setCartType(type); }, [type]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isShow) {
            document.getElementById('root').style.paddingRight = '25vw';
        } else {
            document.getElementById('root').style.paddingRight = '0';
        }
    }, [isShow]);
    const handleClose = () => {
        onClose();
    };

    const changeCartTypeRedux = (type) => {
        dispatch(changeCartType(type))
    };

    return (isShow &&
        <div className={cx("container")}>
            {(() => {
                switch (typeForm) {
                    case "CART":
                        return <Cart onClose={handleClose} setCartType={changeCartTypeRedux} />;
                    case "PAY":
                        return <Pay onClose={handleClose} setCartType={changeCartTypeRedux} />;
                    default:
                        return <Cart onClose={handleClose} setCartType={changeCartTypeRedux} />;
                }

            })()
            }
        </div>
    );
};

