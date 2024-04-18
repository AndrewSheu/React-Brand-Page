const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST, WE ARE HERE TO HELP YOU WITH ANY HELP YOU
          NEED, PLEASE LET US KNOW.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn" >Category</button>
        </div>

        <div className="shopping">
          <p>Also Avaliable On</p>

          <div className="brand-icons">
            <img
              src="/images/Amazon-Logo.jpeg"
              alt="amazon-logo"
              height={"40px"}
            />
            <img src="/images/Ebay-Logo.png" alt="Ebay-logo" height={"40px"} />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/Shoes.jpeg" alt="hero-image" height={"600px"} />
      </div>
    </main>
  );
};

export default HeroSection;
