import {useState} from 'react'
import {IoIosArrowDropleft, IoIosArrowDropright} from  'react-icons/io'
import {BiCircle} from 'react-icons/bi'
import styleSlide from '../styles/ImageSlideShow.module.css'
import Link from 'next/link'

const Slider = (props) => {
  const {img1, img2} = props.img;
  const [img, setImage] = useState(img1)

  return (
    <>
      <div className={styleSlide.slider}>
        <button onClick={() => setImage(img1) }><IoIosArrowDropleft className={styleSlide.arrow} /></button>
        <img src={img} alt="https://www.rentaporta.com" />
        <button onClick={() => setImage(img2) }><IoIosArrowDropright className={styleSlide.arrow} /></button>
    </div>
      <div className={styleSlide.indicator}>
      <BiCircle className={img == img1 ? `${styleSlide.circleIsSelected}` : `${styleSlide.circle}`} />
      <BiCircle className={img == img2 ? `${styleSlide.circleIsSelected}` : `${styleSlide.circle}`} />
    </div>
    <button className={styleSlide.quoteLink}><Link  type="button" href="/quote">Get A Quote</Link></button>
    </>
  )
}

export default Slider
