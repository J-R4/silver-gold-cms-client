<template>
  <!-- This is Form login -->
  <div
    class=""
    id="form-login"
    style="height: 77vh; margin-top: 23vh;"
  >

    <div class="columns">

      <!-- This is Welcoming Title -->
      <div class="column">
        <div
          class="container"
          style="display: flex; justify-content: center; align-items: center; align-content: center;"
        >

          <div
            class="box"
            style="background-color: white;"
          >
            <img
              alt="Vue logo"
              src="../assets/sg.png"
            >
            <p class="subtitle is-white is-6">Place to find <strong>your precious</strong> and
              <i>to own it.</i>
            </p>

          </div>
        </div>
      </div>
      <!-- This is the end of Welcoming Title -->

      <div
        class="column is-half"
        style="display: flex; justify-content: center; align-items: center; align-content: center;"
      >
        <div style="display: flex; justify-content: center; align-items: center; align-content: center;">
          <form
            class="box"
            style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
          >
            <div>
              <p style="margin: 0px 0px 10px 0px;">
                Login
              </p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  v-model="email"
                  class="input"
                  id="email"
                  type="email"
                  placeholder="e.g. PogChamp@example.com"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-dove"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  v-model="password"
                  class="input"
                  id="password"
                  type="password"
                  placeholder="********"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
              </div>
            </div>

            <button
              type="submit"
              id="login-btn"
              class="button is-black"
              @click.prevent="login"
            >Login</button>
            <button
              id="link-register-reg"
              class="button is-white"
              style="border-color:grey;"
              @click.prevent="changePage('register-page')"
            >Register</button>
            <br><br>
            <div>
              <div
                class="button is-small is-white"
                style="padding: 0px;"
              >
                <g-signin-button
                  :params="params"
                  @success="onSignInSuccess"
                  @error="onSignInError"
                >
                  <i class="fab fa-google"></i> Google Sign-in
                </g-signin-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- This is the end of login page -->
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
</style>
