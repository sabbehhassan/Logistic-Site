import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import contactHero from "../../assets/images/contact-hero.jpg";

const Contact = () => {
  return (
    <section className="bg-[#f3f4f6]">

      {/* Hero Section */}
      <div className="relative h-[420px]">

        <img
          src={contactHero}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Contact Us
            </h1>

            <p className="text-white text-base md:text-lg mt-4">
              Get in touch with our logistics specialists
            </p>
          </div>

        </div>

      </div>

      {/* Contact Area */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold text-black">
              Let’s Talk Logistics
            </h2>

            <div className="w-[120px] h-[3px] bg-[#0B7BEA] mt-4"></div>

            <p className="text-gray-700 text-sm md:text-base leading-8 mt-6 max-w-lg">
              Reach out to our team for freight inquiries, partnerships,
              shipment details, or logistics consultation.
            </p>

            {/* Info Cards */}
            <div className="space-y-5 mt-10">

              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+1 (832) 000-0000",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "info@bnsflogistics.services",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "Houston, Texas, USA",
                },
                {
                  icon: <FaClock />,
                  title: "Working Hours",
                  value: "Mon - Sat | 9:00 AM - 6:00 PM",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 items-center shadow-sm hover:shadow-md transition duration-300"
                >

                  <div className="w-[55px] h-[55px] rounded-lg bg-[#0B7BEA] flex items-center justify-center text-white text-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-black">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      {item.value}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-200">

            <h3 className="text-2xl font-bold text-black mb-2">
              Send Message
            </h3>

            <p className="text-gray-500 text-sm mb-8">
              Fill the form below and our team will contact you shortly.
            </p>

            <form className="space-y-6">

              {/* Input */}
              <div className="group">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-sm outline-none bg-[#fafafa]
                  transition-all duration-300
                  group-hover:border-[#0B7BEA]
                  focus:border-[#0B7BEA]
                  focus:shadow-[0_0_15px_rgba(11,123,234,0.25)]"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-sm outline-none bg-[#fafafa]
                  transition-all duration-300
                  group-hover:border-[#0B7BEA]
                  focus:border-[#0B7BEA]
                  focus:shadow-[0_0_15px_rgba(11,123,234,0.25)]"
                />
              </div>

              <div className="group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-sm outline-none bg-[#fafafa]
                  transition-all duration-300
                  group-hover:border-[#0B7BEA]
                  focus:border-[#0B7BEA]
                  focus:shadow-[0_0_15px_rgba(11,123,234,0.25)]"
                />
              </div>

              <div className="group">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-sm outline-none bg-[#fafafa] resize-none
                  transition-all duration-300
                  group-hover:border-[#0B7BEA]
                  focus:border-[#0B7BEA]
                  focus:shadow-[0_0_15px_rgba(11,123,234,0.25)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-[#0864bc] text-white px-8 py-4 rounded-xl text-sm font-medium transition duration-300 w-full"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-300">

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Houston,Texas&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;