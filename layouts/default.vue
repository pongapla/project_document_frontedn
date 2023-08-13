<script lang="ts" setup></script>

<template>
  <div>
    <div class="row">
    <div class="col-3"> <AppHeader /> </div>
    <div class="col-6"> <slot /> </div>
    <div class="col-3"> <AppFooter /> </div>
    </div>
  </div>
</template>

<style scoped></style>
