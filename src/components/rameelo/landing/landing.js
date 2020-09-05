import React from 'react';

// Styles
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="rameelo-wrapper">
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
                      For organizations and individuals who are hosting their
                      own Navrati events, we would like to welcome you to get
                      your event listed on our website, allow attendees to
                      purchase tickets on the site, and advertise your event!
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
                      tickets, and view videos of events! Sit tight until we
                      roll these features out!
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
                      For collegiate teams, we welcome you to join the platform
                      to feature your team, share team details, and gain a
                      centralized place for recognition beside other teams in
                      the circuit!
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
                      For organizations and individuals who are hosting their
                      own Navrati events, we would like to welcome you to get
                      your event listed on our website, allow attendees to
                      purchase tickets on the site, and advertise your event!
                    </span>
                  </span>

                  <span class="quadrant-footer">Sign Up Event</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
