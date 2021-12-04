<template>
  <div class="home">
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-12 col-md-12 mx-auto">
          <h1 className="display-1 text-black">Record Stash!</h1>
          <p className="display-6 text-muted">
            This is your record collection - Grow it.
          </p>
        </div>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">
        <div v-if="records.length">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div
              v-for="record in records"
              :key="record.id"
              className="col mb-3 mb-lg-5"
            >
              <div className="card shadow-lg h-100">
                <div className="bg-light card-img-top">
                  <img :src="makeImagePath(record)" alt="" class="img-fluid p-5" />
                </div>

                <div className="card-body d-flex flex-column">
                  <router-link :to="{name: 'RecordDetails', params: {id: record.id } }" class="text-decoration-none">
                    <h2 className="text-color-gray-hover fw-light py-2 px-4">
                      {{ record.title }}
                    </h2>

                    <div
                      className="card-text text-muted fw-light fs-5 py-2 lh-sm"
                    >
                      <p>
                        <span class="fw-bold">Artist:</span>
                        {{ record.details.artist }}
                      </p>
                      <p>
                        <span class="fw-bold">Genre:</span>
                        {{ record.details.genre }}
                      </p>
                      <p>
                        <span class="fw-bold">Released:</span>
                        {{ record.details.released }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="display-6">Loading Your Records...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js"

export default {
  name: "Records",
  mixins: [imagePath],
  data() {
    return {
      records: [],
    }
  },
  mounted() {
    fetch('http://localhost:8000/records')
      .then(res => res.json())
      .then(data => this.records = data)
      .catch(err => err.message)
  }
}
</script>

<style></style>
