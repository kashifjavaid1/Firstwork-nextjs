import './header.css'
const Header = () => {
    return (
        <>
            <nav>
                <div className="logo"> <img className='imgies' src={"/imagies/download.jpg"}
                alt="Picture of the author"
               /></div>
                <ul >
                    <li> <a href="">Home</a></li>
                    <li> <a href="">About</a></li>
                    <li> <a href="">Gallery</a></li>
                    <li> <a href="">Contact</a></li>
                    <li> <a href="">Services</a></li>
               
                </ul>
               
            </nav>
        </>
    );
}
export default Header;