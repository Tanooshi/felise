<template>
    <div class="socials-section">
        <div class="social-logo">
            <h2 class="title">Trusted by 50,000+ real estate developers, and 350 families.</h2>
            <div class="socials-splide">
                <Splide :options="options" :has-track="false" :extensions="extensions">
                    <SplideTrack>
                        <SplideSlide v-for="social in socials" :key="social">
                            <div class="social ">
                                <img :src="require(`../assets/img/2.1Socials/${social.img}`)" :alt="social.name">
                            </div>

                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </div>
        <div class="social-text">
            <h2 class="heading">Find homes that exceed your expectations.</h2>
            <p class="subheading">We specialize in selling high-end luxury residential properties all across beautiful
                Denver, Colorado.</p>
        </div>
        <div class="social-cards">
            <div class="card lg:col-span-2">
                <img src="../assets/img/2.2About/img-gomez-condo.png" alt="Gomez condo">
                <div class="card-overlay">
                    <div class="card-text">
                        <h3 class="title">Gomez Condo</h3>
                        <p class="subtitle">123 Pedro Santos St., Naga City</p>
                    </div>

                    <button class="primary-btn ">Schedule Tour</button>
                </div>

            </div>
            <div class="card">
                <img src="../assets/img/2.2About/img-fornaleza-dining-view.png" alt="Fornaleza's">
                <div class="card-overlay">
                    <div class="card-text">
                        <h3 class="title">Fornaleza’s</h3>
                        <p class="subtitle">Seoul, South Korea</p>
                    </div>


                </div>

            </div>
            <div class="card">
                <img src="../assets/img/2.2About/img-maybeln-bluehouse.png" alt="Gomez condo">
                <div class="card-overlay">
                    <div class="card-text">
                        <h3 class="title">Maybeln</h3>
                        <p class="subtitle">Edmonton, Canada</p>
                    </div>


                </div>

            </div>
        </div>


    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import socials from '../assets/data/socials.json'
export default {
    mounted() {
        AutoScroll
    },
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {
        const options = {
            type: 'loop',
            gap: '1rem',
            autoplay: true,
            arrows: false,
            autoWidth: true,
            perPage: 1,
            mediaQuery: 'min',
            padding: '2rem',
            pagination: false,
            autoSroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false
            },
            breakpoints: {
                768: {
                    gap: '2rem'
                },
                1280: {
                    gap: '3rem'
                }
            }
        };
        return {
            options, extensions: { AutoScroll }, socials
        }
    }
}
</script>