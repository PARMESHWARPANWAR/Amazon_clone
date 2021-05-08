import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a" alt=""/> 
                


                <div className="home__row">
                    <Product id= "12345243" title="The lean startup" price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}/>
                    <Product id="37895723" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk,5 Litre Glass Bowl" 
                    price={239.0}
                    rating={4}
                    image="https://media.product.which.co.uk/prod/images/600_400/gm-312b7fb5-f193-4afd-a734-85b9ff587d35-kitchen-gadgets.jpg"/>
                </div>
                <div className="home__row">
                    <Product id="40886042" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                    price={199.99}
                    rating={3}
                    image="https://www.topmarket.co.il/images/detailed/95/62373366_7199259285.jpg"/>
                    <Product id="324235325" title="Amazon Echo (3rd generation Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81XObfeIwoL._AC_SL1500_.jpg"/>
                    <Product id="473529852" title="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://ae01.alicdn.com/kf/Hdf337939ae2f49c0aa811f19ba8c4ca4W.jpg"/>
                </div>
                <div className="home__row">
                    <Product id="98320085430"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120x1440"
                    price={1094.98}
                    rating={4}
                    image="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/l/c/lc49rg90ssexxy-samsung-qled-gaming-monitor.jpg"/>
                </div>

            </div>    
        </div>
    )
}

export default Home
