const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="block text-orange-600">Da Vatti Ashfield</span>
              </h1>

              <div className="space-y-4 max-w-2xl">
                <p className="text-xl md:text-2xl font-semibold text-gray-800">
                  Authentic Nepalese Indian Cuisine
                </p>

                <div className="space-y-2">
                  <p className="text-lg text-gray-600 flex items-center">
                    <svg
                      className="w-5 h-5 text-orange-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    4/206-208 Liverpool Rd, Ashfield NSW 2131
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Online Menu
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Takeaway & Delivery
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Secure Online Payments
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Our Menu
              </button>

              <button className="flex items-center justify-center text-orange-500 hover:text-orange-600 px-8 py-4 text-lg font-semibold transition-colors duration-200 group">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-full mr-3 transition-colors duration-200">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                Pre Order Online
              </button>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
              <div className="flex items-start space-x-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/assets/IMG_9886.jpg"
                  alt="Customer Review"
                />
                <div className="flex-1">
                  <p className="text-gray-700 text-sm mb-2">
                    "Delicious restaurant is easy and takes just a couple."
                  </p>
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-orange-500 font-semibold text-sm">
                    Robert
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                src="/assets/da-vatti-ashfield.webp"
                alt="Delicious food spread on a wooden table"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-200 rounded-3xl -z-10 opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-red-200 rounded-3xl -z-10 opacity-30"></div>

            {/* Floating elements */}
            <div className="absolute top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Popular</p>
                  <p className="text-sm text-gray-600">This Week</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fresh</p>
                  <p className="text-sm text-gray-600">Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
