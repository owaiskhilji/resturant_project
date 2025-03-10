export default function OpeningHours() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-[90%] max-w-lg p-6 rounded-lg shadow-lg bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold font-merriweather text-2xl text-center text-gray-800 mb-4">
            🕒 Opening Hours
          </h3>
          <div className="overflow-x-auto">


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
      <th className="font-merriweather text-black">Days</th>
      <th className="font-merriweather text-black">Opening Timing</th>
      <th className="font-merriweather text-black">Closing Timing</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td className="font-playfair text-gray-600">Monday-Thursday</td>
        <td className="font-playfair text-gray-600">11:00 AM</td>
        <td className="font-playfair text-gray-600">10:00 PM</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td className="font-playfair text-black">Friday-Saturday</td>
        <td className="font-playfair text-gray-600 "  >11:00 AM</td>
        <td className="font-playfair text-gray-600"  >11:00 PM</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td className="font-playfair text-black">Sunday </td>
        <td className="font-playfair text-gray-600 ">10:00 AM</td>
        <td className="font-playfair text-gray-600">9:00 PM</td>
      </tr>
    </tbody>
  </table>
</div>


          </div>
        </div>
      </dialog>
    </div>
  );
}
