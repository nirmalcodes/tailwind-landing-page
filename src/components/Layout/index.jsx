import Navbar from './Navbar';
import Footer from './Footer';
import STTButton from './STTButton';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <STTButton />
            <Footer />
        </>
    );
};

export default Layout;
