<template>
  <div class="home">
      <HeaderShayna />
      <HeroShayna />
      <BannerShayna />
      <InstagramSection />
      <ParthnerLogo />
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderShayna from '@/components/HeaderShayna.vue'
import BannerShayna from '@/components/BannerShayna.vue'
import HeroShayna from '@/components/HeroShayna.vue'
import InstagramSection from '@/components/InstagramSection.vue'
import ParthnerLogo from '@/components/ParthnerLogo.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    HeaderShayna,
    HeroShayna,
    BannerShayna,
    InstagramSection,
    ParthnerLogo,
    Footer
  }
}
</script>
