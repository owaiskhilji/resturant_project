import { useState, useEffect } from "react";

export default function ReservationPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup
    const isPopupClosed = localStorage.getItem("popupClosed");
    if (!isPopupClosed) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true"); 
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-2xl font-bold font-merriweather">Book a Table</h2>
            <p className="mt-2 font-playfair text-gray-600">
              To make a reservation, please call us on <strong className="text-blue-600">0141 611 3159</strong> or book online through our website.
            </p>
            <button
              onClick={handleClose}
              className="w-full mt-4 px-4 py-2 bg-textcolor text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
