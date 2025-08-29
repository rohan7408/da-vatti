const Location = () => {
  const locationData = {
    name: "Da Vatti Ashfield",
    address: "4/206-208 Liverpool Rd, Ashfield NSW 2131, Australia",
  };

  // Google Maps embed URL for Da Vatti Ashfield location with pin marker
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.4604185189685!2d151.12613870901322!3d-33.889596257500436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba97b556ecf1%3A0x503342619241238e!2sDa%20Vatti%20Ashfield!5e0!3m2!1sen!2snp!4v1756388473093!5m2!1sen!2snp`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-xl text-gray-600">{locationData.address}</p>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Da Vatti Ashfield Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
