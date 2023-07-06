<template>
    <div class="footer-section">
        <h6 class="brand-name">felise</h6>
        <div class="newsletter">
            <p class="subheading">We denounce with righteous indignation and dislike men who are so beguiled and demoralized
                by the.</p>
            <form class="newsletter-form">
                <input class="input-text" type="text" placeholder="Your Email Address">
                <div> <button class="submit-btn">Sign up</button></div>
            </form>
        </div>
        <Splide :options="options" :has-track="false" :extensions="extensions">
            <SplideTrack>
                <SplideSlide>
                    <p class="splide-email">felise.trial@gmail.com</p>
                </SplideSlide>
            </SplideTrack>
        </Splide>

        <p class="watermark">Made with <span class="font-serif-italic">swag</span> by <span class="font-power-regular"><a
                    href="https://tanooshi.github.io/" target="_blank">tanooshi</a> </span>
        </p>
    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
export default {
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {
        const options = {
            type: 'loop',
            gap: '1rem',
            autoWidth: true,
            arrows: false,
            pagination: false,
            autoPlay: true

        }
        return { options, extensions: { AutoScroll } }
    }
}

</script>