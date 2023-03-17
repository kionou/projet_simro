<template>
  <div>

    <section class="navbar-2">
      <div class="top">
        <i class='bx bx-menu' @click="ouvert"></i>
        <div class="compte-users">
          <div class="profile">
            <i class='bx bxs-user'></i>
            <span>Mon compte</span>
          </div>
          <div class="menu">
            <ul>
              <li>
                <i class='bx bx-edit-alt'></i>
                <a href="#">My profile</a>
              </li>
              <li>
                <i class='bx bx-log-in-circle'></i>
                <a href="#">Deconnexion</a>
              </li>


            </ul>

          </div>

        </div>
      </div>
    </section>

    <div class="sidebar  ">
      <ul class="nav-links">
        <li class="active">
          <router-link to="/admin">
            <i class='bx bx-home-alt'></i>
            <span class="link_name">Accueil</span>
          </router-link>
          <ul class="sub-menu blank">
            <li><router-link to="/admin" class="link_name">Accueil</router-link></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <a href="#">
              <i class='bx bxs-cube'></i>
              <span class="link_name">Services</span>
            </a>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Services</a></li>
            <li><router-link to="admin/user">service1</router-link></li>
            <li><a href="#">service2</a></li>
            <li><a href="#">service3</a></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <a href="#">
              <i class='bx bx-book-alt'></i>
              <span class="link_name">Users</span>
            </a>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Users</a></li>
            <li><a href="#">User 1</a></li>
            <li><a href="#">User 2</a></li>
            <li><a href="#">User 3</a></li>
          </ul>
        </li>
        <!-- <li>
            <a href="#">
              <i class='bx bx-pie-chart-alt-2' ></i>
              <span class="link_name">Analytics</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Analytics</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-line-chart' ></i>
              <span class="link_name">Chart</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Chart</a></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i class='bx bx-plug' ></i>
                <span class="link_name">Plugins</span>
              </a>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><a class="link_name" href="#">Plugins</a></li>
              <li><a href="#">UI Face</a></li>
              <li><a href="#">Pigments</a></li>
              <li><a href="#">Box Icons</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-compass' ></i>
              <span class="link_name">Explore</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Explore</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-history'></i>
              <span class="link_name">History</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">History</a></li>
            </ul>
          </li> -->
        <li>
          <a href="#">
            <i class='bx bx-cog'></i>
            <span class="link_name">Setting</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Setting</a></li>
          </ul>
        </li>
        <li>

        </li>
      </ul>
    </div>

    <section class="home-section">
      <div class="home-content">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CptDashboard',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    async ouvert(){
    console.log("ouvert");
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
    
    
    }

  },
  setup() {
    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.querySelector('.compte-users')
      menuToggle.addEventListener("click", () => {
        const toggleMenu = document.querySelector(".menu")
        toggleMenu.classList.toggle('active')

      })


      const icon = document.querySelectorAll('.iocn-link')

      for (let j = 0; j < icon.length; j++) {
        icon[j].parentElement.addEventListener("click", () => {
          console.log("arrowParent", icon);
          icon[j].parentElement.classList.toggle("showMenu");

        });

      }
      // let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".bx-menu");
      console.log(sidebarBtn);
      // if (window.screen.width >= 768) {
      //   sidebar.classList.toggle("close");
      // }
      // sidebarBtn.addEventListener("click", () => {
      //   console.log('close');
      //   sidebar.classList.toggle("close");
      // });

    })

  }
};
</script>

<style lang="css" scoped>
/* navbar admin */

.navbar-2 .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background-color: var(--vert);

}

.navbar-2 .top .bx-menu {
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--jaune);
}

.navbar-2 .top .compte-users {
  padding: 1px;
  color: var(--blanc);
  font-size: 13px;
  position: relative;
}


.navbar-2 .top .compte-users .bxs-user {
  border-radius: 50%;
  margin-right: 6px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blanc);
  color: var(--noir);

}

.navbar-2 .top .compte-users .profile {
  display: flex;
  align-items: center;
  cursor: pointer;

}

.navbar-2 .top .compte-users .menu {
  position: absolute;
  top: 46px;
  right: -6px;
  padding: 10px 15px;
  background-color: var(--blanc);
  width: 200px;
  border-radius: 6px;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
  z-index: 101;


}

.navbar-2 .top .compte-users .menu.active {
  visibility: visible;
  opacity: 1;
}

.navbar-2 .top .compte-users .menu::before {

  content: '';
  position: absolute;
  top: -8px;
  right: 15px;
  width: 17px;
  height: 17px;
  background-color: var(--blanc);
  transform: rotate(45deg);

}

.navbar-2 .top .compte-users .menu ul li {
  list-style: none;
  padding: 3px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  color: var(--gris2);

}

.navbar-2 .top .compte-users .menu ul li:hover {
  background-color: var(--vert);
  border-radius: 3px;
  color: var(--blanc);

}

.navbar-2 .top .compte-users .menu ul li a {

  display: inline-block;
  text-decoration: none;
  color: var(--gris2);
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  margin-left: 5px;

}

.navbar-2 .top .compte-users .menu ul li a:hover {
  color: var(--blanc);

}

/* fin navbar admin */


/* sidebar debut */

.sidebar {
  position: absolute;
  height: 100vh;
  width: 230px;
  z-index: 100;
  transition: all 0.5s ease;
  background-color: var(--bggris1);
}

.sidebar.close {
  width: 50px;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 15px;
  color: #11101d;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

/* .sidebar .logo-details .logo_name{
        font-size: 22px;
        color: var(--blanc);
        font-weight: 600;
        transition: 0.3s ease;
        transition-delay: 0.1s;
      }
      .sidebar.close .logo-details .logo_name{
        transition-delay: 0s;
        opacity: 0;
        pointer-events: none;
      } */
.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
  cursor: pointer;
}

.sidebar .nav-links>li.active:before,
.sidebar .nav-links>li:before {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 4px;
  height: 100%;
  background: var(--vert);
  opacity: 0;
  transition: all 0.25s ease-in-out;
  border-top-right-radius: 5px;
  border-top-right-radius: 5px;
}

.sidebar .nav-links li.active:before,
.sidebar .nav-links li:hover:before {
  opacity: 1;

}

.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.close .nav-links li .iocn-link {
  display: block
}

.sidebar .nav-links li i {
  height: 35px;
  min-width: 40px;
  text-align: center;
  line-height: 50px;
  color: var(--gris1);
  font-size: 15px;
  cursor: pointer;
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar .nav-links li.active i,
.sidebar .nav-links li:hover i {
  color: var(--blanc);
}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
  transition: 1s;
}

.sidebar.close .nav-links i.arrow {
  display: none;
}

.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
}

.sidebar .nav-links li a .link_name {
  font-size: 13px;
  font-weight: 400;
  color: var(--gris1);
  transition: all 0.4s ease;
}

.sidebar .nav-links li.active a .link_name,
.sidebar .nav-links li:hover a .link_name {
  color: var(--blanc);
}

.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: var(--bggris2);
  display: none;
  transition: all 10s ease;

}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
  transition: all 10s ease;
}

.sidebar .nav-links li .sub-menu a {
  color: var(--gris1);
  font-size: 12px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
  color: var(--blanc);
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
}

/* sidebar fin */

/* home section debut */

.home-section {
  position: relative;
  height: 100vh;
  left: 230px;
  width: calc(100% - 230px);
  /* border: 1px solid blue; */
}

.sidebar.close~.home-section {
  left: 50px;
  width: calc(100% - 50px);
}

.home-section .home-content {
  height: 60px;
  display: flex;
  align-items: center;
}

.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
}

.home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}

.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}

/* home section fin */</style>