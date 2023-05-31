<script>
export default {
  name: "JumboSearch",
  data() {
    return {
      image: '../src/assets/Logo_1'
    };
  },
  methods: {},
  mounted() { },
};
</script>

<template>
  <header>
    <!-- Creare container fluid -->
    <!-- Creare NavBar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img :src="image" alt="Logo">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
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
          <button type="button" class="btn btn-outline-secondary">Donate</button>
        </div>
      </div>
    </nav>
    <!-- Fine navbar -->
    <!-- Creare Jumbotron -->
    <div class="container jumbo">
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">MAKE A DIFFERENCE</h1>
          <p>As long as poverty, injustice & inequality persist, none of us can truly rest</p>
          <div class="jumbo-btn">
            <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
            <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;

header {
  background-color: aquamarine;
  // background-image: url(../assets/JumboTron.jpeg);
  border: 1px dashed black;

  .navbar {
    border: 1px dashed black;
    background-color: red;
    height: 100px;
    padding: 1rem;
    margin: 0 80px;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  .btn {
    margin: 0.5;
  }

  .jumbo {
    //@include flex(justify,text, align);
    border: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .jumbo-btn {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
