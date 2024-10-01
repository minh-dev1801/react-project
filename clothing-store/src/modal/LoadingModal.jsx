const LoadingModal = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg text-center">
          <h2 className="text-xl font-bold">Đang tìm kiếm...</h2>
          <p>Vui lòng đợi trong giây lát.</p>
        </div>
      </div>
    );
};

export default LoadingModal;
