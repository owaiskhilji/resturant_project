import { useState, useEffect } from "react";

export default function Table() {
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
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg font-merriweather">Book a Table</h3>
    <p className="py-4 font-playfair">  To make a reservation, please call us on <strong className="text-blue-600">0141 611 3159</strong> or book online through our website.
    </p>
    <div className="modal-action flex justify-center">
      <form method="dialog">
        <button className=" bg-textcolor text-white w-[300px] p-2 rounded-md">Close</button>
      </form>
    </div>
  </div>
</dialog>



    </>
  );
}
