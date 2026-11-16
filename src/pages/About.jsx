// ABOUT PAGE
// Small reusable component used 3 times below, with different props each time.
// Props analogy: like a name tag template. Same layout, different name each time.
function InfoBlock({ icon, title, text }) {
  return (
    <div className="info-box">
      <h3>{icon} {title}</h3>
      <p>{text}</p>
    </div>
  );
}

function About() {
  return (
    <div className="section">
      <h1 className="page-title">About Naija Bites Kitchen</h1>

      <div className="about-layout">
        <img src="/images/about.svg" alt="Our chef cooking" className="about-img" />

        <div>
          <h2>What We Do</h2>
          <p>
            Naija Bites Kitchen is an online restaurant serving freshly cooked
            Nigerian meals, from party jollof and egusi soup to suya, snacks and
            chilled drinks. You choose, we cook, and we deliver.
          </p>

          <h2>Our Story</h2>
          <p>
            We started in 2018 as a small kitchen in Ado-Ekiti, cooking for
            friends and neighbours. People loved the food so much that the
            orders kept growing. Today we serve hundreds of happy customers
            every week and we are still cooking with the same love.
          </p>
        </div>
      </div>

      <div className="grid">
        <InfoBlock icon="🎯" title="Our Mission" text="To make delicious, affordable Nigerian food easy to order for everyone." />
        <InfoBlock icon="👀" title="Our Vision" text="To become the most loved online food kitchen in Nigeria." />
        <InfoBlock icon="⭐" title="Our Values" text="Freshness, honesty, great taste and excellent customer service." />
      </div>
    </div>
  );
}

export default About;
