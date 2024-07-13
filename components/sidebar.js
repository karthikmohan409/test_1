class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var page = this.getAttribute('data-page')
    this.innerHTML = `

      <div class="sidebar">
        <div class="sidebar-top" style="gap:10px;">
          <img src="images/menu.png" class="menu">
          <div class="flex-align3">
            <img src="images/ramblers-logo.png" class="logo" style="width:50px;">
            <h6 style="color:#2D2D2D;font-size: 10px;padding-left: 5px;">Powered by</h6>
            <img src="images/logo.png" class="logo" style="width:50px;filter:invert(.8);">
          </div>
        </div>
        <div class="sidebar-nav">
          <div id="accordion" class="nav-section ">
            <h6 class="section-title">MAIN</h6>
            <a href="dashboard.html" class="nav-item-sidebar ${page == 'dashboard' ? 'active' : ''}">
              <img src="images/dashboard.png">
              <h6>Dashboard</h6>
            </a>
            <div  class="collapsed" data-bs-toggle="collapse" href="#collapse1">
              <div class="nav-item-sidebar flex-align">
                <div class="flex-align2 g2">
                  <img src="images/acl.png">
                  <h6>ACL</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse1" class="collapse" data-bs-parent="#accordion">
                <div class=" nav-collapse">
                  <h6>Collapse 1</h6>
                  <h6>Collapse 2</h6>
                </div>
              </div>
            </div>
            <div class="nav-item-sidebar">
              <img src="images/club-management.png">
              <h6>Club Management</h6>
            </div>
            <div  class=" collapsed " data-bs-toggle="collapse" href="#collapse2">
              <div class="nav-item-sidebar flex-align">
                <div class="flex-align2 g2">
                  <img src="images/registration.png">
                  <h6>Member Registration</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse2" class="collapse" data-bs-parent="#accordion">
                <div class=" nav-collapse">
                  <h6>Collapse 1</h6>
                  <h6>Collapse 2</h6>
                </div>
              </div>
            </div>
            <a href="members.html" class="nav-item-sidebar ${page == 'members' ? 'active' : ''}" >
              <img src="images/members.png">
              <h6>Members</h6>
            </a>
            <a href="ground.html" class="nav-item-sidebar ${page == 'ground' ? 'active' : ''}" >
              <img src="images/members.png">
              <h6>Ground</h6>
            </a>
           
            <a href="team-category.html" class="nav-item-sidebar ${page == 'team-category' ? 'active' : ''}">
              <img src="images/team-category.png" class="nav-item-sidebar-img">
              <h6>Team Category</h6>
            </a>
            <a href="squad.html" class="nav-item-sidebar ${page == 'squad' ? 'active' : ''}">
              <img src="images/squad.png" class="nav-item-sidebar-img">
              <h6>Squads</h6>
            </a>
            <div  class=" collapsed " data-bs-toggle="collapse" href="#collapse3">
              <div class="nav-item-sidebar flex-align ${page == 'practice-schedule' || page == 'practice-matches' ? 'active' : ''}">
                <div class="flex-align2 g2">
                  <img src="images/programs.png">
                  <h6>Programs</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse3" class="collapse ${page == 'practice-schedule' || page == 'practice-matches' ? 'show' : ''} data-bs-parent="#accordion"  data-bs-parent="#accordion">
                <a href="practice-schedule.html" class="nav-collapse nav-item-sidebar  ${page == 'practice-schedule' ? 'active' : ''}">
                  <h6>Daily Practice schedule</h6>
                </a>
                <a href="practice-matches.html" class="nav-collapse nav-item-sidebar  ${page == 'practice-matches' ? 'active' : ''}">
                  <h6>Practice match Schedule</h6>
                </a>
              </div>
            </div>
            <div  class=" collapsed " data-bs-toggle="collapse" href="#collapse4">
              <div class="nav-item-sidebar flex-align ${page == 'team-selection' || page == 'schedule-match' ? 'active' : ''}">
                <div class="flex-align2 g2">
                  <img src="images/match-management.png" >
                  <h6>Match Management</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse4" class="collapse  ${page == 'team-selection' || page == 'schedule-match' ? 'show' : ''} data-bs-parent="#accordion">
                
                <a href="schedule-match.html" class="nav-collapse nav-item-sidebar  ${page == 'schedule-match' ? 'active' : ''}">
                  <h6>Schedule Match</h6>
                </a>
                <a href="team-selection.html" class="nav-collapse nav-item-sidebar  ${page == 'team-selection' ? 'active' : ''}">
                  <h6>Team selection &
                  Announcement</h6>
                </a>

              </div>

            </div>
            <a href="payment.html" class="nav-item-sidebar ${page == 'payment' ? 'active' : ''}" >
              <img src="images/payment.png" class="nav-item-sidebar-img">
              <h6>Payment</h6>
            </a>
            
          </div>
          <div class="nav-section ">
            <h6 class="section-title">CLUB</h6>
            
            <div  class=" collapsed " data-bs-toggle="collapse" href="#collapse5">
              <div class="nav-item-sidebar flex-align">
                <div class="flex-align2 g2">
                  <img src="images/matches.png">
                  <h6>Matches</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse5" class="collapse" data-bs-parent="#accordion">
                <div class=" nav-collapse">
                  <h6>Collapse 1</h6>
                  <h6>Collapse 2</h6>
                </div>
              </div>
            </div>
            <div  class=" collapsed " data-bs-toggle="collapse" href="#collapse6">
              <div class="nav-item-sidebar flex-align">
                <div class="flex-align2 g2">
                  <img src="images/club-documents.png">
                  <h6>Club Documents</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse6" class="collapse" data-bs-parent="#accordion">
                <div class=" nav-collapse">
                  <h6>Collapse 1</h6>
                  <h6>Collapse 2</h6>
                </div>
              </div>
            </div>
            
            <a href="club-executive.html" class="nav-item-sidebar ${page == 'club-executive' ? 'active' : ''}" >
              <img src="images/club-excutives.png">
              <h6>Club Executives</h6>
            </a>
            <a href="sponsors.html" class="nav-item-sidebar ${page == 'sponsors' ? 'active' : ''}" >
              <img src="images/sponsors.png" class="nav-item-sidebar-img">
              <h6>Adv Display Management</h6>
            </a>
            <!--<a  class=" collapsed " data-bs-toggle="collapse" href="#collapse7">
              <div class="nav-item-sidebar flex-align">
                <div class="flex-align2 g2">
                  <img src="images/club-excutives.png">
                  <h6>Club Executives</h6>
                </div>
                <img src="images/arrow-bottom.png" class="arrow-bottom">
              </div>
              <div id="collapse7" class="collapse" data-bs-parent="#accordion">
                <div class=" nav-collapse">
                  <h6>Collapse 1</h6>
                  <h6>Collapse 2</h6>
                </div>
              </div>
            </a>-->
            <a href="registration-form.html" class="nav-item-sidebar ${page == 'registration-form' ? 'active' : ''}" >
              <img src="images/registration-form.png" class="nav-item-sidebar-img">
              <h6>Registration Form</h6>
            </a>
            
            
          </div>
          <div class="sidebar-bottom">
          <img src="images/copyright.png" >
          <h6>Copyright 2023 Rays Sports. All rights reserved.</h6>
        </div>
          
        </div>
        
      </div>
    `;
  }
}

customElements.define('sidebar-component', Sidebar);