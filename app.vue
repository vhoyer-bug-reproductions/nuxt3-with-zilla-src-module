<script lang="ts" setup>
const questions = ref([
  {
    "id": "a",
    "title": "First slot title",
    "content": "Foo"
  },
  {
    "id": "b",
    "title": "First slot title",
    "content": "Feel free to put any content in this slot."
  },
  {
    "id": "c",
    "title": "First slot title",
    "content": "Foo"
  },
])
</script>

<template>
  <div style="padding: 16px;">
    <ZAccordion :items="questions">
      <template v-for="q in questions" #[q.id]>
        <div>
          {{ q.content}}
        </div>
      </template>
    </ZAccordion>
  </div>
</template>
