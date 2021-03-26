<template>
  <div>
    <div
      class="column"
      style="display: flex; justify-content: center; align-items: center; align-content: center; margin-top: 10px;"
    >
      <div style="display: flex; justify-content: center; align-items: center; align-content: center;">
        <form
          class="box"
          style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
        >
          <div>
            <p style="margin: 0px 0px 10px 0px;">
              Edit Product
            </p>
          </div>

          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input
                v-model="name"
                class="input"
                id="name"
                type="text"
                :placeholder="theProduct.name"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-prescription-bottle"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Image URL</label>
            <div class="control has-icons-left">
              <input
                v-model="imageURL"
                class="input"
                id="imageURL"
                type="text"
                :placeholder="theProduct.image_url"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-link"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Price </label>
            <i>(previous value: Rp. {{theProduct.price}},- )</i>
            <div class="control has-icons-left">
              <input
                v-model="price"
                class="input"
                id="price"
                type="number"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-dollar-sign"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Stock</label>
            <i>(previous value: {{theProduct.stock}} )</i>
            <div class="control has-icons-left">
              <input
                v-model="stock"
                class="input"
                id="stock"
                type="number"
                :placeholder="theProduct.stock"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-list-ol"></i>
              </span>
            </div>
          </div>

          <div class="field">

            <div class="control has-icons-left">
              <label class="label">Category <i>(previous value: {{theProduct.category}} )</i> <br></label>
              <div class="select is-link">
                <span class="icon is-small is-left">
                  <i class="fas fa-align-justify"></i>
                </span>
                <select v-model="category">
                  <option
                    v-for="cat in categories"
                    :key="cat.id"
                  >{{cat.category}}</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="button is-black"
            @click.prevent="editOne"
          >Edit Product</button>
          <button
            id="link-register-reg"
            class="button is-white"
            style="border-color:grey;"
          >
            <router-link to="/products">Cancel</router-link>
          </button>
          <br><br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'editProd',
  data () {
    return {
      imageURL: '',
      name: '',
      price: 0,
      stock: 0,
      category: ''
    }
  },
  computed: {
    ...mapState(['readyId', 'theProduct', 'categories'])
  },
  methods: {
    editOne () {
      this.$store.dispatch('editProduct', {
        imageURL: this.imageURL,
        name: this.name,
        price: this.price,
        stock: this.stock
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOneProduct', this.readyId)
    this.$store.dispatch('getCategories', this.readyId)
  }
}
</script>

<style>
</style>
