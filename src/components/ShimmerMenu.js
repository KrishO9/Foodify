import React from 'react'; // You can style the shimmer effect in a CSS file.

const ShimmerMenu = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-restaurant-info">
        <div className="shimmer-title"></div>
        <div className="shimmer-subtitle"></div>
        <div className="shimmer-rating"></div>
        <div className="shimmer-subtitle"></div>
        <div className="shimmer-cost"></div>
        <div className="shimmer-delivery-time"></div>
      </div>
      <div className="shimmer-menu">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="shimmer-menu-item">
            <div className="shimmer-item-name"></div>
            <div className="shimmer-item-price"></div>
            <div className="shimmer-item-img"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
