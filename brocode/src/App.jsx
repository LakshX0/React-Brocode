import Card from "./Card.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Student from "./Student.jsx";
// import Button from "./Button.jsx";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Card />
      <Card />
      {/* <Button /> */}
      <Student name="Lakshan" age={29} isStudent={true} />
      <Student name="Perera" age={43} isStudent={false} />
      <Food />
      <Footer />
    </>
  );
}

export default App;
