import React from "react";
import "./HomePage.css";
import Product from "../products/Product";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://tbcdn.talentbrew.com/company/3413/v3_0/img/amazondelivers-social-share.jpg"
          alt="amazon splash"
        />
        <div className="home__row">
          <Product
            title="G Shock Gold"
            price={109.99}
            image="https://2.bp.blogspot.com/-7oDCwTF13s4/U0wl-MiR1ZI/AAAAAAAAAiQ/qHEVwThkCaI/s1600/%2310+Men's+Black+G-Shock+Digital+Anti-Magnetic+Gold+Tone+Analog+[Watch]+Casio+B0058W9128.jpg"
            rating={5}
          />
          <Product
            title="ASUS UX534FTC-AS77 ZenBook 15 Laptop, 15.6” UHD 4K NanoEdge Display, Intel Core i7-10510U, GeForce GTX 1650, 16GB, 512GB PCIe SSD, ScreenPad 2.0, Amazon Alexa Compatible, Windows 10, Icicle Silver"
            price={1199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81W7WT%2BOmsL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="WALI Premium Triple LCD Monitor Desk Mount Fully Adjustable Gas Spring Stand for Display up to 27 inch, 15.4lbs Capacity (GSDM003), Black
            "
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/616O2NOnXnL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Ray-Ban Rb3025 Classic Polarized Aviator Sunglasses"
            price={183.99}
            image="https://images-na.ssl-images-amazon.com/images/I/513BxvmrjBL._AC_UX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Ray-Ban Rb3025 Classic Polarized Aviator Sunglasses"
            price={183.99}
            image="https://images-na.ssl-images-amazon.com/images/I/513BxvmrjBL._AC_UX679_.jpg"
            rating={4}
          />
          <Product
            title=" '24' Curved 75Hz LED Monitor Full HD 1080P HDMI VGA Ports with Speakers, VESA Wall Mount Ready (HDMI Cable Included)"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71oVNu13-XL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
