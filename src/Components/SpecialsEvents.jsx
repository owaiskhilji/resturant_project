





export default function SpecialsEvents() {




    return (
      <div className="text-center py-10 mt-4">
        <h2 className="text-3xl font-bold mb-4 font-merriweather"> Join Us for Special Events</h2>
        <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 mb-8 font-playfair">Enjoy great food & entertainment every week!</p>
  
        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          
          {/* Event 1 - Sunday Roast */}
          <div className="bg-white shadow-md p-6 rounded-lg  ">
            <div className="text-4xl mb-2">🥩</div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold font-merriweather">Sunday Roast</h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">Delicious roast with all the trimmings.</p>
          </div>
  
          {/* Event 2 - Quiz Night */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="text-4xl mb-2">🧠</div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold font-merriweather">Quiz Night</h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">Test your knowledge & win prizes.</p>
          </div>
  
          {/* Event 3 - Live Music */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="text-4xl mb-2">🎵</div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold font-merriweather">Live Music</h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">Enjoy live performances every weekend.</p>
          </div>
  
        </div>
      </div>
    );
  }
  