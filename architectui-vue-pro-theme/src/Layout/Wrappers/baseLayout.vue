<template>
    <v-app id="benesApp">
    <div class="app-container app-theme-white">
        <transition name="fade" mode="out-in" appear>
            <Header :headerbg="headercolor"/>
        </transition>
        <transition name="fade" mode="out-in" appear>
            <Sidebar :sidebarbg="sidebarcolor"/>
        </transition>
        <div class="app-main__outer">
            <div v-if="!loggedIn" class="app-main__inner">
                <Login/>
            </div>
            <div v-if="loggedIn"> 
                <div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title"> Hello Dear {{ user["data"]["name"]}} </h5>
                <p class="card-text">Glad to meet you !</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            </div>
                </div>
            <transition name="fade" mode="out-in" appear>
                <Footer/>
            </transition>
        </div>
    </div>
    </v-app>
</template>

<script>
import { mapState } from 'vuex'

    import Header from "../Components/Header";
    import Sidebar from "../Components/Sidebar";
    import Footer from "../Components/Footer";
    import Login from '../../DemoPages/UserPages/Login.vue'
    // import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCog,
    } from '@fortawesome/free-solid-svg-icons'

    library.add(
        faCog,
    );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
            Login

        },
          computed: {
              
            ...mapState(['user', 'token']),
              loggedIn () {
            return this.$store.getters.loggedIn
  }

            
          },
        methods: {
            toggleConfig(className) {
                const el = document.body;
                this.isConfigOpen = !this.isConfigOpen;

                if (this.isConfigOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

        },

        data() {
            return {
                headercolor: null,
                sidebarcolor: null,

                isConfigOpen: false,

                colors: [
                    'bg-primary text-lighter',
                    'bg-secondary text-lighter',
                    'bg-success text-lighter',
                    'bg-info text-lighter',
                    'bg-warning text-darker',
                    'bg-danger text-lighter',
                    'bg-light text-darker',
                    'bg-dark text-lighter',
                    'bg-focus text-lighter',
                    'bg-alternate text-lighter',

                    'bg-vicious-stance text-lighter',
                    'bg-midnight-bloom text-lighter',
                    'bg-night-sky text-lighter',
                    'bg-slick-carbon text-lighter',
                    'bg-asteroid text-lighter',
                    'bg-royal text-lighter',
                    'bg-warm-flame text-darker',
                    'bg-night-fade text-darker',
                    'bg-sunny-morning text-darker',
                    'bg-tempting-azure text-darker',
                    'bg-amy-crisp text-darker',
                    'bg-heavy-rain text-darker',
                    'bg-mean-fruit text-darker',
                    'bg-malibu-beach text-darker',
                    'bg-deep-blue text-darker',
                    'bg-ripe-malin text-lighter',
                    'bg-arielle-smile text-lighter',
                    'bg-plum-plate text-lighter',
                    'bg-happy-fisher text-darker',
                    'bg-happy-itmeo text-darker',
                    'bg-mixed-hopes text-lighter',
                    'bg-strong-bliss text-lighter',
                    'bg-grow-early text-lighter',
                    'bg-love-kiss text-lighter',
                    'bg-premium-dark text-lighter',
                    'bg-happy-green text-lighter',
                ],
            }
        },
    }
</script>

<style>
.card {
    padding-bottom: 40%;
}

</style>