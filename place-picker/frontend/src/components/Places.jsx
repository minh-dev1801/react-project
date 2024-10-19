import PropTypes from "prop-types";

const Places = ({ title, places, onSelectedPlace, subTitle }) => {
  return (
    <section className="max-w-[85rem] mx-auto my-8 border-2 border-[#0d373e] p-8 rounded-lg">
      <h2 className="text-center text-2xl text-[#8feeff] mb-4">{title}</h2>
      {places.length === 0 && (
        <h3 className="text-center text-[1rem]">{subTitle}</h3>
      )}
      {places.length !== 0 && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 mx-auto max-w-[80rem]">
          {places.map((place) => (
            <li
              key={place.id}
              className="relative place-item animate-slide-up-fade-in"
            >
              <button
                onClick={() => onSelectedPlace(place.id)}
                className="transition-transform duration-300"
              >
                <img
                  src={`http://localhost:5000/${place.image.src}`}
                  alt={place.alt}
                  className="w-[300px] h-[190px] object-cover rounded-lg"
                />
                <h3 className="absolute bottom-0 right-0 py-[2px] px-[4px] my-4 mx-4 rounded bg-[#feee86] text-sm shadow-md text-stone-800">
                  {place.title}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Places.propTypes = {
  title: PropTypes.string,
  places: PropTypes.array,
  onSelectedPlace: PropTypes.func,
  subTitle: PropTypes.string,
};

export default Places;
