

import { instagram, facebook, twitter, whatsapp, icon } from '../assets';
const Footer = () => {
    return (
        <footer>
            <div className="design-8">
                <div className="l-constrained">
                    <div className="text-7 group">
                        <div className="col-8">
                            <p className="title-23">About</p>
                            <p className="body-text-14">History<br />Our Team<br />Brand Guidelines<br />Terms &amp; Condition<br />Privacy Policy</p>
                        </div>
                        <div className="col-9">
                            <p className="title-24">Services</p>
                            <p className="body-text-15">How to Order<br />Our Product<br />Order Status<br />Promo<br />Payment Method</p>
                        </div>
                        <div className="col-2">
                            <p className="title-25">Title Here</p>
                            <p className="body-text-16">Lorem Ipsum available, but the majorit</p>
                            <div className="shape-holder-6">
                                <button className="shape-holder-7">
                                    <img className="icon-10" src={icon} alt="" width="33" height="32" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="social-media-5">
                        <div className="icon-11 group">
                            <img src={facebook} alt="" width="44" height="44" />
                            <img src={instagram} alt="" width="44" height="44" />
                            <img src={twitter} alt="" width="44" height="44" />
                            <img src={whatsapp} alt="" width="44" height="44" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
