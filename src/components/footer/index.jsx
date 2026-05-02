import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo + Description */}
          <div>

            <img
              src={logo}
              alt="BNSF Logo"
              className="w-44 mb-6"
            />

            <p className="text-sm leading-7 text-gray-300 max-w-62.5">
              BNSF Logistics Services delivers dependable logistics solutions
              that keep your freight safe, secure, and always on schedule.
            </p>

          </div>

          {/* Useful Links */}
          <div>

            <h3 className="text-xl font-medium uppercase mb-6 tracking-wide">
              Useful Links
            </h3>

            <ul className="space-y-3">

              <li className="text-sm text-gray-300 hover:text-[#0B7BEA] transition cursor-pointer">
                Home
              </li>

              <li className="text-sm text-gray-300 hover:text-[#0B7BEA] transition cursor-pointer">
                Shop
              </li>

              <li className="text-sm text-gray-300 hover:text-[#0B7BEA] transition cursor-pointer">
                About Us
              </li>

              <li className="text-sm text-gray-300 hover:text-[#0B7BEA] transition cursor-pointer">
                Contact Us
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-medium uppercase mb-6 tracking-wide">
              Our Services
            </h3>

            <ul className="space-y-3">

              <li className="text-sm text-gray-300">
                International Freight
              </li>

              <li className="text-sm text-gray-300">
                Amazon Loads
              </li>

              <li className="text-sm text-gray-300">
                Dedicated Loads
              </li>

              <li className="text-sm text-gray-300">
                Expedited Shipping
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-medium uppercase mb-6 tracking-wide">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-gray-300 leading-7">

              <p>
                545 Plaza Verde DR Suite 100,
              </p>

              <p>
                Houston, TX 77038
              </p>

              <p className="break-all">
                info@bnsflogistics.services
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-[#111111] border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center">

          <p className="text-sm text-gray-400">
            Copyright © BNSF Logistics Services 2018. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;