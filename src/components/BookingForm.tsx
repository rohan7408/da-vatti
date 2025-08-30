import { useState } from "react";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 2,
        specialRequests: "",
      });
    }, 3000);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <section className="py-16 bg-gray-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-600">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-orange-200">
              Thank you for your reservation. We'll send you a confirmation
              email shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            BOOK A TABLE
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-orange-200 text-lg">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-600">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-orange-400 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-orange-400 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-orange-400 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Date, Time, and Guests Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-orange-400 mb-2"
                >
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-semibold text-orange-400 mb-2"
                >
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-semibold text-orange-400 mb-2"
                >
                  Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-semibold text-orange-400 mb-2"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-orange-200 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                placeholder="Any dietary requirements, special occasions, or other requests..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:shadow-none flex items-center justify-center border-2 border-orange-500 hover:border-orange-600 disabled:border-gray-600"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Reserve Table"
                )}
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-orange-200">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">
                  Booking Policy
                </h4>
                <ul className="space-y-1">
                  <li>• Reservations confirmed within 24 hours</li>
                  <li>• Please arrive within 15 minutes of booking</li>
                  <li>• Cancellations require 2 hours notice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">
                  Contact Info
                </h4>
                <ul className="space-y-1">
                  <li>• Phone: (02) 9797 5679</li>
                  <li>• Email: info@davatti.com.au</li>
                  <li>• Walk-ins welcome (subject to availability)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
