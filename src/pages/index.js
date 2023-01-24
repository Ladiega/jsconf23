import Head from 'next/head'
import Link from 'next/link'



import Image from 'next/image'
import Guillermo from  '../../public/img/GuillermoRauch2.jpg'
import Rafael from '../../public/img/RafaelGonzaga.jpg'
import Sarah from '../../public/img/SarahDrasner.jpg'
import Origami from '../../public/img/origami.svg'
import Instagram from '../../public/img/instagram.svg'
import Twitter from '../../public/img/twitter.svg'





export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
    
      </Head>
    <body> 
    
      <div className="global-container">

      <header>

			<div className="header-img-container">
				<Image
                    src={Origami}
                    alt="Origami-img" 
                    className="img-origami" />
			</div>
		</header>

      <section>
			<div className="section-one-container">
				<div className="section-one-title">
					<div className="jsconf">JSConf</div>
					<div className="colombia">Colombia</div>					
				</div>
				<div className="section-one-content">
					<div className="content-one">
						<div className="item">10</div>
						<div className="item th">TH</div>
						<div className="item">ANNIVERSARY AND FINAL COLOMBIA EDITION</div>						
					</div>
					<div className="content-two-container">
						<div className="content-two">
							NOVEMBER 10 & 11 · 2023 · MEDELLIN ·						
						</div>
						<div className="content-two-img">
              <Image
              src={Origami}
              alt="origami" />

              </div>
						
					</div>

					<div className="content-tree">
						FINAL EDITION IN COLOMBIA				
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="section-two-container">
				<div className="section-two-title">
					Speakers
				</div>
				<div className="section-two-cards-container">
					<div className="card-container">
						<div className="card-img">
                        <Image 
                            width={120}
                            src={Guillermo} 
                            alt="Rectangle" />
                            
   
						</div>
						<div className="card-name"><Link href='https://twitter.com/rauchg' target='_blank'>GUILLEMO RAUCH</Link> </div>
						
					</div>
					<div className="card-container">
						<div className="card-img">
                        <Image 
                            width={135}
                            src={Sarah} 
                            alt="Rectangle" />

						</div>
						<div className="card-name"><Link href="https://twitter.com/sarah_edo" target='_blank'>SARAH DRASNER</Link> </div>
						
					</div>
					<div className="card-container">
						<div className="card-img">
						<Image
                            width={138}
                            src={Rafael}
                             alt='Rectangle'   />
						</div>
						<div className="card-name"><Link href='https://twitter.com/_rafaelgss' target='_blank'> RAFAEL GONZAGA</Link></div>
						
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="section-tree-container">
				<div className="section-tree-title">STAY TUNED</div>
				<div className="section-tree-content-container">
					<div className="section-tree-content-one">
						SUBSCRIBE TO OUR NEWSLETTER TO KEEP UP WITH JSCONF NEWS</div>
					<div className="section-tree-form-container">
						<form action="">
						<input type="email" placeholder="YOUR EMAIL"/>
							<button type="submit">SUBSCRIBE</button>
						</form>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<div className="footer-container">
				<div className="footer-item-text">FOLLOW US</div>
				<div className="footer-item-twitter">
				<div className="img-container">	
				<Link href="https://twitter.com/jsconfco" target='_blank'>
          			<Image 
            		src={Twitter} 
            		alt="twitter"/>
				</Link>
				</div>
				</div>
				
				
			<div className="footer-item-instagram">
				<div className="img-container">
				<Link href='https://www.instagram.com/jsconfco/' target='_blank'>
		  			<Image 
            		src={Instagram}
            		alt="instagram"/>
				</Link>
				</div>
            </div>
			</div>

		</footer>
		
        </div>   
    </body> 

     
    </div>
  )
}
