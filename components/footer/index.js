import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

import Instagram from '../../public/img/instagram.svg'
import Twitter from '../../public/img/twitter.svg'



export default function Footer(){
    return(
        <div>
            <footer>
			<div className="footer-container">
				<div className="footer-item-text">FOLLOW US</div>
				<div className="footer-item-twitter">
				<div className="img-container">	
				<Link href="https://twitter.com/jsconfco" target='_blank'>
          			<Image 
					width={20}
            		src={Twitter} 
            		alt="twitter"/>
				</Link>
				</div>
				</div>
				
				
			<div className="footer-item-instagram">
				<div className="img-container">
				<Link href='https://www.instagram.com/jsconfco/' target='_blank'>
		  			<Image 
					width={15}
            		src={Instagram}
            		alt="instagram"/>
				</Link>
				</div>
            </div>
			</div>

		</footer>
        </div>
    )
}