export default function HomePage() {
  return (
    <div className="home-page">
      <img
        src={process.env.PUBLIC_URL + "/img/homePageBanner.webp"}
        alt="Recepies for every taste"
      ></img>
    </div>
  );
}
