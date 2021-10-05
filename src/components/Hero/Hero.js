import React from "react";
import "./Hero.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-dp">
        <Avatar size={150} icon={<UserOutlined />} />
      </div>
      <div className="hero-info">
        <h3>Unknown</h3>
        <div>
          <p>11111</p>
          <p>22222</p>
          <p>33333</p>
        </div>
        <h6>ajlkdjf</h6>
        <p>kajdf;lkjdlfkaj;ldf</p>
      </div>
    </div>
  );
};

export default Hero;
