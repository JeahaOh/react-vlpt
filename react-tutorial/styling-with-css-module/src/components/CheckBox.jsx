import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";
console.log(styles);

const cx = classNames.bind(styles);

const CheckBox = ({ checked, children, ...rest }) => {
  const color = "blue";
  return (
    <div className={cx("checkbox", "asdf", color, { asdf: true })}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default React.memo(CheckBox);
