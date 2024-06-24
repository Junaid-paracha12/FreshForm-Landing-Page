import React from "react";
import {
  Clients,
  Connected,
  Discover,
  Footer,
  FrequentlyAsk,
  Hero,
  Navbar,
  Orders,
  WhyChoose,
} from "./components";
import {
  choose,
  client,
  connected,
  discover,
  faqs,
  footer,
  hero,
  navlinks,
  order,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Clients client={client} />
      <Discover discover={discover} />
      <Orders order={order} />
      <WhyChoose choose={choose} />
      <FrequentlyAsk faqs={faqs} />
      <Connected connected={connected} />
      <Footer footer={footer} />
    </>
  );
};

export default App;
