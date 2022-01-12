import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import "./style.css";
import boxShadow from "../images/box-shadow.webp";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Teleradiologia - zdalne opisywanie cyfrowych zdjęć stomatologicznych.
        </title>
        <meta
          name="description"
          content="Nie musisz zatrudniać radiologa do opisu zdjęć. Skorzystaj z usług zdalnej teleradiologii! Bądź profesjonalny i wyprzedź konkurencję!"
        />
      </Helmet>
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
            <p className="hero-title">Teleradiologia</p>
            <h1>ZDALNE OPISYWANIE CYFROWYCH ZDJĘĆ STOMATOLOGICZNYCH</h1>
            <div className="hero-container">
              <div>
                <p>
                  Nie musisz zatrudniać radiologa do opisu zdjęć. Skorzystaj z
                  usług zdalnej teleradiologii! Bądź profesjonalny i wyprzedź
                  konkurencję!
                </p>
              </div>
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
                        acceptCharset="utf-8"
                        method="post"
                      >
                        <div className="form-item">
                          <label>Imię</label>
                          <input type="text" name="first_name"  required />
                        </div>
                        <div className="form-item">
                          <label>Nazwisko</label>
                          <input type="text" name="last_name" required />
                        </div>
                        <div className="form-item">
                          <label>Telefon</label>
                          <input type="text" name="custom_phone" required />
                        </div>
                        <div className="form-item">
                          <label>Email</label>
                          <input type="text" name="email" required />
                        </div>
                        <input type="hidden" name="thankyou_url" value="https://pozytron-test.netlify.app?t=1"/>
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
      <section className="section">
        <div className="container">
          <div className="wrapper">
            <h2>Korzyści które uzyskasz z wdrożenia modułu Teleradiologii:</h2>
            <ul>
              <li>
                Przygotujemy dla Ciebie wszystkie dokumenty do WSSE wymagane
                przepisami prawa (procedury szczegółowe, dokumenty uprawniające
                do opisu zdjęć, test specjalistyczne urządzeń peryferyjnych).
              </li>
              <li>
                Otrzymasz dostęp do aplikacji szyfrowanego przesyłania zdjęć w
                formacie DICOM.
              </li>
              <li>
                Spełnisz wymogi prawa w zakresie posiadania umowy z lekarzem
                radiologiem w obszarze oceny radiologicznej wykonywanych badań
                obrazowych.
              </li>
              <li>
                Uzyskasz możliwość wysłania i konsultacji wykonanego badania z
                lekarzem radiologiem bezpośrednio w systemie.
              </li>
              <li>
                Będziesz mieć możliwość tworzenia kont dla podmiotów z Tobą
                współpracujących / lekarzy kierujących pacjentów na diagnostykę
                obrazową stomatologiczną (funkcja systemu RIS umożliwiająca
                wystawienie zlecenia, przesłanie go do placówki wykonującej
                badanie radiologiczne wraz ze zwrotnym odesłaniem wykonanych
                obrazów w czasie rzeczywistym);
              </li>
              <li>
                Możliwość archiwizacji wykonywanych badań w systemie PACS
                stanowiącym integralną część modułu teleradiologicznego (brak
                konieczności posiadania własnych serwerów).
              </li>
              <li>
                Możliwość zarządzania wszystkimi pacjentami oraz wykonanymi
                badaniami obrazowymi dzięki funkcji systemu RIS.
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
                <h2>
                  Preferencyjne ceny Teleragiologii dla Klientów POZYTRON
                  Radiologia Medyczna:
                </h2>
                <div className="table">
                  <div className="table-header">
                    <span>Moduł teleradiologii - dostęp dla podmiotu</span>
                  </div>
                  <div className="table-body">
                    <ul>
                      <li>
                        Przygotowanie dokumentów do WSSE (procedury szczegółowe,
                        uprawnienia do opisywania zdjęć, testy specjalistyczne
                        urządzeń peryferyjnych)
                        <ul>
                          <li>
                            Dostęp do modułu dla współpracujących jednostek
                          </li>
                          <li>Radiologiczna gotowość dyżurowa</li>
                          <li>
                            Dostęp do funkcji RIS w module teleradiologicznym
                          </li>
                          <li>Archiwizacja wykonywanych badań</li>
                        </ul>
                      </li>

                      <li>
                        Wsparci ekoordynatora badań w teleradiologii w godz.
                        8:00 - 16:00
                        <ul>
                          <li>Wsparcie IT w godz. 8:00 - 16:00</li>
                          <li>Serwis oraz aktualizacja modułu</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <img src={boxShadow} />
              <h2>
                Cena za opis badania stomatologicznego w systemie teleradiologii
                już od 16 zł za zdjęcie.
              </h2>
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
