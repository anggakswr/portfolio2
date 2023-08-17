import Header from "./components/Header";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Socmed from "./components/Socmed";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-[500px] mx-auto">
        {/* header */}
        <Header />

        {/* main content */}
        <div className="p-4">
          {/* pic & titles */}
          <Intro />

          {/* work */}
          <p className="underline font-bold text-xl mb-2">Work</p>

          <p className="text-justify mb-8">
            <span className="pl-4">Angga</span> adalah seorang frontend web
            developer yang tinggal di Indonesia. Dia suka bikin berbagai
            tampilan website untuk perusahaan tempat dimana ia bekerja dan
            project sampingannya. Kalau lagi gak online Angga suka belajar hal
            baru, mentoring orang yang mau belajar frontend, buka kelas
            frontend, dan bikin konten di sosmed. Saya juga punya produk sendiri
            berupa jasa pembuatan undangan online di{" "}
            <a href="https://daudweb.com">daudweb.com</a>.
          </p>

          {/* bio */}
          <Bio />

          {/* social media */}
          <Socmed />

          {/* yt vids */}
          <div className="grid grid-cols-2 gap-x-4 mb-8">
            {aYtVids.map((oYtVid) => (
              <a
                key={oYtVid.sTitle}
                href={oYtVid.sLink}
                className="text-sm text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={oYtVid.sImg}
                  alt={oYtVid.sTitle}
                  className="rounded-lg mb-2"
                />

                <p>{oYtVid.sTitle}</p>
                <p className="font-bold">{oYtVid.sDesc}</p>
              </a>
            ))}
          </div>

          {/* footer */}
          <p className="text-sm text-center text-gray-500">
            &copy; Kamiswara Angga Wijaya. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

const aYtVids = [
  {
    sLink:
      "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvNEf9gGvPRT_CAgqYYa4Yy",
    sImg: "/img/yt-vids/microfe.jpg",
    sTitle: "Playlist about Micro-frontends",
    sDesc: "Modern concept of frontends",
  },
  {
    sLink:
      "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvm3PlTr_MHym8-18BUQcCG",
    sImg: "/img/yt-vids/tdd.jpg",
    sTitle: "Playlist about TDD",
    sDesc: "Test Driven Development",
  },
];

export default App;
