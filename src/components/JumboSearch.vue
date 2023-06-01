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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
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
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Journal</a>
            </li>
          </ul>
          <button type="button" class="btn btn-outline-warning">Donate</button>
        </div>
      </div>
    </nav>
    <!-- Fine navbar -->
    <!-- Creare Jumbotron -->
    <div class="container-fluid jumbo">
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">MAKE A DIFFERENCE</h1>
          <p>As long as poverty, injustice & inequality persist, none of us can truly rest</p>
          <div class="jumbo-btn">
            <button class="btn btn-lg" type="button">Our Mission</button>
            <button class="btn btn-lg" type="button">Donate Now</button>
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



  .navbar {
    height: 80px;
    padding: 1rem;
    margin: 0 80px;

    #logo {
      height: 35px;
      width: 180px;
    }

  }

  a {
    color: $supportColor;

    &:hover {
      color: $newThemeColor;
    }

    // &:active {
    //   color: $newThemeColor;
    // }
  }

  .dropdown-menu a {
    color: $textColor;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }


  .btn {
    color: $newThemeColor;
    border: 1px solid #A7BED3;
    margin: 3rem;
    background: transparent;


    &:hover {
      background: transparent;
      color: $newThemeColor;
      outline-color: $newThemeColor;
    }

  }

  .jumbo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1,
    p {
      color: $supportColor;
      padding: 1rem;
    }

    .jumbo-btn {
      display: flex;
      justify-content: space-evenly;
      // @include button-outline-variant

    }
  }

}
</style>
