// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import Header from "./component/header";
import MainContainer from "./component/mainContainer";
import AlbumContainer from "./component/AlbumContainer";
import footer from "./component/footer";
import { GlobalStyle } from "./component/global";
import Footer from "./component/footer";


function App() {
  return <>
  <GlobalStyle/>
  <Header text = "&nbsp;&nbsp;Album" />
  <MainContainer mtitle = "Album example"></MainContainer>
  <AlbumContainer></AlbumContainer>
  <Footer></Footer>
  </>;
}

export default App;