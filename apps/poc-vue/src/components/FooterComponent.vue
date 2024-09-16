<script setup lang="ts">
import logo from '@dronten/assets/src/logo.svg'
import SocialIconButton from './design-system-components/SocialIconButton.vue'
import { useSocialLinks } from '../composables/useSocialLinks'

const socialIconButtons = useSocialLinks()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="contact-links-wrapper">
        <div>
          <h2>Contact</h2>
          Contact links go here
        </div>

        <div>
          <h2>Snel naar</h2>
          <div>
            <p>
              <a href="https://www.dronten.nl/actueel/">Nieuws</a><br />
              <a href="https://www.dronten.nl/bestuur-organisatie/">Bestuur &amp; Organisatie</a><br />
              <a href="https://www.dronten.nl/contact/">Contact</a>
            </p>
          </div>
        </div>

        <div>
          <h2>Algemeen</h2>
          <div>
            <p>
              <a
                href="https://www.dronten.nl/wp-content/uploads/2024/06/Privacyverklaring-gemeente-Dronten_definitief-inclusief-Wpg-002.pdf"
                >Privacyverklaring</a
              ><br />
              <a href="https://www.dronten.nl/toegankelijkheidsverklaring/">Toegankelijkheidsverklaring</a><br />
              <a href="https://www.dronten.nl/proclaimer/">Proclaimer</a>
            </p>
          </div>
        </div>
      </div>
      <div class="logo-wrapper">
        <div>
          <img src="https://www.dronten.nl/wp-content/themes/theme-fusion/assets/img/skyline.svg" alt="" />
        </div>
        <div>
          <img :src="logo" alt="Logo gemeente Dronten" />
        </div>
      </div>

      <div class="social-icons-wrapper">
        <SocialIconButton
          v-for="socialIconButton in socialIconButtons"
          :key="socialIconButton.iconName"
          :link="socialIconButton.link"
          :iconName="socialIconButton.iconName"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  justify-content: center !important;
  margin-bottom: 3rem !important;
  color: #000;
}

.contact-links-wrapper {
  display: flex;
  flex-flow: row wrap;
  margin-block-end: 1.5rem;

  h2 {
    margin-block-end: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (width > 576px) {
    > div {
      flex: 0 0 50%;
      max-width: 50%;
    }
    > div:first-child {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }

  @media (width > 768px) {
    > div,
    > div:first-child {
      flex: 0 0 33%;
      max-width: 33%;
    }
  }
}

.logo-wrapper {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-block-end: 3rem;

  > div {
    padding-inline: 1rem;
  }

  > div:first-child {
    margin-block-end: 1rem;
  }

  @media (width > 576px) {
    > div:last-child {
      flex: 0 0 50%;
    }
  }
  @media (width > 768px) {
    > div:first-child {
      flex: 0 0 70%;
    }
    > div:last-child {
      flex: 0 0 30%;
    }
  }
}

.social-icons-wrapper {
  display: flex;
  gap: 0.5rem;
}
</style>
