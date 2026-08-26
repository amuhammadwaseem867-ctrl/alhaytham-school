import "./Gallery.css";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    title: "Learning",
    className: "gallery-large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
    title: "Campus Life",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1200&q=85",
    title: "Activities",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    title: "Discovery",
    className: "gallery-large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    title: "Community",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        {/* HEADER */}

        <div className="gallery-header">

          <div className="gallery-label">
            <span></span>
            SCHOOL LIFE
          </div>

          <div className="gallery-heading">

            <h2>
              Moments that
              <br />
              <em>matter.</em>
            </h2>

            <p>
              A glimpse into the experiences, activities and
              everyday moments that make school life meaningful.
            </p>

          </div>

        </div>


        {/* GALLERY */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <div
              className={`gallery-item ${item.className}`}
              key={item.image}
            >

              <div
                className="gallery-image"
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              >

                <div className="gallery-overlay"></div>

                <div className="gallery-item-info">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <b>
                    ↗
                  </b>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM */}

        <div className="gallery-bottom">

          <span>
            AL-HAYTHAM SCHOOL
          </span>

          <div className="gallery-line"></div>

          <p>
            Learning, growing and creating memories together.
          </p>

        </div>

      </div>
    </section>
  );
}