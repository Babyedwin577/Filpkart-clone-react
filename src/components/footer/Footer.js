import React from 'react'
import './footer.css'
import { useLocation } from 'react-router-dom'
export const Footer = () => {
  const loc=useLocation()
  const chuma=loc.pathname==='/'
  console.log(chuma)
  return (
    <footer className='footer'>
      <div className='top-story'>
        <h1 className='footer-head'>Top Stories : Brand Directory</h1>
        <div className='footer-text'>
          E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. 
          <br /><br />
          What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question. 
          <h1 className='footer-head'>Filpkart Plus</h1>
          A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins &amp; non-plus members earn 2 supercoins. Early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more! 
          <br /><br />
          What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
          <br />
          An annual Zomato Gold membership
          <br />
          An annual Hotstar Premium membershipbr
          <br />
          6 months Gaana plus subscription
          <br />
          Rupees 550 instant discount on flights on ixigo 
          <br />
          Check out http://www.filpkart.com/plus/all-offers for the entire list. Terms and conditions apply 
          <br />
          <br />
          <h1 className='footer-head'>No Cost EMI </h1>
          In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
          <br /><br />
          <h1 className='footer-head'>EMI on Debit Cards</h1>
          Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply. 
          <h1 className='footer-head'>Mobile Phones</h1>
          From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - 
          <b>the Flipkart Complete Mobile Protection</b>
           covers a comprehensive range of post-purchase problems, with door-to-door services. 
           <br />
           <br />
          <h1 className='footer-head'>Electronic Devices and Accessories</h1>
          When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our 
           segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.
           <br /><br />
           Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. 
           <br />
           <br />
           Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.
           <br />
           <br />
           How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.
           <h1 className='footer-head'>Large Appliances</h1>
           Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our 
           Dependable TV and Appliance Store
            ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.
            <br />
            <br />
            For certain product categories, Customers meeting the eligibility criteria will have the option to buy larger quantities. To know more on the eligibility criteria and terms and conditions, please reach out to Purchases.oni@flipkart.com
            <br />
            <br />
            <h1 className='footer-head'>Small Home Appliances</h1>
            Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.
            <br />
            <br />
            <h1 className='footer-head'>Lifestyle</h1>
            Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.
            <h1 className='footer-head'>Home and Furniture</h1>
            Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our 
            Durability Certified Furniture Store  has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. 
            Be FurniSure , always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes. 
            , always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes. 
            <br /> <br />
            You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at Flipkart. 
            <br /><br />
            <h1 className='footer-head'>Baby and Kids</h1>
            Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson &amp; Johnson: we host only the most-trusted names in the business for your baby.
            <br /><br />
            <h1 className='footer-head'>Books, Sports and Games</h1>
            Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving. 
            <br /><br />
            <h1 className='footer-head'>Grocery/Supermart</h1>
            Launching into the grocery vertical, Flipkart introduces 
             that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 
             1 Rupee Store  presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
        </div> 
      </div>
      <div className={`background ${chuma?"":"change-ft-bg"}`}>
      <div className='header-section'>
          <div className='footer-column'>
          <h1 className='footer-head-2'>ABOUT</h1>
          <a className='foot-font' href="Contact Us">Contact Us</a>
          <a className='foot-font' href="Contact Us">About Us</a>
          <a className='foot-font' href="Contact Us">Careers</a>
          <a className='foot-font' href="Contact Us">Filpkart Stories</a>
          <a className='foot-font' href="Contact Us">Press</a>
          <a className='foot-font' href="Contact Us">Coperate Information</a>
        </div>
         <div className='footer-column'>
          <h1 className='footer-head-2'>GROUP COMPANIES</h1>
            <a className='foot-font' href="Contact Us">Myntra</a>
            <a className='foot-font' href="Contact Us">Cleartrip</a>
            <a className='foot-font' href="Contact Us">Shopsy</a>
          </div>
          <div className='footer-column'>
          <h1 className='footer-head-2'>HELP</h1>
            <a className='foot-font' href="Contact Us">Payments</a>
            <a className='foot-font' href="Contact Us">Shipping</a>
            <a className='foot-font' href="Contact Us">Cancellation & Returns</a>
            <a className='foot-font' href="www">FAO</a>
          </div>
        <div className='footer-column footer-mar'>
          <h1 className='footer-head-2'>CONSUMER POLICY</h1>
          <a className='foot-font' href="Contact Us">Cancellation & Returns</a>
          <a className='foot-font' href="Contact Us">Terms Of Use</a>
          <a className='foot-font' href="Contact Us">Security</a>
          <a className='foot-font' href="Contact Us">Sitemap</a>
          <a className='foot-font' href="Contact Us">Grivance Redressal</a>
          <a className='foot-font' href="Contact Us">ERP Compliance</a>
        </div>
        <div className='footer-column footer-mar foot-add'>
         <h1 className='footer-head-2 head-size'>Mail us:</h1>
         <div className='footer-column social-mar'>
          <a className=' foot-font foot-size' href="Contact Us">Filpkart Internet Private Limited</a>
          <a className=' foot-font foot-size' href="Contact Us">Building Alyssa, Begonia&</a>
          <a className=' foot-font foot-size' href="Contact Us">Clove Embassy Tech Village,</a>
          <a className=' foot-font foot-size' href="Contact Us">Outer Ring Road,Devarabeesanahali Village,</a>
          <a className=' foot-font foot-size' href="Contact Us">Bengalauru,580103,</a>
          <a className=' foot-font foot-size' href="Contact Us">Karnataka India</a>    
         </div>
         <h1 className='footer-head-2 head-size'>Social:</h1>
         <div className='footer-social'>
          <img className='social-img' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Facebook" width="24" height="24"></img>
          <img className='social-img' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Twitter" width="24" height="24"></img>
          <img className='social-img' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="YouTube" width="24" height="24"></img>
          <img className='social-img' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="Instagram" width="20" height="20"></img>
         </div>
        </div>
        <div className='footer-column footer-mar'>
          <h1 className='footer-head-2 head-size'>Registered Office Address:</h1>
        <div className='footer-column social-mar'>
          <a className=' foot-font foot-size' href="Contact Us">Filpkart Internet Private Limited</a>
          <a className=' foot-font foot-size' href="Contact Us">Building Alyssa, Begonia&</a>
          <a className=' foot-font foot-size' href="Contact Us">Clove Embassy Tech Village,</a>
          <a className=' foot-font foot-size' href="Contact Us">Outer Ring Road,Devarabeesanahali Village,</a>
          <a className=' foot-font foot-size' href="Contact Us">Bengalauru,580103,</a>
          <a className=' foot-font foot-size' href="Contact Us">Karnataka India</a>    
          <a className=' foot-font foot-size' href="Contact Us">CIN:U51109KA2012PTCO660107</a>    
          <a className=' foot-font foot-size' href="Contact Us">Telphone:<span className='foot-font foot-size foot-color'>044-45614700</span>/<span className='foot-font foot-size foot-color'>044-32342211</span></a>    
         </div>
        </div>
      </div>
      <div className='footer-end'>
         <div className='footer-end-inner'>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12"></img>
          <div className='footer-end-font'>Become a Seller</div>
         </div>
          <div className='footer-end-inner'>
           <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="14"/>
           <div className='footer-end-font'>Advertise</div>
         </div>
         <div className='footer-end-inner'>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" width="13" height="13"/>  
          <div className='footer-end-font'>Gift Cards</div>
         </div>
         <div className='footer-end-inner'>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help Center" width="13" height="13"/> 
          <div className='footer-end-font'>Help Center</div>
         </div>
         <div className='footer-end-font'>© 2007-2025 Flipkart.com</div>
         <div><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"/></div>
      </div>
      </div>
    </footer>
  )
}