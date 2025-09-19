import React, { useEffect, useState } from 'react'
import '../singlePage/singlepageLS.css'
export const Review = ({productName,totalRating,starAvg,randomVal}) => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('/data/Reviews.json')
        .then(item=>item.json())
        .then(data=>setReview(data))
    },[productName])
    // console.log(review)
    const productReviews=review.find(r=>r.productName===productName)
     console.log(productReviews)
    const feelings=['Fabric Quality','Colour','Style','Comfort','True to Specs','Stitching Quality']
  return (
    <div style={{width:"100%",maxWidth:"100%",overflow:"hidden"}}>
       <div style={{display:"flex"}}>
        <div className='Reviews-mainhead'>Ratings & Reviews</div>
        <div style={{padding:"32px 0",display:"flex",alignItems:"center",flex:"1"}}>
           <div className='sls-star-rating'>
            <div style={{display:"inline-block"}}>{starAvg}</div>
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="★" width={13} height={12} style={{margin:"2px 0 0 2px"}}/>
            </div>
            <div className='sls-rating-total' style={{fontSize:"14px"}}>{`${totalRating} ratings and ${randomVal} reviews`}</div>
        </div>
        <div style={{margin:"32px 32px 0 0"}}>
            <button className='btn-rate-product'>Rate Product</button>
        </div>
       </div>
       <div style={{width:"100%",display:"flex"}}>
        <div style={{width:"50%"}}>
            <div className='feelings-head'>What our customers felt:</div>
            <div className='feelings-item-wrap'>
                <div style={{width:"8.33%"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAk1BMVEUAAAAmpkEnpkEmpkInpkImp0L///8mpUEop0MxrVImpkEop0QmpkImpkEnpkImpUInpkInpkEop0M+vVompkInpkImpUEmpkEnpkEnpkMnp0QnpkEmpkEnp0ImpkIopkEpqEQqqUIqpUQnq0QsqkYnp0MmpUEnpkEnpUInpkEmpkEnpkIrqUUnqkgmpkInpkMmpUH8hZZRAAAAMHRSTlMA/PN+d3AB5TkKqD7w6NrCs6xLBtXRnZpjUUPfv4NqMy0qJCAXR/fJopJWVR0TiVyaW8uyAAACEElEQVQ4y4VV7ZaiMAxNoSCfgigKioIiOjrjLO//dNs0PS0i7N4fnJBcuOlNOMA7LjxIlpa1TAJ+gVlcj5t+gM3xOknzbasfwbL9T14Z9xOIyxHNtVXl8Ciyus6Kx0ElbPdNdiWT7NGYXPNgMrkayLsBpS4jC+jxwLxT6rICPlAwqa7PgXdRCBMII6yVqsEFvm8Pk9jjOxe+ET7BDE5a/Io+pzCLFJ3HGR1R+Eynd5JVTeV6lTh02jOKH0WA891S9VeEt0aaeBPhL2W3OHdhFvbg0VIw6SaG0kFGS+FhfAGOpyKRjoaIIQ2wo4bQFQ44lB2YR/scw7w3QrDD8UCC3mhDqW88obEPHBEnsBTXbyB0lsjIqp8ITzogfAvKEiySIPwU2ZqidVb8AJiWLEkM4Z8IkWik50HSlbg6pPZHielGnmt9mIrsUROIz0PeOaYC2SPpsTT8LgxpDa8VZt2l4bEUbbWz3k2MpQaF+iDm7uk5tAC5XoqSYTO8DMOSV1h9UktqXLZZswKZGuxk1gw39xWZxd3nhrfpzOJGL4z48FMI7fS+2dxTO3QHnwIn//7/cam5ZngT7Sd52BfLMNTizPnkOYyENb56RNq805pUpr/AYE1MtvVcUHC9LSPeGobgysJ45zzD8OnsYmUmhxGyRT+BRQYf8Hk0pkXchym87HxIy+0XzKJ1ggp/H1XgtO+Vv42WZ2YiIfWjAAAAAElFTkSuQmCC" alt="" width={20} height={20}/>
                </div>
                <div className='feelings-item-wrap-inner'>
                    {
                        feelings.map((item,index)=>(
                            <div key={index} className='feel-item-wrap'>{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div style={{width:"50%"}}>
            <div className='feelings-head' style={{marginBottom:"16px"}}>Images uploaded by customers:</div>
             <div className='customers-photos-wrap'>
                {
                    productReviews?.reviews?.map((item,index)=>(
                        <img key={index} src={item.photos} alt="hehe" />
                    ))
                }
             </div>
        </div>
       </div>
        <div style={{padding:"0 24px"}}>
            {
                productReviews?.reviews?.map((item,index)=>(
                    <div style={{borderBottom:"2px solid #f0f0f0"}}>
                    <div style={{padding:"24px 0"}}>
                        <div style={{margin:"0 0 16px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                            <div className='sls-star-rating cust-rate-wrap'>{item.rating}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="★" width={13} height={12} style={{margin:"2px 0 0 2px",display:"inline-block"}}/>
                            </div>
                            <div className='review-txt'>{item.review}</div>
                        </div>
                        <div className='customerName-wrap'>
                           <div className=''>
                            <div className='name-section-wrap'>{item.name}</div>
                            <div className='date-before'>11 months ago</div>
                           </div>
                           <div className='liked-count-wrap'>
                            <div className='liked-count'>
                                <svg style={{display:'inline-block'}} width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="U6FW-N"><path fill="#c2c2c2" class="kX6HBt" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg>
                                <div style={{display:"inline-block"}}>{item.liked}</div>
                            </div>
                            <div className='dislike-count' style={{marginRight:"24px"}}>
                                <svg style={{display:'inline-block'}} width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="U6FW-N aQymJL"><path fill="#c2c2c2" class="kX6HBt" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg>
                                <div style={{display:"inline-block"}}>{item.unliked}</div>
                            </div>
                            <div style={{padding:"0 8px,"}}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjE1Ij48ZyBmaWxsPSIjQzJDMkMyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIi8+PGNpcmNsZSBjeD0iMiIgY3k9IjciIHI9IjIiLz48Y2lyY2xlIGN4PSIyIiBjeT0iMTMiIHI9IjIiLz48L2c+PC9zdmc+" height={15} width={4} alt="" />
                            </div>
                           </div>
                        </div>
                        <div className='certi-wrap'>{
                              item.certified===true&&(
                                <>
                                <svg width="14" height="14" className='certified-icon' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="VjlQyz"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg>
                                <div className='certified-txt'>certified Buyer,</div>
                                </>
                              )
                            }
                            <div className='certified-txt' style={{fontWeight:"500",marginLeft:"1.5px"}}>{item.place}</div>
                        </div>
                    </div>
                    {
                            index===productReviews.reviews.length-1&&(
                                <div className='remaining'>
                                    <span style={{display:"inline-block"}}>All {randomVal-5} Reviews</span>
                                    <img style={{marginLeft:"8px",display:"inline-block"}} height={9} width={6} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPjEwMzc0NDBFLTZGNDYtNDc5MS1CRkUxLTczQzczMEI2RTU0NTwvdGl0bGU+PHBhdGggZD0iTTEuMiAxTDQgNSAxIDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSIjMDI3Q0Q1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="" />
                                </div>
                            )
                    }
                </div>
                ))
            }
        </div>
    </div>
  )
}