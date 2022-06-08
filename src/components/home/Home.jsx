import MainList from '../../features/main-list/MainList'
import Header from '../../components/header/Header'
import Submenu from '../../features/submenu/Submenu';

function Home() {
  return (
    <section className="App">
      <Header></Header>
      <div className='section-body'>
        <Submenu></Submenu>
        <MainList></MainList>
      </div>
    </section>
  );
}

export default Home;
