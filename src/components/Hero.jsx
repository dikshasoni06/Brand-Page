const Hero = () => {

    return (
        <main className="hero">
            <div className="left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>  YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>

                <div className="herobtn">
                    <button>Shop Now</button>
                    <button className="second">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="images/flipkart.png" alt="" />
                        <img src="images/amazon.png" alt="" />
                    </div>

                </div>

            </div>

            <div className="right">
                <img src="images/hero-image.png" alt="hero-image" />
            </div>
        </main>

    );

};

export default Hero;