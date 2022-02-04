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
  const banner = getImage(data.banner);
  const mapa =  getImage(data.mapa);
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
              src="../images/logo.png"
            />
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container hero-content">
          <div className="wrapper">
            <div className="hero-container">
              <div>
                {/* <p className="hero-title">Teleradiologia</p> */}
                <h1>
                  Zdalna praca{" "}
                  <span>przy opisywaniu zdjęć radiologicznych</span>
                </h1>
                <GatsbyImage image={banner} alt="teleradiologia" />
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
                          <input type="text" name="first_name" required />
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
                        <input
                          type="hidden"
                          name="thankyou_url"
                          value="https://pozytron-test.netlify.app"
                        />
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
                </div>
               
              </div>
              <div className="full-width bg-gradient-grey">
                  <h2>Pracuj gdziekolwiek jesteś w dowolnym wymiarze godzin.</h2>
                </div>
                <div className="full-width bg-gradient-red">
                 <span>
                 Jeśli jesteś <strong>lekarzem radiologiem</strong> lub posiadasz <strong>uprawnienia do opisywania zdjęć radiologicznych</strong>  
</span><span>to zapraszamy Ciebie do współpracy.</span> 
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
            <div className='f-column'>
            <h2>Zacznij współpracę z podmiotem, który ma na swoim koncie:</h2>
            <ul>
              <li>
              ponad 2 mln opisów badań radiologicznych TK, RTG, MR, MG, CBCT, PANTOMOGRAFII
              </li>
              <li>
              ponad 10 lat doświadczenia
              </li>
              <li>
              stałą współpracę z ponad 45 lekarzami radiologami
              </li>
            </ul>
            <div className="subtitle"><h3>komfort pracy w domu</h3></div>
            
            </div>
            <div>
            <GatsbyImage image={mapa} alt="mapa" />
            </div>
          </div>
        </div>
      </section>
   {/*    <section className="price-section">
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
      </section> */}

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
    largeImage: file(relativePath: { eq: "hero-bg.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    smallImage: file(relativePath: { eq: "hero-bg-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    banner: file(relativePath: { eq: "teleradio.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    mapa: file(relativePath: { eq: "mapa.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
  }
`;
