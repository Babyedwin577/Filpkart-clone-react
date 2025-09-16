import React, { useState,useMemo } from 'react'
import { useLocation, useParams,Link} from 'react-router-dom'
import { ProductCardLargeScreen } from '../../ui/ProductCardLargeScreen'
import { Explantion } from '../../ui/Explantion'
import {UseIfMobile} from '../../../hooks/UseIfMobile'
import { ProductPageHeaderSScreen } from '../../header/ProductPageHeaderSScreen'
import { FullScreenNav } from '../../Nav/FullScreenNav'
import { ProductCardSmallerScreen } from '../../ui/ProductCardSmallerScreen'
import { SortOptionsSS } from '../../ui/SortOptionsSS'
import './productMain.css'
export const ProductMain = ({filters,setFilters,productData}) => {
    const [sortType,setSortType]=useState('popularity')
    const[filterToggle,setFilterToggle]=useState(false)
    const[sortToggle,setSortToggle]=useState(false)
    const isMobile=UseIfMobile()
    const {category,subCategory,subOptions}=useParams()
    const {pathname}=useLocation()
    const filteredurl=pathname.split("/").filter(Boolean)
    const decordurl=filteredurl.map((p)=>decodeURIComponent(p))
    const secondpart=decordurl[1]
    // console.log(secondpart)
    // console.log(isMobile)
    // console.log(productData)
    // console.log(category)
    // console.log(subCategory)
    // console.log(subOptions)

    const filteredProduct = useMemo(() => {
    return productData.filter((product) => {
      return (
        Object.entries(filters).every(([key, values]) => {
          if (Array.isArray(values) && values.length === 0) return true
          if (key === 'priceMin' || key === 'priceMax') return true

          const productKeyForFilter = {
            gender: 'gender',
            brand: 'brandName',
            color: 'color',
            fabric: 'fabric',
          }

          const productKey = product[productKeyForFilter[key]]
          return Array.isArray(values) ? values.includes(productKey) : true
        }) &&
        product.productPrice >= filters.priceMin &&
        product.productPrice <= filters.priceMax &&
        product.productCategory.toLowerCase() === category?.toLowerCase() &&
        (!subCategory || product.productRightCategory.toLowerCase() === subCategory?.toLowerCase()) &&
        (!subOptions || subOptions.toLowerCase() === 'all' || product.productLeftCategory.toLowerCase() === subOptions?.toLowerCase())
      )
    })
  }, [productData, filters, category, subCategory, subOptions])

    const sortProducts = useMemo(() => {
    return [...filteredProduct].sort((a, b) => {
      switch (sortType) {
        case 'popularity':
          return b.popularity - a.popularity
        case 'lowTohigh':
          return a.productPrice - b.productPrice
        case 'highTolow':
          return b.productPrice - a.productPrice
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        default:
          return 0
      }
    })
  }, [filteredProduct, sortType])
    const totolproduct=sortProducts.length
    console.log(sortToggle)
  return (
    isMobile?(
        <div style={{position:"relative"}}> 
        {
        filterToggle?(
         <FullScreenNav
          filters={filters}
          setFilters={setFilters}
          setFilterToggle={setFilterToggle}
          setSortToggle={setSortToggle}
         />
        ):
        (
          <div className={`op-without ${sortToggle===true?"opacity-changer":""}`}>
            <div>
            <ProductPageHeaderSScreen 
            filterToggle={filterToggle}
            setFilterToggle={setFilterToggle}
            sortToggle={sortToggle}
            setSortToggle={setSortToggle}
           />
           <div className='product-card-sswrapper'>
              {
                sortProducts.map((item,index)=>(
                    <ProductCardSmallerScreen 
                       key={index} 
                       item={item}
                    />
                ))
              }
            </div>
            </div>
          </div>
        )
      } 
        <div className={`sort-popup ${sortToggle ? "open" : ""}`}>
          <SortOptionsSS
           setSortType={setSortType}
           sortType={sortType}
           setSortToggle={setSortToggle}
          />
        </div>
      </div>
    ):(
       <div>
     <div style={{background:"#fff", width:"100%", minWidth:"682px"}}>
        <Explantion 
        secondpart={secondpart}
        sortType={sortType}
        setSortType={setSortType}
        total={totolproduct}
        />
        <div className='product-wrapping'>
        {
            sortProducts.slice(0,40).map((item,index)=>(
                <ProductCardLargeScreen
                key={index}
                item={item}
                />
            ))
        }
        </div>
     </div>
     <div className='TotalPage-wrap'>
        <span>Page 1 of 544</span>
        <div className='page-numberWrap'>
            <Link to="/" className='pages'>1</Link>
            <Link to="/" className='pages pagesnot'>2</Link>
            <Link to="/" className='pages  pagesnot'>3</Link>
            <Link to="/" className='pages  pagesnot'>4</Link>
            <Link to="/" className='pages  pagesnot'>5</Link>
            <Link to="/" className='pages  pagesnot'>6</Link>
            <Link to="/" className='pages  pagesnot'>7</Link>
            <Link to="/" className='pages  pagesnot'>8</Link>
            <Link to="/" className='pages  pagesnot'>9</Link>
            <Link to="/" className='pages  pagesnot'>10</Link>
            <div>next</div>
        </div>
     </div>
     <div className='suggestion-wrap'>
        <span>Did you find what you were looking for?</span>
        <div className='yes'>Yes</div>
        <div className='yes no'>No</div>
     </div>
     </div>
    )
    
  )
}

//    const filteredProduct=productData.filter((product)=>{
//         return(
//             product.productCategory.toLowerCase()===category?.toLowerCase()&&
//             (!subCategory||product.productRightCategory.toLowerCase()===subCategory?.toLowerCase())&&
//             (!subOptions||subOptions.toLowerCase()==='all'||product.productLeftCategory.toLowerCase()===subOptions?.toLowerCase())
//         )
//     })

// const filteredProduct = productData.filter((product) => {
//   return (
//     Object.entries(filters).every(([key, values]) => {
//       // Skip empty arrays
//       if (Array.isArray(values) && values.length === 0) return true;

//       // Skip price keys (handled separately below)
//       if (key === "priceMin" || key === "priceMax") return true;

//       const productKeyForFilter = {
//         gender: "gender",
//         brand: "brandName",
//         color: "color",
//         fabric: "fabric",
//       };

//       const productKey = product[productKeyForFilter[key]];
//       return Array.isArray(values) ? values.includes(productKey) : true;
//     }) &&
//     product.productPrice >= filters.priceMin &&
//     product.productPrice <= filters.priceMax
//   );
// });



// const filteredProduct = productData.filter((product) => {
//   return (
//     // 1. Dynamic filters (gender, brand, color, fabric, etc.)
//     Object.entries(filters).every(([key, values]) => {
//       // Handle arrays like gender/brand/color/fabric
//       if (Array.isArray(values)) {
//         if (values.length === 0) return true; // no filter applied
//         const productKeyForFilter = {
//           gender: "gender",
//           brand: "brandName",
//           color: "color",
//           fabric: "fabric",
//         };
//         const productKey = product[productKeyForFilter[key]];
//         return values.includes(productKey);
//       }

//       // Skip price keys here (handled separately)
//       if (key === "priceMin" || key === "priceMax") return true;

//       // For non-array filters, just skip
//       return true;
//     }) &&

//     // 2. Price filtering
//     product.productPrice >= filters.priceMin &&
//     product.productPrice <= filters.priceMax &&

//     // 3. Category checks
//     product.productCategory.toLowerCase() === category?.toLowerCase() &&
//     (!subCategory ||
//       product.productRightCategory.toLowerCase() === subCategory?.toLowerCase()) &&
//     (!subOptions ||
//       subOptions.toLowerCase() === "all" ||
//       product.productLeftCategory.toLowerCase() === subOptions?.toLowerCase())
//   );
// });




    // const filteredProduct=productData.filter((product)=>{
    //     return Object.entries(filters).every(([key,values])=>{
    //         if(values.length===0) return true
    //          const productKeyForFilter={
    //                gender:'gender',
    //                brand:"brandName",
    //                color:"color",
    //                fabric:"fabric"
    //          }
    //          const productKey=product[productKeyForFilter[key]]
    //          return values.includes(productKey)
    //     })&&
    //     product.productCategory.toLowerCase()===category?.toLowerCase()&&
    //     (!subCategory||product.productRightCategory.toLowerCase()===subCategory?.toLowerCase())&&
    //     (!subOptions||subOptions.toLowerCase()==='all'||product.productLeftCategory.toLowerCase()===subOptions?.toLowerCase())
    // }



    // const sortProducts=[...filteredProduct].sort((a,b)=>{
    //     switch(sortType){
    //         case "popularity":
    //             return b.popularity-a.popularity
    //         case "lowTohigh":
    //             return a.productPrice-b.productPrice
    //         case "highTolow":
    //             return b.productPrice-a.productPrice
    //         case "newest":
    //             return new Date(b.createdAt)-new Date(a.createdAt)
    //         default:
    //             return 0
    //     }
    // })


      // const filteredProduct=productData.filter((product)=>{
    //       return (
    //         Object.entries(filters).every(([key,values])=>{
    //             if (Array.isArray(values) && values.length === 0) return true;
    //             if (key==="priceMin"||key==="priceMax") return true
    //             const productKeyForFilter={
    //                 gender:"gender",
    //                 brand:"brandName",
    //                 color:"color",
    //                 fabric:"fabric"
    //             }
    //             const productKey=product[productKeyForFilter[key]]
    //             return Array.isArray(values)?values.includes(productKey):true
    //         })&&
    //          product.productPrice>=filters.priceMin&&
    //          product.productPrice<=filters.priceMax&&
    //         product.productCategory.toLowerCase() === category?.toLowerCase() &&
    //         (!subCategory ||
    //         product.productRightCategory.toLowerCase() === subCategory?.toLowerCase()) &&
    //         (!subOptions ||
    //         subOptions.toLowerCase() === "all" ||
    //         product.productLeftCategory.toLowerCase() === subOptions?.toLowerCase())
    //         )
    // })