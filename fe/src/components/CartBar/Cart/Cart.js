import style from './Cart.module.css';
import classNames from 'classnames/bind';
import { faRightToBracket, faXmark, faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
import InputBar from 'components/mini.components/InputBar';
import LogoWeb from 'components/mini.components/LogoWeb';
import { useEffect, useState } from 'react';
import SellectBar from 'components/mini.components/SellectBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/selectors/cartSelectors';
import CartItem from './CartItem';
const cx = classNames.bind(style);

export default function Cart({ onClose, setCartType, className, ...props }) {
    const cartItems = useSelector(selectCartItems);
    return (
        <div>
            <h1>Giỏ hàng</h1>
            {cartItems.map(item => (
                <CartItem item={item} />
            ))}
            <Button right icon={faXmark} onClick={()=>{}} />

        </div>
    );
};

