<script>
import { store } from '../data/store';
export default {
  name: "JumboSearch",
  data() {
    return {
      store,

    };
  },
  methods: {},
  mounted() { },
};
</script>

<template>
  <header>
    <!-- Creare NavBar -->
    <!-- Creare container fluid -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img id="logo" src="../assets/Logo_1.png" alt="Logo">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <!-- <li class="navbar-nav" v-for="navLink in store.navLinks" :key="navLink">{{ navLink }}</li> -->
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mission</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Causes
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" v-for="drop in store.drops" :key="drop">{{ drop }}</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Journal</a>
            </li>
          </ul>
          <button type="button" class="btn-nav">Donate</button>
        </div>
      </div>
    </nav>
    <!-- Fine navbar -->
    <!-- Creare Jumbotron -->
    <div class="container-fluid jumbo">
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="on-side">
          <div>
            <button class="prebuilts"><i class="fa-solid fa-folder"></i>Prebuilds</button>
          </div>
          <div>
            <button class="on-sale"><i class="fa-solid fa-dollar-sign"></i><span>45</span> On
              Sale</button>
          </div>
        </div>
        <div class="jumbo-container container py-5">
          <h1 class="display-5 fw-bold title">MAKE A DIFFERENCE</h1>
          <p class="subtitle">As long as poverty, injustice & inequality persist, none of us can truly rest.</p>
          <div class="jumbo-btn">
            <button class="btn btn-lg" type="button" v-for="button in store.buttons" :key="button">{{ button }}</button>
            <!-- <button class="btn btn-lg" type="button">Our Mission</button> -->
            <!-- <button class="btn btn-lg" type="button">Donate Now</button> -->
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

header {
  width: 100%;
  height: 100%;
  background: url(../assets/JumboTron.jpeg) no-repeat center top;

  .container-fluid {
    position: relative;
  }

  .on-side {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: absolute;
    top: 1rem;
    right: 0;
    padding: 1rem;
    margin-bottom: 2rem;

  }

  .prebuilts,
  .on-sale {
    padding: 0.4rem;
    width: 70px;
    height: 70px;
    background-color: $supportColor;
    font-size: 15px;
    flex-wrap: wrap;
    border-radius: 15px;
    margin-top: 1rem;
    @include flex(center, center, center);

    &:hover {
      // background-color: $newThemeColor;
      color: $textColor;
      outline-color: $newThemeColor;
      transform: scale(1.2);
      transition: 0.3s;
    }

    &:active {
      background-color: transparent;
      color: $newThemeColor;
      box-shadow: 3px 6px 8px 1px rgba(167, 190, 217, 0.76);
      transform: translateY(4px);
    }

  }

  .on-sale span {
    font-size: 1.4rem;
    font-weight: bolder;
    color: green;
  }


  .on-side i {
    font-weight: bold;
    font-size: 20px;
    color: green;
    padding: 0.1rem;
  }


  .navbar {
    height: 80px;
    padding: 1rem;
    margin: 0 20px;

    #logo {
      height: 35px;
      width: 180px;
    }

  }

  a {
    color: $supportColor;
    margin: .5rem;

    &:hover {
      color: $newThemeColor;
    }
  }

  .btn-nav {
    width: 150px;
    font-size: 1rem;
    padding: 0.5rem;
    background: transparent;
    color: $newThemeColor;
    border: 1px solid $newThemeColor;
    border-radius: 10px;
    margin: 3rem;
    background: transparent;


    &:hover {
      background-color: $newThemeColor;
      color: $linkColor;
      outline-color: $newThemeColor;
      transform: scale(1.2);
      transition: 0.3s;
    }

    &:active {
      background-color: transparent;
      color: $newThemeColor;
      box-shadow: 3px 6px 8px 1px rgba(167, 190, 217, 0.76);
      transform: translateY(4px);
    }

  }

  .dropdown-menu a {
    color: $textColor;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }


  .btn {
    width: 200px;
    font-size: 1.5rem;
    background: transparent;
    color: $newThemeColor;
    border: 1px solid $newThemeColor;
    border-radius: 10px;
    margin: 3rem;
    background: transparent;


    &:hover {
      background-color: $newThemeColor;
      color: $linkColor;
      outline-color: $newThemeColor;
      transform: scale(1.2);
      transition: 0.3s;
    }

    &:active {
      background-color: transparent;
      color: $newThemeColor;
      box-shadow: 3px 6px 8px 1px rgba(167, 190, 217, 0.76);
      transform: translateY(4px);
    }

  }

  .jumbo-container {
    margin-top: 8rem;
  }

  .jumbo {
    @include flex(center, center, center);


    .title {
      font-size: 5rem;
      font-weight: bold;
    }

    .subtitle {
      font-size: 1.5rem;
      font-weight: light;
    }

    .title,
    .subtitle {
      color: $supportColor;
      padding: 1rem;
    }

    .jumbo-btn {
      display: flex;
      justify-content: space-evenly;

    }
  }

}
</style>
