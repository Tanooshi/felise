<template>
    <div class="hero-section ">
        <TopNav />

        <div class="hero-content">
            <div class="text-center">
                <h1 class="heading">Join the Next Wave of Women Embracing Better Living.</h1>
                <p class="subheading">Felise Offers Affordable, Spacious, and Beautifully Designed Houses for Women 55+ to
                    Embrace the Next Chapter
                    of Their Lives
                </p>
                <a href="/felise/#process"><button class="primary-btn">Get Started</button></a>

            </div>

        </div>
        <div class="img-house"></div>
        <SocialsSection id="about-us" />

    </div>
</template>
<script>
import TopNav from './TopNav.vue'
import SocialsSection from './SocialsSection.vue';
export default {
    components: {
        TopNav, SocialsSection
    }
}
</script>