const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      avatar: "/assets/IMG_9886.jpg",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      review:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      avatar: "/assets/IMG_9886.jpg",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      date: "3 weeks ago",
      review:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      avatar: "/assets/IMG_9886.jpg",
      verified: false,
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      date: "1 week ago",
      review:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      avatar: "/assets/IMG_9886.jpg",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      date: "2 months ago",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.",
      avatar: "/assets/IMG_9886.jpg",
      verified: true,
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      date: "1 month ago",
      review:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      avatar: "/assets/IMG_9886.jpg",
      verified: false,
    },
  ];

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);
  const totalReviews = reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((review) => review.rating === rating).length
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto mb-8">
            See what our valued customers are saying about their dining
            experience
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        {/* Reviews Summary */}
        <div className="bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 border border-gray-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-6xl font-bold text-orange-400 mr-4">
                  {averageRating}
                </span>
                <div>
                  <div className="flex mb-2">
                    {renderStars(Math.round(parseFloat(averageRating)))}
                  </div>
                  <p className="text-orange-200 text-lg">
                    Based on {totalReviews} reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-green-400 font-semibold">
                  Verified Reviews
                </span>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center">
                  <span className="text-sm font-medium text-orange-200 w-3">
                    {rating}
                  </span>
                  <svg
                    className="w-4 h-4 text-yellow-400 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 mx-2">
                    <div className="bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${
                            (ratingDistribution[index] / totalReviews) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-orange-200 w-8">
                    {ratingDistribution[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-600 hover:border-orange-400"
            >
              {/* Review Header */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="font-semibold text-orange-400 mr-2">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-orange-200">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p className="text-orange-200 leading-relaxed text-sm mb-4">
                "{review.review}"
              </p>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-4 text-sm text-orange-200">
                  <button className="flex items-center hover:text-orange-400 transition-colors">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 01-2-2V6a2 2 0 012-2h2.5L10 2l1.5 2H14a2 2 0 012 2v2a2 2 0 01-2 2h-1.5z"
                      ></path>
                    </svg>
                    Helpful
                  </button>
                  <button className="flex items-center hover:text-orange-400 transition-colors">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      ></path>
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-orange-500 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-lg mb-6 opacity-90">
              Had a great meal? We'd love to hear about your experience!
            </p>
            <button className="bg-white text-orange-500 hover:bg-orange-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white hover:border-orange-100">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
