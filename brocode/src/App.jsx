import Card from "./Card.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import List from "./List.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
// import Button from "./Button.jsx";

function App() {
  return (
    <>
      <Header />
      <UserGreeting userName="Lakshan" isLoggin={false} />
      <Card />
      <Card />
      <Card />
      {/* <Button /> */}
      <Student name="Lakshan" age={29} isStudent={true} />
      <Student name="Perera" age={43} isStudent={false} />
      <Student name="Kushara" age={29} isStudent={true} />
      <Student />
      <Food />
      <List />
      <Footer />
    </>
  );
}

export default App;
