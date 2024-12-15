import style from "./CartItem.module.css";
import classNames from "classnames/bind";
import {
  faRightToBracket,
  faXmark,
  faEye,
  faEyeSlash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "components/mini.components/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/slices/cartSlice";
import formatCurrency from "utils/formatCurrency";
const cx = classNames.bind(style);

export default function CartItem({ item, setCartType, className, ...props }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <img src={"http://localhost:8080" + item.hinhanh[0]} alt={item.ten} />
      </div>
      <div className={cx("info")}>
        <div className={cx("name")}>{item.ten}</div>
        <div className={cx("price")}>
          Giá: <span>{formatCurrency(item.gia)}</span>
          <span className={cx("currency")}>₫</span>
        </div>
      </div>
      <div className={cx("soluong")}>x{item.soluong}</div>
      <Button right icon={faXmark} onClick={handleRemove} />
    </div>
  );
}
