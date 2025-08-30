import { BookingForm } from "../components";

const BookingPage = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding top to account for fixed navbar */}
      <BookingForm />
    </div>
  );
};

export default BookingPage;
