import React, { useState } from 'react'
import '../../styles/ProductPageNav.css'
const NavData={
electronics:[
    [
      {
        title:"Mobiles",
        subtitles:['Mi','Realme','Samsung','Infinix','Oppo','Apple','Vivo','Honor','Asus','Poco X2','realme Narzo 10','Infinix Hot 9',' IQOO 3','iPhone SE','Motorola razr','realme Narzo 10A','Motorola g8 power lite']
      }
    ],
    [
      {
        title:'Mobile Accessories',
        subtitles:['Mobile Cases','Headphones & Headsets','Power Banks','Screenguards','Memory Cards','Smart Headphones','Mobile Cables','Mobile Chargers','Mobile Holders']
      },
      {
        title:'Smart Wearables Tech',
        subtitles:['Smart Watches','Smart Glasses (VR)','Smart Bands']
      },
      {
        title:'Health Care Appliances',
        subtitles:['Bp Monitors','Wighting Scale']
      }
    ],
    [
      {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      }
    ],
    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ],   
    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ]
  ],
  tvsandappliances:[
    [
      {
        title:'Televison'
      },
      {
        title:"New Lanuches"
      },
      {
        title:"Smart & Ultra HD"
      },
      {
        title:"Top Brands",
        subtitles:["Mi","Vu","Thomson","Samsung","iFFALCON by TCL","Nokia","LG","realme","Motorola","",]
      },
      {
        title:'Shop by Screen Size',
        subtitles:["24 & below","28 - 32","39 - 43","48 - 55","60 & above",]
      },
    ],
      [
      {
        title:"Washing Machine",
        subtitles:["Fully Automatic Front Load","Semi Automatic Top Load","Fully Automatic Top Load"]
      },
      {
        title:"Air Conditioners",
        subtitles:['Inverter AC','Split ACs','Window ACs',]
      },
      {
        title:"Shop by Brand",
        subtitles:['LG','Hitachi','Carrier']
      },
      {
        title:"Refrigerators",
        subtitles:['Single Door','Double Door','Triple Door','Side by Side','convertible',]
      },
    ],
    [
      {
        title:"Kitchen Appliances",
        subtitles:['Microwave Ovens','Oven Toaster Grills (OTG)','Juicer/Mixer/Grinder','Electric Kettle','Induction Cooktops','Chimneys','Hand Blenders','Sandwich Makers','Pop Up Toasters','Electric Cookers','Wet Grinders','Food Processors','Coffee Makers','Dishwashers']
      },
      {
        title:"Healthy Living Appliances"
      }
    ],
    [
      {
        title:"Small Home Appliances",
        subtitles:['Irons','Water Purifiers','Fans','Air Coolers','Inverters','Vacuum Clearners','Sewing Machines','Voltage Stabilizers','Water Geysers','Immersion Rods']
      },
      {
        title:"Top Brands",
        subtitles:['Livpure','Philips','Bajaj','IFB','Eureka Forbes','Kaff',]
      }
    ],
    [
      {
        title:'Buying Guides',
        subtitles:['Televisions','Washing Machines','Refrigerators','Air Conditioners','Water Purifiers','Air Purifiers','Chimneys','Water Geysers']
      }
    ]
  ],
  men:[
    [
      {
        title:"Mobiles",
        subtitles:['Mi','Realme','Samsung','Infinix','Oppo','Apple','Vivo','Honor','Asus','Poco X2','realme Narzo 10','Infinix Hot 9',' IQOO 3','iPhone SE','Motorola razr','realme Narzo 10A','Motorola g8 power lite']
      }
    ],
    [
      {
        title:'Mobile Accessories',
        subtitles:['Mobile Cases','Headphones & Headsets','Power Banks','Screenguards','Memory Cards','Smart Headphones','Mobile Cables','Mobile Chargers','Mobile Holders']
      },
      {
        title:'Smart Wearables Tech',
        subtitles:['Smart Watches','Smart Glasses (VR)','Smart Bands']
      },
      {
        title:'Health Care Appliances',
        subtitles:['Bp Monitors','Wighting Scale']
      }
    ],
    [
      {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      }
    ],
    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ],    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ]
  ],
  women:[
    [
      {
        title:'Televison'
      },
      {
        title:"New Lanuches"
      },
      {
        title:"Smart & Ultra HD"
      },
      {
        title:"Top Brands",
        subtitles:["Mi","Vu","Thomson","Samsung","iFFALCON by TCL","Nokia","LG","realme","Motorola","",]
      },
      {
        title:'Shop by Screen Size',
        subtitles:["24 & below","28 - 32","39 - 43","48 - 55","60 & above",]
      },
    ],
      [
      {
        title:"Washing Machine",
        subtitles:["Fully Automatic Front Load","Semi Automatic Top Load","Fully Automatic Top Load"]
      },
      {
        title:"Air Conditioners",
        subtitles:['Inverter AC','Split ACs','Window ACs',]
      },
      {
        title:"Shop by Brand",
        subtitles:['LG','Hitachi','Carrier']
      },
      {
        title:"Refrigerators",
        subtitles:['Single Door','Double Door','Triple Door','Side by Side','convertible',]
      },
    ],
    [
      {
        title:"Kitchen Appliances",
        subtitles:['Microwave Ovens','Oven Toaster Grills (OTG)','Juicer/Mixer/Grinder','Electric Kettle','Induction Cooktops','Chimneys','Hand Blenders','Sandwich Makers','Pop Up Toasters','Electric Cookers','Wet Grinders','Food Processors','Coffee Makers','Dishwashers']
      },
      {
        title:"Healthy Living Appliances"
      }
    ],
    [
      {
        title:"Small Home Appliances",
        subtitles:['Irons','Water Purifiers','Fans','Air Coolers','Inverters','Vacuum Clearners','Sewing Machines','Voltage Stabilizers','Water Geysers','Immersion Rods']
      },
      {
        title:"Top Brands",
        subtitles:['Livpure','Philips','Bajaj','IFB','Eureka Forbes','Kaff',]
      }
    ],
    [
      {
        title:'Buying Guides',
        subtitles:['Televisions','Washing Machines','Refrigerators','Air Conditioners','Water Purifiers','Air Purifiers','Chimneys','Water Geysers']
      }
    ]
  ],
  babyandkids:[
    [
      {
        title:"Mobiles",
        subtitles:['Mi','Realme','Samsung','Infinix','Oppo','Apple','Vivo','Honor','Asus','Poco X2','realme Narzo 10','Infinix Hot 9',' IQOO 3','iPhone SE','Motorola razr','realme Narzo 10A','Motorola g8 power lite']
      }
    ],
    [
      {
        title:'Mobile Accessories',
        subtitles:['Mobile Cases','Headphones & Headsets','Power Banks','Screenguards','Memory Cards','Smart Headphones','Mobile Cables','Mobile Chargers','Mobile Holders']
      },
      {
        title:'Smart Wearables Tech',
        subtitles:['Smart Watches','Smart Glasses (VR)','Smart Bands']
      },
      {
        title:'Health Care Appliances',
        subtitles:['Bp Monitors','Wighting Scale']
      }
    ],
    [
      {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      }
    ],
    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ],    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ]
  ],
  homeandfurniture:[
    [
      {
        title:'Televison'
      },
      {
        title:"New Lanuches"
      },
      {
        title:"Smart & Ultra HD"
      },
      {
        title:"Top Brands",
        subtitles:["Mi","Vu","Thomson","Samsung","iFFALCON by TCL","Nokia","LG","realme","Motorola","",]
      },
      {
        title:'Shop by Screen Size',
        subtitles:["24 & below","28 - 32","39 - 43","48 - 55","60 & above",]
      },
    ],
      [
      {
        title:"Washing Machine",
        subtitles:["Fully Automatic Front Load","Semi Automatic Top Load","Fully Automatic Top Load"]
      },
      {
        title:"Air Conditioners",
        subtitles:['Inverter AC','Split ACs','Window ACs',]
      },
      {
        title:"Shop by Brand",
        subtitles:['LG','Hitachi','Carrier']
      },
      {
        title:"Refrigerators",
        subtitles:['Single Door','Double Door','Triple Door','Side by Side','convertible',]
      },
    ],
    [
      {
        title:"Kitchen Appliances",
        subtitles:['Microwave Ovens','Oven Toaster Grills (OTG)','Juicer/Mixer/Grinder','Electric Kettle','Induction Cooktops','Chimneys','Hand Blenders','Sandwich Makers','Pop Up Toasters','Electric Cookers','Wet Grinders','Food Processors','Coffee Makers','Dishwashers']
      },
      {
        title:"Healthy Living Appliances"
      }
    ],
    [
      {
        title:"Small Home Appliances",
        subtitles:['Irons','Water Purifiers','Fans','Air Coolers','Inverters','Vacuum Clearners','Sewing Machines','Voltage Stabilizers','Water Geysers','Immersion Rods']
      },
      {
        title:"Top Brands",
        subtitles:['Livpure','Philips','Bajaj','IFB','Eureka Forbes','Kaff',]
      }
    ],
    [
      {
        title:'Buying Guides',
        subtitles:['Televisions','Washing Machines','Refrigerators','Air Conditioners','Water Purifiers','Air Purifiers','Chimneys','Water Geysers']
      }
    ]
  ],
  sportsbooksandmore:[
    [
      {
        title:"Mobiles",
        subtitles:['Mi','Realme','Samsung','Infinix','Oppo','Apple','Vivo','Honor','Asus','Poco X2','realme Narzo 10','Infinix Hot 9',' IQOO 3','iPhone SE','Motorola razr','realme Narzo 10A','Motorola g8 power lite']
      }
    ],
    [
      {
        title:'Mobile Accessories',
        subtitles:['Mobile Cases','Headphones & Headsets','Power Banks','Screenguards','Memory Cards','Smart Headphones','Mobile Cables','Mobile Chargers','Mobile Holders']
      },
      {
        title:'Smart Wearables Tech',
        subtitles:['Smart Watches','Smart Glasses (VR)','Smart Bands']
      },
      {
        title:'Health Care Appliances',
        subtitles:['Bp Monitors','Wighting Scale']
      }
    ],
    [
      {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      }
    ],
    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ],    [
     {
        title:'Laptops',
        subtitles:['Gaming Laptops']
      },
      {
        title:"Desktop PCs"
      },
      {
        title:"Gaming & Accessories"
      },
      {
        title:'Computer Accessories',
        subtitles:['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse']
      },
      {
       title:'Computer Peripherals',
       subtitles:['Printers & Ink Cartriges','Monitors']
      },
      {
        title:'Tablets',
        subtitles:['Apple iPads']
      } 
    ]
  ]
}
const category=["Electronics","TVs & Appliances","Men","Women","Baby & Kids","Home & Furniture","Sports,Books & More"]
 const ProductPageNav = () => {
  const [hoveredIndex,setHoverIndex]=useState(null)
  console.log(hoveredIndex)
  console.log("product page Nav Rendered")
  return (
    <div className='productNav-wrap'>
        <div className='productNav-inner'>
            {
              category.map((categoryItem)=>{
                const categoryKey=categoryItem.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "")
                return (<div
                 className='product-nav-item' 
                 key={categoryKey}
                 onMouseEnter={()=>setHoverIndex(categoryKey)}
                 onMouseLeave={()=>setHoverIndex(null)}
                 >
                  <span className='product-nav-item-span'>{categoryItem}</span>
                  <svg width="4.7" height="8" className='sv' viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"></path></svg>
                </div>)
             })
            }
            <div className='product-nav-item'>
               <span className='product-nav-span-item'>Flights</span>
            </div>
            <div className='product-nav-item'>
               <span className='product-nav-span-item'>Offer Zone</span>
            </div>            
            {
        hoveredIndex&&(
          <div
           className='productDropdown-main'
           onMouseEnter={()=>setHoverIndex(hoveredIndex)}
           onMouseLeave={()=>{setHoverIndex(null)}}
           >
          {
            NavData[hoveredIndex].map((column,index)=>(
               <div
                className={`dropdownColumn ${index%2===0?'odd-column':'even-column'}`}
                key={index}
                >
                  {
                    column.map((item,index)=>(
                      <>
                       <div className='drop-product-head-wrap' key={index}>{item.title}</div>
                       {
                        item.subtitles&&(
                          item.subtitles.map((sub,subIndex)=>(
                            <span key={subIndex} className='product-subtitle'>{sub}</span>
                          ))
                        )
                       }
                       </>
                    ))
                  }
              </div>
            ))
          }
          </div>
        )
        }
        </div>
    </div>
  )
}
export default React.memo(ProductPageNav)