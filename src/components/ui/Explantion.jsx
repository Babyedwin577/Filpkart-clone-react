import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/explanation.css'
export const Explantion = ({secondpart,sortType,setSortType}) => {
  return (
    <div>
        <div className='explanation-wrap'>
            <div className='path'>
                <div className='pathlist-wrap'>
                    <Link to="/" className="homenav">Home</Link>
                    <svg width="20" height="7" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                </div>
                <div className='pathlist-wrap'>
                    <div className='homenav'>Clothing and Accessories</div>
                    <svg width="20" height="7" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                </div>
                <div className='pathlist-wrap'>
                    <div className='homenav'>{secondpart}</div>
                </div>
            </div>
            <div className='explain-realwrap'>
                <p>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest <b>topwear</b>  from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy <a href="https://www.flipkart.com/womens-tops/pr?sid=clo%2Cash%2Cohw%2C36j">tops</a> with jeggings and sandals to nail the perfect casual look. Try pairing <a href="https://www.flipkart.com/womens-tops/pr?sid=clo%2Cash%2Cohw%2C36j">crop tops</a> with <a href="https://www.flipkart.com/womens-tops/pr?sid=clo%2Cash%2Cohw%2C36j">denim shorts</a>  for the perfect summer look. Also, check out trendy topwear for men online that are sold by brands, such as Allen Solly, Wildcraft, FastColors, Smartees, Adidas, and more. Men can pair polo <a href="https://www.flipkart.com/womens-tops/pr?sid=clo%2Cash%2Cohw%2C36j">shirts</a> & <a href="https://www.flipkart.com/womens-tops/pr?sid=clo%2Cash%2Cohw%2C36j">chinos</a>  and loafers for the perfect brunch or picnic look. To nail the perfect office look, men can pair formal shirts with trousers and formal shoes to look dapper and stylish. You can also buy trendy and fashionable topwear for kids from your favorite online shopping site. From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online for your little ones. The information you are reading has been last updated on 08-Sep-25.</p>
            </div>
            <h1 className='topwear-head'>Topwear</h1>
            <p className='noofproducts'>(Showing 1 – 40 products of 14,507 products)</p>
            <div className='sortoptions'>
                <span className="sort-head">Sort By</span>
                <div
                 className={`sort-items ${sortType==="popularity"?'sortingActive':""}`}
                 onClick={()=>{
                    setSortType("popularity")
                }}>Popularity</div>
                <div
                 className={`sort-items ${sortType==="lowTohigh"?'sortingActive':""}`}
                 onClick={()=>{
                    setSortType("lowTohigh")
                }}>Price -- Low to High</div>
                <div
                 className={`sort-items ${sortType==="highTolow"?'sortingActive':""}`}
                 onClick={()=>{
                    setSortType("highTolow")
                }}>Price -- High to Low</div>
                <div
                 className={`sort-items ${sortType==="newest"?'sortingActive':""}`}
                 onClick={()=>{
                    setSortType("newest")
                }}>Newest First</div>
            </div>
        </div>
    </div>
  )
}