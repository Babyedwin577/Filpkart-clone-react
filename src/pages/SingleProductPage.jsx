import React from 'react'
import ProductPageHeader from '../components/header/ProductPageHeader'
import ProductPageNav from '../components/Nav/ProductPageNav'
import { SingleProductPageLS } from '../components/singlePage/SingleProductPageLS'
import { Footer } from '../components/footer/Footer'
import '../styles/singlepage.css'
import { useLocation,useParams } from 'react-router-dom'
export const SingleProductPage = () => {
   const {productName}=useParams()
   const location=useLocation()
   const product=location.state?.product
   if(!product){
      return <p style={{fontSize:"25px",fontWeight:"900",color:"red",textAlign:"center"}} className='fade-in-up'>Invalid Path Name check the Name {productName}</p>
   }
  return (
    <>
    <div className='mobile-productPage'>
     
    </div>
    <div className='laptop-productPage'>
      <ProductPageHeader/>
      <div style={{paddingTop:"56px"}}>
        <ProductPageNav/>
      </div>
      <SingleProductPageLS
       product={product}
      />
      <Footer/>
    </div>
    </>
  )
}





// import { useLocation, useParams } from 'react-router-dom';
// import '../styles/singlepage.css'
// export const ProductDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const product = location.state?.product;

//   if (!product) {
//     return (
//       <div className="error-container">
//         <div className="error-content">
//           <div className="error-icon">
//             <span>📦</span>
//           </div>
//           <h2>Product not found</h2>
//           <p>No product found for ID: {id}</p>
//         </div>
//         <style jsx>{`
//           .error-container {
//             min-height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
//           }
          
//           .error-content {
//             text-align: center;
//             padding: 2rem;
//             background: white;
//             border-radius: 1.5rem;
//             box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//             animation: bounceIn 0.6s ease-out;
//           }
          
//           .error-icon {
//             width: 6rem;
//             height: 6rem;
//             margin: 0 auto 1.5rem;
//             background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
//           }
          
//           .error-icon span {
//             font-size: 2.5rem;
//           }
          
//           .error-content h2 {
//             font-size: 1.5rem;
//             font-weight: 700;
//             color: #1f2937;
//             margin-bottom: 0.5rem;
//           }
          
//           .error-content p {
//             color: #6b7280;
//           }
          
//           @keyframes bounceIn {
//             0% { transform: scale(0.3); opacity: 0; }
//             50% { transform: scale(1.05); }
//             70% { transform: scale(0.9); }
//             100% { transform: scale(1); opacity: 1; }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   const discountPercentage = Math.round(((product.productRealPrice - product.productPrice) / product.productRealPrice) * 100);

//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="product-card">
//           <div className="product-layout">
//             {/* Image Section */}
//             <div className="image-section">
//               <div className="image-container fade-in-up-delay-5">
//                 <img 
//                   src={product.productImage} 
//                   alt={product.productName}
//                   className="product-image"
//                 />
                
//                 {/* Action Buttons */}
//                 <div className="action-buttons">
//                   <button className="action-btn heart-btn">
//                     <span>♥</span>
//                   </button>
//                   <button className="action-btn share-btn">
//                     <span>📤</span>
//                   </button>
//                 </div>
                
//                 {/* Discount Badge */}
//                 {discountPercentage > 0 && (
//                   <div className="discount-badge">
//                     <div className="discount-text">
//                       -{discountPercentage}% OFF
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Floating Elements */}
//                 <div className="floating-elements">
//                   <div className="float-1"></div>
//                   <div className="float-2"></div>
//                   <div className="float-3"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Details Section */}
//             <div className="details-section">
//               <div className="content">
//                 {/* Brand and Title */}
//                 <div className="brand-title fade-in-up">
//                   <p className="brand-name">
//                     {product.brandName}
//                   </p>
//                   <h1 className="product-title">
//                     {product.productName}
//                   </h1>
//                 </div>

//                 {/* Rating */}
//                 <div className="rating fade-in-up-delay-1">
//                   <div className="stars">
//                     ★★★★★
//                   </div>
//                   <span className="rating-text">(4.8) • 256 reviews</span>
//                 </div>

//                 {/* Price Section */}
//                 <div className="price-section fade-in-up-delay-2">
//                   <div className="price-container">
//                     <span className="current-price">
//                       ₹{product.productPrice.toLocaleString()}
//                     </span>
//                     {product.productRealPrice !== product.productPrice && (
//                       <span className="original-price">
//                         ₹{product.productRealPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>
//                   {discountPercentage > 0 && (
//                     <div className="savings-highlight">
//                       <p className="savings-text">
//                         💰 Save ₹{(product.productRealPrice - product.productPrice).toLocaleString()} ({discountPercentage}% off)
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Size Selection */}
//                 {product.sizeDetails && (
//                   <div className="size-section fade-in-up-delay-3">
//                     <h3 className="size-title">Available Sizes</h3>
//                     <div className="size-buttons">
//                       {product.sizeDetails.split(',').map((size, index) => (
//                         <button key={index} className="size-btn" style={{animationDelay: `${0.1 * index}s`}}>
//                           {size.trim()}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="cart-section fade-in-up-delay-4">
//                   <button className="cart-btn">
//                     <span className="cart-icon">🛒</span>
//                     Add to Cart
//                   </button>
//                   <button className="buy-btn">
//                     ⚡ Buy Now
//                   </button>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="info-section fade-in-up-delay-5">
//                   <div className="info-grid">
//                     <div className="info-card delivery-card">
//                       <p className="info-title">
//                         🚚 Free Delivery
//                       </p>
//                       <p className="info-text">On orders above ₹500</p>
//                     </div>
//                     <div className="info-card returns-card">
//                       <p className="info-title">
//                         🔄 Easy Returns
//                       </p>
//                       <p className="info-text">30-day return policy</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }
        
//         .container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #fae8ff 100%);
//           padding: 2rem 0;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//         }
        
//         .wrapper {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }
        
//         @media (min-width: 640px) {
//           .wrapper {
//             padding: 0 1.5rem;
//           }
//         }
        
//         @media (min-width: 1024px) {
//           .wrapper {
//             padding: 0 2rem;
//           }
//         }
        
//         .product-card {
//           background: white;
//           border-radius: 2rem;
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//           overflow: hidden;
//           animation: slideUp 0.8s ease-out;
//         }
        
//         .product-layout {
//           display: block;
//         }
        
//         @media (min-width: 1024px) {
//           .product-layout {
//             display: flex;
//           }
//         }
        
//         .image-section {
//           width: 100%;
//           position: relative;
//         }
        
//         @media (min-width: 1024px) {
//           .image-section {
//             width: 50%;
//           }
//         }
        
//         .image-container {
//           aspect-ratio: 1;
//           position: relative;
//           overflow: hidden;
//           background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
//         }
        
//         .product-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .image-container:hover .product-image {
//           transform: scale(1.1) rotate(1deg);
//         }
        
//         .action-buttons {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           display: flex;
//           gap: 0.75rem;
//           opacity: 0;
//           transform: translateY(0.5rem);
//           transition: all 0.3s ease;
//         }
        
//         .image-container:hover .action-buttons {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .action-btn {
//           width: 3rem;
//           height: 3rem;
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(10px);
//           border: none;
//           border-radius: 50%;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
        
//         .action-btn:hover {
//           transform: scale(1.1);
//         }
        
//         .heart-btn:hover {
//           background: #fef2f2;
//           transform: scale(1.1) rotate(-12deg);
//         }
        
//         .share-btn:hover {
//           background: #eff6ff;
//           transform: scale(1.1) rotate(12deg);
//         }
        
//         .action-btn span {
//           font-size: 1.25rem;
//         }
        
//         .discount-badge {
//           position: absolute;
//           top: 1rem;
//           left: 1rem;
//           animation: pulseScale 2s ease-in-out infinite;
//         }
        
//         .discount-text {
//           background: linear-gradient(135deg, #ef4444 0%, #ec4899 100%);
//           color: white;
//           padding: 0.5rem 1rem;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           font-weight: 700;
//           box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.4);
//           transform: rotate(3deg);
//           transition: transform 0.3s ease;
//         }
    
//         .discount-badge:hover .discount-text {
//           transform: rotate(0deg);
//         }
        
//         .floating-elements {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//         }
        
//         .float-1, .float-2, .float-3 {
//           position: absolute;
//           border-radius: 50%;
//         }
        
//         .float-1 {
//           top: 25%;
//           left: 25%;
//           width: 0.5rem;
//           height: 0.5rem;
//           background: #60a5fa;
//           animation: float1 3s ease-in-out infinite;
//         }
        
//         .float-2 {
//           top: 33.333333%;
//           right: 25%;
//           width: 0.25rem;
//           height: 0.25rem;
//           background: #a78bfa;
//           animation: float2 4s ease-in-out infinite;
//         }
        
//         .float-3 {
//           bottom: 33.333333%;
//           left: 33.333333%;
//           width: 0.375rem;
//           height: 0.375rem;
//           background: #f472b6;
//           animation: float3 5s ease-in-out infinite;
//         }
        
//         .details-section {
//           width: 100%;
//           padding: 2rem;
//         }
        
//         @media (min-width: 1024px) {
//           .details-section {
//             width: 50%;
//             padding: 3rem;
//           }
//         }
        
//         .content {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//         }
        
//         .brand-title .brand-name {
//           font-size: 0.875rem;
//           font-weight: 700;
//           background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
//           background-size: 200% 100%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-transform: uppercase;
//           letter-spacing: 0.1em;
//           margin-bottom: 0.75rem;
//           animation: shimmer 2s linear infinite;
//         }
        
//         .product-title {
//           font-size: 2.5rem;
//           font-weight: 900;
//           color: #111827;
//           line-height: 1.2;
//           margin-bottom: 1rem;
//           animation: textFocus 1s ease-out;
//         }
        
//         @media (min-width: 1024px) {
//           .product-title {
//             font-size: 3rem;
//           }
//         }
        
//         .rating {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }
        
//         .stars {
//           color: #fbbf24;
//           font-size: 1.25rem;
//         }
        
//         .rating-text {
//           color: #6b7280;
//           font-weight: 500;
//         }
        
//         .price-section {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }
        
//         .price-container {
//           display: flex;
//           align-items: baseline;
//           gap: 1rem;
//           flex-wrap: wrap;
//         }
        
//         .current-price {
//           font-size: 2.5rem;
//           font-weight: 900;
//           background: linear-gradient(135deg, #059669 0%, #3b82f6 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: pricePulse 2s ease-in-out infinite;
//         }
        
//         @media (min-width: 1024px) {
//           .current-price {
//             font-size: 3rem;
//           }
//         }
        
//         .original-price {
//           font-size: 1.5rem;
//           color: #9ca3af;
//           text-decoration: line-through;
//           font-weight: 600;
//         }
        
//         .savings-highlight {
//           display: inline-block;
//         }
        
//         .savings-text {
//           color: #059669;
//           font-weight: 700;
//           font-size: 1.125rem;
//           background: #dcfce7;
//           padding: 0.5rem 1rem;
//           border-radius: 9999px;
//           animation: savingsHighlight 2s ease-in-out infinite;
//         }
        
//         .size-section {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
        
//         .size-title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #111827;
//         }
        
//         .size-buttons {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.75rem;
//         }
        
//         .size-btn {
//           padding: 0.75rem 1.5rem;
//           border: 2px solid #d1d5db;
//           background: white;
//           border-radius: 0.75rem;
//           font-size: 1rem;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           animation: sizeButton 0.5s ease-out forwards;
//           opacity: 0;
//         }
        
//         .size-btn:hover {
//           border-color: #3b82f6;
//           background: #3b82f6;
//           color: white;
//           transform: scale(1.05) translateY(-2px);
//         }
        
//         .size-btn:active {
//           transform: scale(0.95);
//         }
        
//         .cart-section {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//           padding-top: 2rem;
//         }
        
//         .cart-btn {
//           width: 100%;
//           background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
//           color: white;
//           padding: 1.25rem;
//           border-radius: 1rem;
//           font-weight: 700;
//           font-size: 1.25rem;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.75rem;
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//           animation: buttonGlow 2s ease-in-out infinite;
//         }
        
//         .cart-btn:hover {
//           background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
//           transform: translateY(-8px) scale(1.05);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//         }
        
//         .cart-btn:active {
//           transform: scale(0.95);
//         }
        
//         .cart-icon {
//           font-size: 1.5rem;
//         }
        
//         .buy-btn {
//           width: 100%;
//           background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
//           color: white;
//           padding: 1.25rem;
//           border-radius: 1rem;
//           font-weight: 700;
//           font-size: 1.25rem;
//           border: none;
//           cursor: pointer;
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }
        
//         .buy-btn:hover {
//           background: linear-gradient(135deg, #111827 0%, #000000 100%);
//           transform: translateY(-8px) scale(1.05);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//         }
        
//         .buy-btn:active {
//           transform: scale(0.95);
//         }
        
//         .info-section {
//           padding-top: 2rem;
//           border-top: 2px solid #e5e7eb;
//         }
        
//         .info-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1.5rem;
//         }
        
//         @media (min-width: 640px) {
//           .info-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
        
//         .info-card {
//           padding: 1.5rem;
//           border-radius: 1rem;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }
        
//         .info-card:hover {
//           transform: scale(1.05);
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//         }
        
//         .delivery-card {
//           background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
//         }
        
//         .returns-card {
//           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
//         }
        
//         .info-title {
//           font-weight: 700;
//           color: #111827;
//           font-size: 1.125rem;
//           margin-bottom: 0.5rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
        
//         .info-text {
//           color: #374151;
//           font-weight: 500;
//         }
        
//         /* Animations */
//         .fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//           opacity: 0;
//         }
        
//         .fade-in-up-delay-1 {
//           animation: fadeInUp 0.6s ease-out forwards;
//           animation-delay: 0.1s;
//           opacity: 0;
//         }
        
//         .fade-in-up-delay-2 {
//           animation: fadeInUp 0.6s ease-out forwards;
//           animation-delay: 0.2s;
//           opacity: 0;
//         }
        
//         .fade-in-up-delay-3 {
//           animation: fadeInUp 0.6s ease-out forwards;
//           animation-delay: 0.3s;
//           opacity: 0;
//         }
        
//         .fade-in-up-delay-4 {
//           animation: fadeInUp 0.6s ease-out forwards;
//           animation-delay: 0.4s;
//           opacity: 0;
//         }
        
//         .fade-in-up-delay-5 {
//           animation: fadeInUp 0.6s ease-out forwards;
//           animation-delay: 1s;
//           opacity: 0;
//         }
        
//         @keyframes fadeInUp {
//           from { transform: translateY(500px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
        
//         @keyframes pulseScale {
//           0%, 100% { transform: scale(1) rotate(3deg); }
//           50% { transform: scale(1.1) rotate(0deg); }
//         }
        
//         @keyframes float1 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(120deg); }
//           66% { transform: translateY(5px) rotate(240deg); }
//         }
        
//         @keyframes float2 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(180deg); }
//         }
        
//         @keyframes float3 {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           25% { transform: translateY(-8px) rotate(90deg); }
//           75% { transform: translateY(8px) rotate(270deg); }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
        
//         @keyframes textFocus {
//           0% { filter: blur(5px); transform: scale(0.9); }
//           100% { filter: blur(0px); transform: scale(1); }
//         }
        
//         @keyframes pricePulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
        
//         @keyframes savingsHighlight {
//           0%, 100% { 
//             transform: scale(1); 
//             box-shadow: 0 0 0 rgba(34, 197, 94, 0); 
//           }
//           50% { 
//             transform: scale(1.05); 
//             box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); 
//           }
//         }
        
//         @keyframes sizeButton {
//           from { transform: translateX(-20px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
        
//         @keyframes buttonGlow {
//           0%, 100% { 
//             box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); 
//           }
//           50% { 
//             box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.3); 
//           }
//         }
//       `}</style>
//     </div>
//   );
// };
