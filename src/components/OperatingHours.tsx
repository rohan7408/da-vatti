import { useState } from "react";

const OperatingHours = () => {
  const [activeService, setActiveService] = useState("DELIVERY");

  const operatingHoursData = {
    DELIVERY: [
      { day: "THURSDAY", hours: "Closed", isClosed: true },
      { day: "FRIDAY", hours: "Closed", isClosed: true },
      { day: "SATURDAY", hours: "5pm to 8:30pm", isClosed: false },
      { day: "SUNDAY", hours: "5pm to 8:30pm", isClosed: false },
      { day: "MONDAY", hours: "5pm to 8:30pm", isClosed: false },
      { day: "TUESDAY", hours: "5pm to 8:30pm", isClosed: false },
      { day: "WEDNESDAY", hours: "5pm to 8:30pm", isClosed: false },
    ],
    PICKUP: [
      { day: "THURSDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "FRIDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "SATURDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "SUNDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "MONDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "TUESDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "WEDNESDAY", hours: "12pm to 9:30pm", isClosed: false },
    ],
    "DINE-IN": [
      { day: "THURSDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "FRIDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "SATURDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "SUNDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "MONDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "TUESDAY", hours: "12pm to 9:30pm", isClosed: false },
      { day: "WEDNESDAY", hours: "12pm to 9:30pm", isClosed: false },
    ],
  };

  const serviceTypes = ["DELIVERY", "PICKUP", "DINE-IN"];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Operating Hours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred service option to view our operating schedule
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {serviceTypes.map((service) => {
            const isActive = activeService === service;
            const scheduleData =
              operatingHoursData[service as keyof typeof operatingHoursData];

            return (
              <div
                key={service}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer ${
                  isActive
                    ? "ring-4 ring-orange-500 ring-opacity-50 scale-105"
                    : ""
                }`}
                onClick={() => setActiveService(service)}
              >
                {/* Service Header */}
                <div
                  className={`p-6 text-center relative ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-4 right-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}

                  <div className="mb-3">
                    {service === "DELIVERY" && (
                      <svg
                        className="w-10 h-10 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                      </svg>
                    )}
                    {service === "PICKUP" && (
                      <svg
                        className="w-10 h-10 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                    {service === "DINE-IN" && (
                      <svg
                        className="w-10 h-10 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1H8V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold">{service}</h3>
                  <p className="text-sm opacity-90 mt-2">
                    {service === "DELIVERY" && "Fast delivery to your door"}
                    {service === "PICKUP" && "Order ahead & collect"}
                    {service === "DINE-IN" && "Enjoy our restaurant atmosphere"}
                  </p>
                </div>

                {/* Schedule */}
                <div className="p-4">
                  <div className="space-y-2">
                    {scheduleData.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700 text-sm">
                          {schedule.day.charAt(0) +
                            schedule.day.slice(1).toLowerCase()}
                        </span>
                        <span
                          className={`font-semibold text-sm ${
                            schedule.isClosed
                              ? "text-red-500 bg-red-50 px-2 py-1 rounded-full"
                              : "text-green-600 bg-green-50 px-2 py-1 rounded-full"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Service-specific action button */}
                  <div className="mt-4">
                    <button
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {service === "DELIVERY" && "Order for Delivery"}
                      {service === "PICKUP" && "Order for Pickup"}
                      {service === "DINE-IN" && "Book a Table"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <svg
                className="w-8 h-8 text-orange-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">
                Important Notice
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Operating hours may vary during holidays and special events. We
              recommend calling ahead to confirm availability, especially during
              peak seasons.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <svg
                className="w-8 h-8 text-green-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Have questions about our services or need to make special
              arrangements? Don't hesitate to contact our friendly team for
              assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;
