import { useState } from "react";
import { initialItems } from "../lib/constant";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>

      <Footer />
    </>
  );
}

export default App;
