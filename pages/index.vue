<script lang="ts" setup>
useHead({
  title: 'Reproduction',
  bodyAttrs: {
    class: 'm-0 min-w-screen flex items-center justify-center bg-base',
  },
})

async function handleClick() {
  const res = await openConfirmDialog('Sure?')
  console.log(res)
}
</script>

<template>
  <div class="text-2xl font-bold w-full h-80vh flex items-center justify-center">
    <button @click="handleClick">
      hello
    </button>
  </div>
</template>

<style scoped>
</style>
