import {ProductCard} from "./components/Card1/Card1";
import {Card2} from "./components/Card2/Card2";
import {Header} from "./components/header/Header";
import './App.css'
import {Card3} from "./components/card3/Card3";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div>

            <Header title='Title' price='$154654.54'/>
            <div className='app'>
                <ProductCard title='title' price='$12.33' description="test"/>
                <Card2 title="title2" price='123.23' description='test1'/>
                <Card3 title='some text' price='$152.12' description="description some item"/>
                <ProductCard title='title123' price='$13.33' description="test"/>
                <Card2 title="title3" price='125.23' description='test1'/>
                <Card3 title='some text' price='$152.12' description="description some item"/>
                <ProductCard title='title title' price='$12.33' description="test"/>
                <Card2 title="title2" price='123.23' description='test1'/>
                <Card3 title='some text' price='$152.12' description="description some item"/>
            </div>
            <Footer text = 'Some text' info = 'Some info'/>
        </div>
    );
}

export default App;
