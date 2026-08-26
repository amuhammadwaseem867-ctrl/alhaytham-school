import Link from "next/link";
import "./News.css";

const newsItems = [
  {
    date: "01",
    month: "NEWS",
    title: "A New Chapter of Learning Begins",
    text: "Discover the latest updates, announcements and developments from our school community.",
    category: "School News",
  },
  {
    date: "02",
    month: "EVENT",
    title: "Building Experiences Beyond the Classroom",
    text: "Explore activities and experiences designed to encourage creativity, confidence and collaboration.",
    category: "Activities",
  },
  {
    date: "03",
    month: "UPDATE",
    title: "Admissions & School Information",
    text: "Stay informed about admissions, important dates and upcoming opportunities for families.",
    category: "Admissions",
  },
];

export default function News() {
  return (
    <section className="news" id="news">
      <div className="news-container">

        <div className="news-header">
          <div className="news-label">
            <span></span>
            NEWS & EVENTS
          </div>

          <div className="news-title-area">
            <h2>
              What's
              <br />
              <em>happening.</em>
            </h2>

            <p>
              Keep up with the latest school news, activities,
              announcements and important updates.
            </p>
          </div>
        </div>

        <div className="news-list">
          {newsItems.map((item) => (
            <article className="news-card" key={item.date}>

              <div className="news-date">
                <strong>{item.date}</strong>
                <span>{item.month}</span>
              </div>

              <div className="news-content">
                <span className="news-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>

              <div className="news-arrow">
                ↗
              </div>

            </article>
          ))}
        </div>

        <div className="news-footer">
          <span>STAY CONNECTED</span>

          <div className="news-footer-line"></div>

          <Link href="#contact" className="news-link">
            View All Updates
            <span>↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}