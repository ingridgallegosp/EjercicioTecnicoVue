<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/history">history</RouterLink>
                <RouterLink to="/detail">detail</RouterLink>

            </nav>
        </div>
    </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
