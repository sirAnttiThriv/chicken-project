<script setup lang="ts">
const { data } = await useFetch('/api/data')
</script>

<template>
  {{ data }}
</template>