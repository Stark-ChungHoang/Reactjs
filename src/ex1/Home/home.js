import Header from '../Header/header';
import Content from'../Contents/contents';
import Sidebar from '../Sidebar/sidebar';
import Footer from '../Footer/footer';

class Home extends Component {
    
    render() { 
        return ( 
           <div>
               <Header />
                <div className='container'>
                    <Content />
                    <Sidebar />
                </div>
               <Footer />
           </div>
         );
    };
};
 
export default Header;
