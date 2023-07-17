<template>
    <div class="process-section">
        <h2 class="heading">Simply find your home with felise.</h2>
        <div class="process-splide">
            <Splide :options="options" :has-track="false">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        Prev
                    </button>
                    <button class="splide__arrow splide__arrow--next  bg-primary-orange">
                        <img src="../assets/img/4Process/arrow.png" alt="Arrow next">

                    </button>
                </div>
                <SplideTrack>
                    <SplideSlide v-for="process in processes" :key="process.id">
                        <div class="process-slide">
                            <div class="text-container">
                                <div>
                                    <p class="number">{{ process.id }}</p>
                                    <h3 class="title">{{ process.title }}</h3>
                                </div>

                                <p class="subtitle">{{ process.subtitle }}</p>
                            </div>
                            <div class="image">
                                <img :src="process.img" :alt="process.img">
                            </div>


                        </div>

                    </SplideSlide>
                </SplideTrack>
            </Splide>

        </div>
    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css'
import processes from "../assets/data/process.json"

export default {
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {
        const options = {

            gap: '1rem',
            autoPlay: true,
            arrows: true,
            pagination: false,
            perPage: 1,
            perMove: 1,

            mediaQuery: 'min',
            breakpoints: {
                768: {
                    padding: '2.5rem',
                    gap: '5rem'

                },
                1024: {
                    padding: { right: '20rem', left: '2.5rem' },
                    gap: '2.5rem'

                }
            }
        }
        return {
            options, processes
        }

    }

}
</script>