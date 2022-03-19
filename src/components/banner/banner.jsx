import './banner.css'


function Banner({bannerConf}){
   return (
       <div className='banner'>
           <img className='banner-img' src={bannerConf.imgPath} alt="" />
           <div className='banner-text'>{(bannerConf.text).toString().replace(/(.)(?=(.{3})+$)/g,"$1,")} <span className='banner-currency'>{bannerConf.currency}</span></div>
       </div>
   )
} 

export default Banner