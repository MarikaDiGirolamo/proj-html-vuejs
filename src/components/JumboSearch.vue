<script>
export default {
  name: "JumboSearch",
  data() {
    return {};
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
        <a class="navbar-brand" href="#">Logo</a>
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
    <!-- Creare Jumbotron -->
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: aqua;
  border: 1px dashed black;

  .navbar {
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
}
</style>
