<script setup lang="ts">
import logo from '@dronten/assets/src/logo.svg'
</script>

<template>
  <div class="navbar" role="navigation" id="navbar">
    <div class="container">
      <div class="site-branding">
        <a href="/" aria-label="Gemeente Dronten">
          <img class="site-branding__svg" :src="logo" alt="" aria-label="Logo Gemeente Dronten" />
        </a>
        <h2 class="sr-only">Gemeente Dronten</h2>
      </div>

      <nav aria-label="primaire navigatie" id="site-navigation">
        <div>
          <ul id="menu-hoofdmenu" class="navbar-nav">
            <li itemType="https://www.schema.org/SiteNavigationElement">
              <RouterLink to="/">Home</RouterLink>
            </li>

            <li itemType="https://www.schema.org/SiteNavigationElement">
              <RouterLink to="/nieuws">Nieuws</RouterLink>
            </li>

            <li itemType="https://www.schema.org/SiteNavigationElement">
              <RouterLink to="/contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background: #fff;
  box-shadow:
    0 2px 3px 0 rgba(40, 44, 53, 0.08),
    0 1px 1px 0 rgba(40, 44, 53, 0.1);
  min-height: 75px;
  padding: 0;
  transition: all 0.15s ease-in-out;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.site-branding__svg {
  max-width: 175px;
  vertical-align: middle;
}

.navbar-nav {
  margin-block: 0;
  display: flex;
  list-style: none;
}

.navbar-nav li {
  position: relative;
}
.navbar-nav li:before {
  background-color: #55127b;
  bottom: -15px;
  content: '';
  height: 5px;
  left: 1rem;
  opacity: 0;
  position: absolute;
  transition: all 0.15s ease;
  visibility: hidden;
  width: calc(100% - 2rem);
  z-index: 1;
}

.navbar-nav li:has(.router-link-active):before,
.navbar-nav li:hover:before {
  opacity: 1;
  visibility: visible;
}

.navbar-nav li a {
  color: #000;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  padding: 1rem 0.5rem;
  text-align: center;
  text-decoration: none;
}
</style>
