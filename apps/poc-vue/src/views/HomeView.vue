<script setup lang="ts">
import DrontenButton from '../components/design-system-components/DrontenButton.vue'
</script>

<template>
  <div class="container">
    <h1>Proof of Concept: Integratie van een Headless CMS met Frontend en Component Library</h1>

    <p>
      Voor dit Proof of Concept (POC) is een website ontwikkeld om de haalbaarheid en voordelen van het gebruik van een
      headless CMS in combinatie met een frontend en een component library te demonstreren. Het doel van deze POC is om
      te bewijzen dat een headless CMS een flexibele en efficiënte oplossing kan zijn voor het beheren en presenteren
      van content op een moderne, dynamische website.
    </p>

    <h2>Functionaliteiten</h2>

    <ul>
      <li>
        <h3>Headless CMS Integratie:</h3>
        <p>
          De website maakt gebruik van de Gemeente Dronten websites als headless CMS als centrale bron voor
          contentbeheer. De huidige Dronten website, OpenPDC en OpenPUB bronnen worden gebruiken en eventual kan er een
          Typo3 of ander CMS ook gebruik kunnen worden. Omdat de content los is van de presentatie, wat meer
          flexibiliteit biedt in de manier waarop en waar de content wordt weergegeven word dit makkelijker aanpasbaar
        </p>
      </li>
      <li>
        <h3>Frontend Implementatie:</h3>
        <p>
          De frontend van de website is gebouwd met behulp van moderne webtechnologieën, wat zorgt voor een responsieve
          en gebruiksvriendelijke interface. De content wordt dynamisch geladen vanuit het headless CMS, wat zorgt voor
          een naadloze gebruikerservaring.
        </p>
      </li>
      <li>
        <h3>Component Library:</h3>
        <p>
          Een component library is geïntegreerd om herbruikbare UI-componenten te bieden. Dit maakt het eenvoudiger om
          consistente en schaalbare interfaces te creëren, terwijl de ontwikkelingstijd wordt verkort.
        </p>
      </li>
      <li>
        <h3>Data van Meerdere Bronnen:</h3>
        <p>
          De website haalt data op van meerdere bronnen, die vervolgens op de website worden weergegeven. Dit toont aan
          hoe eenvoudig het is om een headless CMS te combineren met andere datastreams, wat een rijke en gevarieerde
          gebruikerservaring oplevert.
        </p>
      </li>
    </ul>

    <h2>Conclusie</h2>
    <p>
      Dit POC illustreert de kracht en flexibiliteit van een headless CMS in combinatie met een frontend en een
      component library. Door content op deze manier te beheren en te presenteren, kunnen we een toekomstbestendige en
      schaalbare oplossing bieden die aan de veranderende eisen van gebruikers en bedrijven voldoet.
    </p>

    <hr style="margin-block-start: 4rem; margin-block-end: 2rem" />

    <DrontenButton @click.prevent="() => $router.push({ path: '/contact' })">Bekijk het eerste onderdeel</DrontenButton>
  </div>
</template>
