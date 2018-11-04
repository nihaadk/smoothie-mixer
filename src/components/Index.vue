<template>
  <div class="index container">
    <div class="row">
        <div class="col s12 m4" v-for="smoothie in smoothies" :key="smoothie.id">
          <div class="card hoverable">
            <div class="card-content">
              <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
              <h2 class="amber-text">{{ smoothie.title }}</h2>
              <hr>
              <ul class="ingredients">
                <li v-for="(ing , index) in smoothie.ingredients" :key="index">
                  <span class="chip">{{ ing }}</span>
                </li>
              </ul>
            </div>
            <span class="btn-floating btn-large halfway-fab yellow darken-2">
              <router-link :to="{ name: 'EditSmoothie', params: { smoothie_slug: smoothie.slug } }">
                <i class="material-icons edit">edit</i>
              </router-link>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    deleteSmoothie(id) {
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id;
          });
        });
    }
  },
  created() {
    db.collection("smoothies")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  margin-top: 60px;
  background-color: transparent;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}

.index .delete:hover {
  color: black;
  transform: rotate(15deg);
}

@media only screen and (max-width: 600px) {
    .card {
      margin-bottom: 50px;
    }

    .index .delete {
      top: 8px;
      right: 8px;
    }
}

</style>
