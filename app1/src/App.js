import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  const bodyProps = {
    name: "홍길동",
    location: '서울시'
  }
  return (
    <div>
      <Header />
      <Body {...bodyProps}/>
      <Footer />
    </div>
  );
}

export default App;