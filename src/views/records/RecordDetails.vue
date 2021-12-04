<template>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <button @click="back" class="btn btn-primary active">← RWD</button>
        <button @click="redirect" class="btn btn-info">Home</button>
        <button @click="forward" class="btn btn-secondary">FWD →</button>
    </div>

  <div v-if="record" class="mt-5">
    <h1 class="display-1">{{ record && record.title }} details</h1>
    <h2 class="display-6">{{ record.details.artist }}</h2>
    <p><span class="fw-bold">Genre:</span> {{ record.details.genre }}</p>
    <p><span class="fw-bold">Released:</span> {{ record.details.released }}</p>
    <p><span class="fw-bold">Format:</span> {{ record.details.format }}</p>
    <hr />
    <p><span class="fw-bold">Cat ID:</span> {{ id }}</p>
    <p><span class="fw-bold">Price:</span> {{ record.price }}</p>
    <p><span class="fw-bold">Quantity owned:</span> {{ record.quantity }}</p>
    <hr />
    <img :src="makeImagePath(record)" alt="" class="img-fluid p-5 my-2" />
    <p v-if="record.collection"><span class="fw-bold">Collection:</span> <span class="text-uppercase">{{ record.collection }}</span></p>
  </div>
  <div v-else class="display-6">Grabbing Record Data...</div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js"

export default {
  props: ["id"],
  mixins: [imagePath],
  data() {
    return {
      record: null,
    }
  },
  methods: {
      back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
    redirect() {
      return this.$router.push({name: 'Home'})
    }
  },
  mounted() {
    fetch(`http://localhost:8000/records/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.record = data))
      .catch((err) => err.message)
  },
}
</script>

<style></style>
