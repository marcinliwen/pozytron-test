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
      media: "(max-width: 760px)",
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
            <h1>Teleradiologia</h1>
            <p>Diagnoza na odległość.</p>
            
          </div>
        </div>
        <div className="hero-img">
          <GatsbyImage image={images} alt="radiology" />
        </div>
      </section>
      <section className="price-section">
        <div className="container">
          <div className="wrapper">
            <div className="price-box">
              <h2>Tabela z cenami</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="wrapper">
          <div className="form-box">
                  <div className="form">
                    <div className="form-wrapper">
                      <h2>
                        Zapisz się do newslettera <br /> i dowiedz się więcej.
                      </h2>
                      <form
                        action="https://app.getresponse.com/add_subscriber.html"
                        accept-charset="utf-8"
                        method="post"
                      >
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
    largeImage: file(relativePath: { eq: "hero-desctop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    smallImage: file(relativePath: { eq: "hero-mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
