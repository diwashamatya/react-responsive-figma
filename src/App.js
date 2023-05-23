import About from "./components/About";

import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  const data = [
    {
      id: 1,
      name: "Kathmandu Upateyka",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Kupondole, Lalitpur, PO BOX: 1232",
    },
    {
      id: 2,
      name: "Purba Nepal",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Itahari, Sunsari, PO BOX: 1232",
    },
    {
      id: 3,
      name: "Pachim Nepal",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Butwal, Rupandehi, PO BOX: 1232",
    },
  ];
  return (
    <div>
      <Homepage />
      <About></About>
      <Card items={data}></Card>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
