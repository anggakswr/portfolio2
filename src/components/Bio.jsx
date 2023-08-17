/* eslint-disable react/prop-types */
const Bio = () => {
  return (
    <>
      <p className="underline font-bold text-xl mb-2">Bio</p>

      {/* years */}
      <div className="mb-8">
        {aYears.map((oYear) => (
          <Year key={oYear.sDesc} oYear={oYear} />
        ))}
      </div>
    </>
  );
};

const aYears = [
  { sYear: "1998", sDesc: "Lahir di Semarang, Indonesia" },
  { sYear: "2016", sDesc: "Lulus SMK TKJ (Teknik Komputer dan Jaringan)" },
  {
    // sYear: "2016 - 2018",
    sYear: "2016",
    sDesc: "Sempat kerja jadi tukang ketik, dan jualan online",
  },
  { sYear: "2020", sDesc: "Kerja di iCreativeLabs sebagai FE Web Developer" },
  { sYear: "2022", sDesc: "Lulus Sarjana S1 Sistem Informasi" },
  {
    sYear: "2022 - sekarang",
    sDesc: "Kerja di PrimaKu sebagai FE Web Developer",
  },
];

const Year = ({ oYear }) => {
  const { sYear, sDesc } = oYear;

  return (
    <div className="flex gap-x-8">
      <b>{sYear}</b>
      <p>{sDesc}</p>
    </div>
  );
};

export default Bio;
