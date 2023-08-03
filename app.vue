<script setup lang="ts">
const { data } = await useFetch('/api/api')
</script>

<template>
  <pre>{{ data }}</pre>
</template>