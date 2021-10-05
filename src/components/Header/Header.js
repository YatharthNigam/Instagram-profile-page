import React from "react";
import "./Header.css";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <div className="flex-container">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagram"
      />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
  );
};

export default Header;
