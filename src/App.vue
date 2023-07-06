<template>
  <div>
    <HeroSection />
    <TestimonialSection id="testimonials" />
    <ProcessSection />
    <PropertiesSection id="properties" />
    <WaitlistSection />
    <FooterSection id="contact" />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ProcessSection from './components/ProcessSection.vue';
import PropertiesSection from './components/PropertiesSection.vue';
import WaitlistSection from './components/WaitlistSection.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeroSection,
    TestimonialSection,
    ProcessSection,
    PropertiesSection,
    WaitlistSection, FooterSection
  }
}
</script>
