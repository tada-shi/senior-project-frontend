import './TopPage.css'
import mind__text from '../images/Mind2.png'
import quote__intro from '../images/intro.png'
import logo from '../images/logo2.png'
import person from '../images/mental.jpg'

export default function Top__page() {
  return (
  <div className="page__top">
      <div className="quoteIntro__image">
        <img src={quote__intro} alt="" />
      </div>
      <div className="page__container">
          <div className="logo__text">
              <img src={mind__text} alt="MIND" />
          </div>
          <div className="logo__mainboxB"></div>
          <div className="logo__mainbox">
              <div className="logo__minds">
                  <img src={logo} alt="" />
              </div>
          </div>
          <div className="person__tag">
              <div className="person__poem">
                  <p>When the world comes crashing at your feet</p>
                  <p>It’s okay to let others</p>
                  <p>Help pick up the pieces</p>
                  <p>If we’re present to take part in your happiness</p>
                  <p>When your circumstances are great</p>
                  <p>We are more than capable</p>
                  <p>Of sharing your pain</p>
                  <p className="author__name">~Rupi Kaur</p>
              </div>
              <div className="person__image">
                <img src={person} alt="" />
              </div>
          </div>
      </div>
  </div>
  );
}
