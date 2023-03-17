<template>
    <div>
        <section class="navbar-1">
            <div class="content">
                <div class="logo"  @click="$router.push(`/admin`)">
                    <img src="@/assets/images/logoSimro.jpg" alt="">
                </div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

                <ul class="nav-link">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Magasin</a></li>
                    <li><a href="#">Produts</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact </a></li>

                </ul>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: 'ComponentNavbar',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    setup() {
        document.addEventListener('DOMContentLoaded',()=>{

            const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-link");
        const links = document.querySelectorAll(".nav-link li");

        hamburger.addEventListener('click', () => {
            //Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });

            //Hamburger Animation
            hamburger.classList.toggle("toggle");
        });
        
        
        })
     
    }
};
</script>

<style lang="css" scoped>
/* navbar user */
.navbar-1 {
    width: 100%;
    height: 70px;
    background-color: var(--blanc);
    padding: 10px;
}

.navbar-1 .content {
    margin: 0 auto;
    max-width: 1140px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.navbar-1 .content .logo {
    width: 90Px;
    
}

.navbar-1 .content .logo img {
    width: 100%;
    height: 100%;
    cursor: pointer;

}

.nav-link {
    display: flex;
    list-style: none;
    width: 53vw;
    padding: 0 0.7vw;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
}



.nav-link li a {
    text-decoration: none;
    margin: 0 0.7vw;
    color: var(--noir);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}

.navbar-1 .content .nav-link li a:hover {
    color: var(--vert);
    opacity: 1;

}

.hamburger div {
    width: 30px;
    height: 2px;
    background: var(--noir);
    margin: 5px;
    transition: all 0.3s ease;
}

.hamburger {
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 768px) {
    nav {
        position: fixed;
        z-index: 3;
    }

    .hamburger {
        display: block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 6%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }

    .nav-link {
        position: absolute;
        top: 60px;
        left: -10px;
        background: #f5f5f5;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(11px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
        z-index: 200;
    }

    .nav-link.open {
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
        padding: 0 30px 10px;
    }

    .nav-link li {
        opacity: 0;
    }

    .nav-link li:nth-child(1) {
        transition: all 0.5s ease 0.2s;
    }

    .nav-link li:nth-child(2) {
        transition: all 0.5s ease 0.4s;
    }

    .nav-link li:nth-child(3) {
        transition: all 0.5s ease 0.6s;
    }

    .nav-link li:nth-child(4) {
        transition: all 0.5s ease 0.7s;
    }

    .nav-link li:nth-child(5) {
        transition: all 0.5s ease 0.8s;
    }

    .nav-link li:nth-child(6) {
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }

    .nav-link li:nth-child(7) {
        transition: all 0.5s ease 1s;
        margin: 0;
    }

    li.fade {
        opacity: 1;
        width: 100%;
        border-bottom: 1px solid #ddd;
        padding: 20px 0;
    }
}

/*Animating Hamburger Icon on Click*/
.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
    transition: all 0.7s ease;
    width: 0;
}

.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}

/* navbar user fin */</style>