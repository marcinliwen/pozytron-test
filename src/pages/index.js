import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";
// markup
const IndexPage = () => {
  return (
    <main>
      <header className="background-gradient">
        <div className="container">
          <div className="wrapper">
          <StaticImage className="img-logo" alt="logo" src="../images/logo.webp" />
          </div>
       
        </div>
      </header>
      <section>
      <div className="container">
      <div className="wrapper">
        <h1>Pozytron</h1>
        </div>
        </div>
      </section>
      <section>
      <div className="container">
      <div className="wrapper">
        <h2>Tabela z cenami</h2>
        </div>
        </div>
      </section>
      <section>
      <div className="container">
      <div className="wrapper">
        <h2>Skontaktuj się</h2>
        <form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post">
	 <input type="text" name="email"/><br/>

	
	<input type="hidden" name="campaign_token" value="rkmlM" />
	<input type="submit" value="Subscribe"/>
</form>
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
