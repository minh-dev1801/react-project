import logoImage from "../assets/logo.png";
const Header = () => {
  return (
    <header className="text-center flex flex-col items-center">
      <img
        className="w-20 h-20 object-contain drop-shadow-logo"
        src={logoImage}
        alt="Stylized globe"
      />
      <h1 className="mt-5 uppercase text-6xl tracking-[1rem] font-[600]">
        PlacePicker
      </h1>
      <p className="text-[#9eb5b4] text-xl mt-4">
        Tạo bộ sưu tập cá nhân các địa điểm bạn muốn thăm hoặc đã thăm.
      </p>
    </header>
  );
};

export default Header;
