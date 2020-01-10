<template>
  <div>
    <LayOut>
      <template v-slot:header>
        header
      </template>
      <template>
        body
      </template>
      <template v-slot:footer="{fc,sign}">
        {{fc}}
        作者：{{sign}}
      </template>
    </LayOut>
  </div>
</template>

<script>
import LayOut from "@/components/slots/LayOut";
export default {
  components: {
    LayOut
  },
};
</script>

<style lang="scss" scoped></style>
