import DinoGrid from "@/components/dino/DinoGrid";
import { dinosaurs } from "@/data/dinosaur";

export default function Home() {
  return (
    <div>
      <section id="landing">
        <div className="row">
          <div className="container">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__pill">700+ species documented</div>
                  <div className="landing__content--title">
                    Discover the world of prehistoric life
                  </div>
                  <div className="landing__content--subtitle">
                    Accurate, beautiful, and easy to explore -- every dinosaur, every era, all in one place.
                  </div>
                  <div className="landing__searchbar--wrapper">
                    <input 
                    type="text" 
                    placeholder="Search dinosaurs - try 'Tyrannosaurus' or 'Cretaceous carnivore'..." 
                    className="landing__searchbar"
                    />
                  </div>
                  <div className="landing__extra--highlights">
                    <div className="highlight__item">
                      <div className="extra__highlight">700+</div>
                      <div className="extra__sub--highlight">Species</div>
                    </div>
                    <div className="highlight__item">
                      <div className="extra__highlight">3</div>
                      <div className="extra__sub--highlight">Periods</div>
                    </div>
                    <div className="highlight__item">
                      <div className="extra__highlight">165M</div>
                      <div className="extra__sub--highlight">Years of evolution</div>
                    </div>
                    <div className="highlight__item">
                      <div className="extra__highlight">50+</div>
                      <div className="extra__sub--highlight">Quiz questions</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="filter">
        <div className="row">
          <div className="container">
            <div className="filter__title">Browse by period</div>
            <div className="filter__era--btns">
              <button className="filter__era--btn">
                <div className="era__title">Triassic</div>
                <div className="era__year">252 - 201 MYA</div>
              </button>
              <button className="filter__era--btn">
                <div className="era__title">Jurassic</div>
                <div className="era__year">201 - 145 MYA</div>
              </button>
              <button className="filter__era--btn">
                <div className="era__title">Cretaceous</div>
                <div className="era__year">145 - 66 MYA</div>
              </button>
            </div>
            <div className="filter__description">Click a period to explore its dinosaur</div>
          </div>
        </div>
      </section>
      <section id="feature">
        <div className="row">
          <div className="container">
            <div className="feature__top--section">
              <div className="feature__title">Featured Dinosaurs</div>
              <button className="feature__view--all">View All</button>
            </div>
            <div className="feature__tabs">
              <button className="feature__tabs--title feature__tabs--btn btn__active">All periods</button>
              <button className="feature__tabs--title feature__tabs--btn">Cretaceous</button>
              <button className="feature__tabs--title feature__tabs--btn">Jurassic</button>
              <button className="feature__tabs--title feature__tabs--btn">Triassic</button>
              <button className="feature__tabs--title feature__tabs--btn">Carnivore</button>
              <button className="feature__tabs--title feature__tabs--btn">Herbivore</button>
            </div>
              <DinoGrid dinosaurs={dinosaurs.slice(0, 6)} />
          </div>
        </div>
      </section>
      <section id="quiz">
        <div className="row">
          <div className="container">
            <div className="quiz__wrapper">
              <div className="quiz__content">
                <div className="quiz__heading">
                  <div className="quiz__headline">Test your dinosaur knowledge</div>
                  <div className="quiz__description">From fossil facts to behavorial science -- how much do you really know?</div>
                  <div className="quiz__pills">
                    <div className="quiz__pill">Multiple Choice</div>
                    <div className="quiz__pill">10 questions</div>
                    <div className="quiz__pill">Score tracking</div>
                  </div>
                </div>
              </div>
                  <button className="quiz__btn">Take the quiz</button>
            </div>
          </div>
        </div>
      </section>
      <section id="facts">
          <div className="row">
            <div className="container">
              <div className="facts__top--section">
                <div className="facts__title">Did you know?</div>
                <button className="facts__btn">More facts</button>
              </div>
              <div className="facts__cards">
                <div className="fact__card">
                  <div className="fact__card--question">Largest Ever</div>
                  <div className="fact__card--answer">Patagotitan</div>
                  <div className="fact__card--explination">Estimated at 37 meters long and 70 tonnes - the largest land animal ever discovered.</div>
                </div>
                <div className="fact__card">
                  <div className="fact__card--question">Largest Ever</div>
                  <div className="fact__card--answer">Patagotitan</div>
                  <div className="fact__card--explination">Estimated at 37 meters long and 70 tonnes - the largest land animal ever discovered.</div>
                </div>
                <div className="fact__card">
                  <div className="fact__card--question">Largest Ever</div>
                  <div className="fact__card--answer">Patagotitan</div>
                  <div className="fact__card--explination">Estimated at 37 meters long and 70 tonnes - the largest land animal ever discovered.</div>
                </div>
                <div className="fact__card">
                  <div className="fact__card--question">Largest Ever</div>
                  <div className="fact__card--answer">Patagotitan</div>
                  <div className="fact__card--explination">Estimated at 37 meters long and 70 tonnes - the largest land animal ever discovered.</div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <footer id="footer">
        <div className="row">
          <div className="container">
            <div className="footer__content">
              <div className="footer__content--title">Dinotopia</div>
              <div className="footer__links--wrapper">
                <a href="#" className="footer__link">About</a>
                <a href="#" className="footer__link">Contact</a>
                <a href="#" className="footer__link">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
