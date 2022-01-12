import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import "./style.css";
import boxShadow from "../images/box-shadow.webp";
// markup
const IndexPage = ({ data }) => {
  React.useEffect(() => {
    document.querySelector(".img-logo").classList.add("moveLogo");
    document.querySelector(".form-box").classList.add("show");
  }, []);

  const images = withArtDirection(getImage(data.largeImage), [
    {
      media: "(max-width: 415px)",
      image: getImage(data.smallImage),
    },
  ]);
  return (
    <main>
      <header className="background-gradient">
        <div className="container">
          <div className="wrapper">
            <StaticImage
              className="img-logo"
              alt="logo"
              src="../images/logo.webp"
            />
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container hero-content">
          <div className="wrapper">
          <h1>ZDALNE OPISYWANIE CYFROWYCH ZDJĘĆ STOMATOLOGICZNYCH
</h1>
            <div className="hero-container">
              <div>
            <p>Nie musisz zatrudniać radiologa do opisu zdjęć. Skorzystaj z usług zdalnej teleradiologii!
Bądź profesjonalny i wyprzedź konkurencję!
</p></div>
            <div>
            <div className="form-box">
                  <div className="form">
                    <div className="form-wrapper">
                      <h2>
                      Zostaw nam dane kontaktowe. <br />
Zwrotnie otrzymasz ofertę i cennik.

                      </h2>
                      <form
                        action="https://app.getresponse.com/add_subscriber.html"
                        accept-charset="utf-8"
                        method="post"
                      >
                        <div className="form-item">
                          <label>Imię</label>
                          <input type="text" name="name" required />
                        </div>
                        <div className="form-item">
                          <label>Nazwisko</label>
                          <input type="text" name="surname" required />
                        </div>
                        <div className="form-item">
                          <label>Telefon</label>
                          <input type="text" name="phone" required />
                        </div>
                        <div className="form-item">
                          <label>Email</label>
                          <input type="text" name="email" required />
                        </div>

                        <input
                          type="hidden"
                          name="campaign_token"
                          value="rkmlM"
                        />
                        <input
                          className="btn btn-bg"
                          type="submit"
                          value="Wyślij"
                        />
                      </form>
                    </div>
                  </div>
                  <img src={boxShadow} />
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <GatsbyImage image={images} alt="radiology" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="wrapper">
          <h2>Korzyści które uzyskasz z wdrożenia modułu Teleradiologii:</h2>
<ul>
  <li>Przygotujemy dla Ciebie wszystkie dokumenty do WSSE wymagane przepisami prawa (procedury szczegółowe, dokumenty uprawniające do opisu zdjęć, test specjalistyczne urządzeń peryferyjnych).
</li>
<li>Otrzymasz dostęp do aplikacji szyfrowanego przesyłania zdjęć w formacie DICOM.
</li>
<li>Spełnisz wymogi prawa w zakresie posiadania umowy z lekarzem radiologiem w obszarze oceny radiologicznej wykonywanych badań obrazowych.
</li>
<li>Uzyskasz możliwość wysłania i konsultacji wykonanego badania z lekarzem radiologiem bezpośrednio w systemie.
</li>
<li>Będziesz mieć możliwość tworzenia kont dla podmiotów z Tobą współpracujących / lekarzy kierujących pacjentów na diagnostykę obrazową stomatologiczną (funkcja systemu RIS umożliwiająca wystawienie zlecenia, przesłanie go do placówki wykonującej badanie radiologiczne wraz ze zwrotnym odesłaniem wykonanych obrazów w czasie rzeczywistym); 
</li>
<li>Możliwość archiwizacji wykonywanych badań w systemie PACS stanowiącym integralną część modułu teleradiologicznego (brak konieczności posiadania własnych serwerów).
</li>
<li>Możliwość zarządzania wszystkimi pacjentami oraz wykonanymi badaniami obrazowymi dzięki funkcji systemu RIS.
</li>
</ul>

          </div>
        </div>
      </section>
      <section className="price-section">
        <div className="container">
          <div className="wrapper">
            <div className="pricebox-wrapper">
            <div className="price-box">
              <h2>Tabela z cenami</h2>
              <div className="table">
                <div className="table-header">
                  <span>Badanie</span>
                  <span>Cena</span>
                </div>
                <div className="table-body">
                  <span>Echocardiogram</span>
                  <span>200 PLN</span>
                  <span>MRI (Magnetic Resonance Imaging)</span>
                  <span>200 PLN</span>
                  <span>Ultrasound</span>
                  <span>200 PLN</span>
                  <span>X-Ray</span>
                  <span>100 PLN</span>
                  <span>PET/CT (Positron Emission Tomography/Computed Tomography)</span>
                  <span>250 PLN</span>
                  <span>Radiology Overread Services For Medical Diagnostic and Legal Overreads</span>
                  <span>350 PLN</span>
                </div>
              </div>
            </div>
            <img src={boxShadow} />
            </div>
            
          </div>
        </div>
      </section>
      
      <footer className="background-gradient">
        <div className="container">
          <div className="wrapper"></div>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const data = graphql`
  query {
    largeImage: file(relativePath: { eq: "dental-desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    smallImage: file(relativePath: { eq: "dental-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;
