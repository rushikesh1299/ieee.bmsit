import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Tiles from './Tiles';
import Footer from './Footer';
import 'tachyons';


class App extends React.Component{
    render(){
        return(<div>
             <Navbar />
             <Header />
            {/*<Tiles />
            <Footer /> */}
        </div>);
    }
}

export default App;
