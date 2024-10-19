import { useEffect } from "react";
import Header from "./components/Header";
import Places from "./components/Places";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvailablePlacesThunk } from "./store/placesSlice";
import {
  fetchUserPlacesThunk,
  updateUserPlacesThunk,
} from "./store/userPlacesSlice";

const App = () => {
  const { places } = useSelector((state) => state.places);
  const { userPlaces } = useSelector((state) => state.userPlaces);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailablePlacesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserPlacesThunk());
  }, [dispatch]);

  const handleSelectedPlace = (placeId) => {
    const isPlaceSelected = userPlaces.some((place) => place.id === placeId);
    if (!isPlaceSelected) {
      const place = places.find((place) => place.id === placeId);
      if (place) {
        const updatePlaces = [...userPlaces, place];
        dispatch(updateUserPlacesThunk(updatePlaces));
      }
    }
  };
  const handleDeletePlace = (placeId) => {
    const updatePlaces = userPlaces.filter((place) => place.id !== placeId);
    dispatch(updateUserPlacesThunk(updatePlaces));
  };
  return (
    <>
      <Header />
      <Places
        title="Du lịch trong tôi: Những Trải Nghiệm Đáng Nhớ"
        places={userPlaces}
        subTitle="Lựa chọn địa điểm du lịch muốn đi trong danh sách bên dưới."
        onSelectedPlace={handleDeletePlace}
      />
      <Places
        title="Khám Phá Những Điểm Đến Du Lịch Hấp Dẫn Nhất"
        places={places}
        onSelectedPlace={handleSelectedPlace}
      />
    </>
  );
};

export default App;
