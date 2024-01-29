import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card
        title="Title one"
        para="Some quick example text to build on the card title and make up the
          bulk of the card's content."
        link1="Instagram"
        link2="Facebook"
      />
      <Card
        title="Title two"
        para="Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content."
        link1="Twitter"
        link2="Snapchat"
      />
      <Card
        title="Title three"
        para="Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content."
        link1="WhatsApp"
        link2="Telegram"
      />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
