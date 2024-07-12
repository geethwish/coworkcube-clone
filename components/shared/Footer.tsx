import Facebook from "../svg/facebook";
import Instagram from "../svg/instagram";
import Youtube from "../svg/youtube";

const Footer = () => {
    return (
        <footer className="bg-[#0d2c4a] text-white p-4">
            <div className="container">
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-4 mt-5 mb-5">
                    <div>
                        <h1 className="text-white text-3xl mb-5 font-semibold">
                            Coworking Cube
                        </h1>
                        <p className="mt-5 mb-5 text-white text-md">
                            We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings
                        </p>

                        <div className="text-white text-2xl flex gap-8 items-center">
                            <Instagram />  <Youtube /> <Facebook />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-white text-3xl mb-5 font-semibold">
                            Contact Us
                        </h1>
                        <p className="text-white text-sm font-normal mt-5">
                            E. Hello@coworkingcube.com
                        </p>
                        <p className="text-white text-sm font-normal mt-5">
                            A. Jalan Jayakatwang No.301 Ngasem, Kediri
                        </p>
                        <p className="text-white text-sm font-normal mt-5">
                            P. (+62) 82334670000
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;