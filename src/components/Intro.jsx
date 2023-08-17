const Intro = () => {
  return (
    <>
      {/* pic */}
      <div
        className="w-44 h-44 mx-auto rounded-full border-2 border-white bg-center bg-cover mb-4"
        style={{ backgroundImage: "url(/img/profile.jpg)" }}
      />

      {/* texts */}
      <div className="text-center mb-4">
        <p className="font-bold text-2xl">Kamiswara Angga W.</p>
        <p>( Programmer / Content Creator )</p>
      </div>

      {/* gray box */}
      <p className="text-center bg-gray-800 rounded-lg p-4 mb-8">
        Hello, I`m a frontend web developer based in Indonesia!
      </p>
    </>
  );
};

export default Intro;
