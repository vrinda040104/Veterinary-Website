
import { vector_smart_object_doubl, search_button, place_your_image_here_dou } from "../assets";

const Navbar = () => {
    return (
        <div className="group-1">
            <div className="design">
                <div className="l-constrained-5 group">
                    <img className="vector-smart-object-double-click-to-edit" src={vector_smart_object_doubl} alt="" width="212" height="56" />
                    <nav className="nav">
                        <ul className="nav-list group">
                            <li><p className="nav-item-1"><a href="#">Home</a></p></li>
                            <li><p className="nav-item-1-2"><a href="#">About</a></p></li>
                            <li><p className="nav-item-1-3"><a href="#">Service</a></p></li>
                            <li><p className="nav-item-1-4"><a href="#">Contact</a></p></li>
                        </ul>
                    </nav>
                    <div className="row group">
                        <input type="search" placeholder="Search..." style={{ width: "160px", margin: "12px", backgroundColor: "#fcc302" }} />
                        <div className="shape-holder">
                            <img className="search-button" src={search_button} alt="" width="23" height="23" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="design-2">
                <div className="l-constrained-4 group">
                    <div className="wrapper-4">
                        <div className="shape"></div>
                        <div className="shape-2"></div>
                        <div className="text">
                            <p className="title">First I wanted to be<br />a veterinarian</p>
                            <p className="body-text">Lorem Ipsum available but the majority have<br />suffered alteration in some form, by injected<br />humour randomised words.</p>
                            <div className="row-2 group">
                                <a href=""><p className="subtitle">Contact Us</p></a>
                                <a href=""><p className="subtitle-2">Our Service</p></a>
                            </div>
                        </div>
                    </div>
                    <img className="place-your-image-here-double-click-to-edit" src={place_your_image_here_dou} alt="" width="404" height="593" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
