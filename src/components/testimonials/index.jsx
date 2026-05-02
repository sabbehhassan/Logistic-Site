import { useEffect, useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    username: "@johndoe",
    review:
      "We rely heavily on Amazon load deliveries, and BNSF Logistics Services has never let us down. Every shipment is handled with precision.",
  },
  {
    name: "Alessandro Daluz",
    username: "@alessandroaluz",
    review:
      "Highly recommended logistics agency. Their team understands transportation and freight operations perfectly.",
  },
  {
    name: "Michael Smith",
    username: "@michaelsmith",
    review:
      "Dedicated lanes service has improved our delivery timeline significantly. Reliable and professional company.",
  },
  {
    name: "Sarah Wilson",
    username: "@sarahwilson",
    review:
      "Government contract logistics were handled securely and professionally. Great communication throughout.",
  },
  {
    name: "David Clark",
    username: "@davidclark",
    review:
      "Excellent customer support and dependable shipping services. We use them regularly for freight.",
  },
  {
    name: "Emma Johnson",
    username: "@emmajohnson",
    review:
      "Fast response time and very organized logistics planning. Highly satisfied with their services.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section className="bg-[#efefef] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-black text-3xl md:text-4xl font-bold">
            See Who Is Walking This Path With Us
          </h2>

          <h3 className="text-[#0B7BEA] text-2xl font-semibold mt-3">
            Reviews
          </h3>

          <div className="w-16 h-[3px] bg-[#0B7BEA] mx-auto mt-4"></div>

          <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto mt-8">
            Watch the video and understand why thousands of people are already
            using our services and are protected.
          </p>

        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-700"
            >

              {/* Header */}
              <div className="flex items-center gap-3 p-5 border-b border-gray-200">

                <FaUserCircle className="text-4xl text-gray-400" />

                <div>
                  <h4 className="text-lg font-semibold text-black">
                    {review.name}
                  </h4>

                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>

                  <p className="text-gray-500 text-xs mt-1">
                    {review.username}
                  </p>
                </div>

              </div>

              {/* Review */}
              <div className="p-5">
                <p className="text-gray-700 text-sm leading-7">
                  {review.review}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;