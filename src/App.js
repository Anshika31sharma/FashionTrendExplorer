import React, { useState, useEffect } from 'react';
import Suggestion from './Suggestion';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const MyntraClothesPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowProducts(true);
      e.preventDefault(); 
    }
  };

  const fetchProductsData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const applyFilters = () => {
    let filteredProducts = [...products];

    if (brandsFilter.length > 0) {
      filteredProducts = filteredProducts.filter((product) => brandsFilter.includes(product.brand));
    }

    if (ratingFilter.length > 0) {
      filteredProducts = filteredProducts.filter((product) => ratingFilter.includes(product.rating));
    }

    return filteredProducts;
  };

  const handleBrandFilterChange = (brand) => {
    setBrandsFilter((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((b) => b !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  };

  const handleRatingFilterChange = (rating) => {
    setRatingFilter((prevRatings) => {
      if (prevRatings.includes(rating)) {
        return prevRatings.filter((r) => r !== rating);
      } else {
        return [...prevRatings, rating];
      }
    });
  };

  const clearAllFilters = () => {
    setBrandsFilter([]);
    setRatingFilter([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };


  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <div
          className={`search-placeholder bg-white p-3 border border-1 rounded cursor-pointer position-relative ${isHovered ? 'hovered' : ''}`}
          contentEditable
          onKeyDown={handleKeyDown}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          tabIndex={0}
        >
          Search
          {isHovered && !showProducts && <Suggestion />}
        </div>
      </div>
      {showProducts && (
        <div className="row mt-3">
         <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Filters</h5>
          <div>
            <h6 className="card-subtitle mb-2 text-muted">Brands</h6>
            {['Brand A', 'Brand B', 'Brand C'].map((brand) => (
              <div key={brand} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={brandsFilter.includes(brand)}
                  onChange={() => handleBrandFilterChange(brand)}
                />
                <label className="form-check-label" htmlFor={`brand-${brand}`}>
                  {brand}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h6 className="card-subtitle mb-2 text-muted">Ratings</h6>
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`rating-${rating}`}
                  checked={ratingFilter.includes(rating)}
                  onChange={() => handleRatingFilterChange(rating)}
                />
                <label className="form-check-label" htmlFor={`rating-${rating}`}>
                  {Array.from({ length: rating }, (_, index) => (
                    <span key={index} className="bi bi-star-fill text-warning mr-1"></span>
                  ))}
                </label>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={clearAllFilters}>
            Clear All
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-9">
<div className="row">
  {applyFilters().map((product) => (
    <div
      key={product.id}
      className="col-sm-6 col-md-4 col-lg-3 product-card" 
      onMouseEnter={() => setIsHovered(product.id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className="card mb-3 w-100">
        <img src={product.image} alt={product.name} className="card-img-top product-image img-fluid" />
        <div className="card-body justify-content-between d-flex">
          <div>
            <p className="card-text">{product.brand}</p>
            <p className="card-text">{product.price}</p>
          
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className={`mr-2${wishlist.includes(product.id) ? ' text-danger' : ' text-muted'}`}
              onClick={() => toggleWishlist(product.id)}
            />
            {isHovered === product.id && (
              <button className="btn btn-primary mt-2">View Product</button>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
)}
    </div>
  );
};
export default MyntraClothesPage;
