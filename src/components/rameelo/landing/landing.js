import React, { Fragment } from 'react';

// Styles
import './landing.scss';

// Slick
import Slider from 'react-slick';

// Video Player
import ReactPlayer from 'react-player';

// Loader component
import Loader from '../../loader';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    // dummy loader before the page content loads
    // waiting for render engine to load larger assets on page
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);

    return (
      <Fragment>
        <Loader show={this.state.isLoading} />
        <LandingContent hide={this.state.isLoading} />
      </Fragment>
    );
  }
}

function LandingContent(props) {
  var eventSliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var videoSliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`rameelo-wrapper ${props.hide ? 'cf-hide' : ''}`}>
      <div className="top-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 graphic-side">
              <span className="logo">Rameelo</span>
              <span className="motto">Raas Garba Forever.</span>
            </div>

            <div className="col info-side">
              <div className="nav">
                <span>About Us</span>
                <span>Events</span>
                <span>Registration</span>
                <span>What is Raas Garba?</span>
              </div>

              <div className="welcome">
                <span class="title">
                  Welcome to the online platform for{' '}
                  <span class="red-text">everything</span> Raas/Garba
                </span>
                <span class="subtitle">
                  If you love Raas/Garba, you are in the right place! Connect,
                  share, and grow with our community of passionate Raas/Garba
                  enthusiasts.
                </span>
                <span class="learn-more">Learn More</span>
              </div>

              <span className="scroll-widget">
                <span className="scroll-content">
                  <font>Scroll</font>
                  <i className="fas fa-sort-down"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="quadrants-section">
        <div class="container-fluid">
          <div class="row">
            <div className="col">
              <div class="quadrant">
                <span class="quadrant-header">
                  <span class="title">Event Hosts</span>
                  <span class="subtitle">
                    For organizations and individuals who are hosting their own
                    Navrati events, we would like to welcome you to get your
                    event listed on our website, allow attendees to purchase
                    tickets on the site, and advertise your event!
                  </span>
                </span>

                <span class="quadrant-footer">Sign up</span>
              </div>
            </div>
            <div className="col">
              <div class="quadrant">
                <span class="quadrant-header">
                  <span class="title">Event Attendees</span>
                  <span class="subtitle">
                    For attendees, you will be able to browse events, buy
                    tickets, and view videos of events! Sit tight until we roll
                    these features out!
                  </span>
                </span>

                <span class="quadrant-footer">Create Account</span>
              </div>
            </div>
            <div className="col">
              <div class="quadrant">
                <span class="quadrant-header">
                  <span class="title">Collegiate Teams</span>
                  <span class="subtitle">
                    For collegiate teams, we welcome you to join the platform to
                    feature your team, share team details, and gain a
                    centralized place for recognition beside other teams in the
                    circuit!
                  </span>
                </span>

                <span class="quadrant-footer">Sign Up Team</span>
              </div>
            </div>
            <div className="col">
              <div class="quadrant">
                <span class="quadrant-header">
                  <span class="title">Collegiate competitions</span>
                  <span class="subtitle">
                    For organizations and individuals who are hosting their own
                    Navrati events, we would like to welcome you to get your
                    event listed on our website, allow attendees to purchase
                    tickets on the site, and advertise your event!
                  </span>
                </span>

                <span class="quadrant-footer">Sign Up Event</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events-section">
        <div class="events-inner-container">
          <span className="section-title">Upcoming Events</span>
          <div class="carousel-container">
            <Slider {...eventSliderSettings}>
              <div className="event-card">
                <span className="event-card-graphic">
                  <span className="date-graphic">
                    <span>OCT</span>
                    <span>19</span>
                  </span>
                </span>
                <span className="event-card-info">
                  <span className="event-name">
                    Garba with Attitude Competition
                  </span>

                  <span className="event-location">
                    <i className="fas fa-location-arrow"></i>
                    United Center @ Chicag, IL
                  </span>
                </span>
              </div>
              <div className="event-card">
                <span className="event-card-graphic">
                  <span className="date-graphic">
                    <span>OCT</span>
                    <span>19</span>
                  </span>
                </span>
                <span className="event-card-info">
                  <span className="event-name">
                    Garba with Attitude Competition
                  </span>

                  <span className="event-location">
                    <i className="fas fa-location-arrow"></i>
                    United Center @ Chicag, IL
                  </span>
                </span>
              </div>
              <div className="event-card">
                <span className="event-card-graphic">
                  <span className="date-graphic">
                    <span>OCT</span>
                    <span>19</span>
                  </span>
                </span>
                <span className="event-card-info">
                  <span className="event-name">
                    Garba with Attitude Competition
                  </span>

                  <span className="event-location">
                    <i className="fas fa-location-arrow"></i>
                    United Center @ Chicag, IL
                  </span>
                </span>
              </div>
              <div className="event-card">
                <span className="event-card-graphic">
                  <span className="date-graphic">
                    <span>OCT</span>
                    <span>19</span>
                  </span>
                </span>
                <span className="event-card-info">
                  <span className="event-name">
                    Garba with Attitude Competition
                  </span>

                  <span className="event-location">
                    <i className="fas fa-location-arrow"></i>
                    United Center @ Chicag, IL
                  </span>
                </span>
              </div>
              <div className="event-card">
                <span className="event-card-graphic">
                  <span className="date-graphic">
                    <span>OCT</span>
                    <span>19</span>
                  </span>
                </span>
                <span className="event-card-info">
                  <span className="event-name">
                    Garba with Attitude Competition
                  </span>

                  <span className="event-location">
                    <i className="fas fa-location-arrow"></i>
                    United Center @ Chicag, IL
                  </span>
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <span className="section-title">Event Highlights</span>
        <div className="main-video-container">
          {/* Check out for further functionality of this package:
          https://www.npmjs.com/package/react-player */}
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=gOPEpsGJyCs"
          />
        </div>
        <div className="bottom-video-content">
          <span className="join-card">
            <span className="card-title">Join the Fun</span>
            <span className="card-desc">
              Interested in attending an event? Sign up now to purchase tickets!
            </span>
            <span className="card-action">Sign Up Now</span>
          </span>
          <span className="video-slider-container">
            <Slider {...videoSliderSettings}>
              <span className="video-slide">
                <ReactPlayer
                  controls={true}
                  url="https://www.youtube.com/watch?v=gOPEpsGJyCs"
                />
              </span>
              <span className="video-slide">
                <ReactPlayer
                  controls={true}
                  url="https://www.youtube.com/watch?v=gOPEpsGJyCs"
                />
              </span>
              <span className="video-slide">
                <ReactPlayer
                  controls={true}
                  url="https://www.youtube.com/watch?v=gOPEpsGJyCs"
                />
              </span>

              <span className="video-slide">
                <ReactPlayer
                  controls={true}
                  url="https://www.youtube.com/watch?v=gOPEpsGJyCs"
                />
              </span>
            </Slider>
          </span>
        </div>
      </div>

      <div className="host-section">
        <div className="overlapping-title">HOST</div>
        <div className="main-card">
          <div className="info-container">
            <span className="title">Navratri Events</span>
            <span className="description">
              On the next phase of the platform development, we will be building
              a gateway for Raas/Garba event hosts to promote their events, sell
              tickets, and manage event logistics! Event attendees seeking to
              attend Navratri events will be able to browse events, purchase
              tickets, and view promotion videos from those events!
            </span>
            <span className="actions">
              <button className="main-action">SIGN UP EVENT</button>
              <button className="secondary-action">CREATE ACCOUNT</button>
            </span>
          </div>
        </div>
      </div>

      <div className="compete-section">
        <div className="overlapping-title">Compete</div>
        <div className="main-card">
          <div className="info-container">
            <span className="title">Collegiate</span>
            <span className="description">
              For the first platform steps, we will be building a gateway for
              the collegiate Raas/Garba teams and competitions. Teams will be
              able to list their roster, share information about themselves,
              demonstrate achievements they have, exhibit their dance videos,
              and more. Competitions will be empowered to promote thier events,
              enable easy competition team lists, showcase their boards, exhibit
              videos, and present winners!
            </span>
            <span className="actions">
              <button className="main-action">SIGN UP TEAM</button>
              <button className="secondary-action">CREATE ACCOUNT</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
