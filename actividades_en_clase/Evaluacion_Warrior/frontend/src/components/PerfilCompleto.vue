<template>
  <div class="bg-custom">
    <!-- Header Section -->
    <header>
      <div class="row align-items-center mb-3">
        <div class="col-md-2">
          <!-- Recuadro para la imagen -->
          <div>
            <img src="../assets/img/User234.jpg" alt="Perfil" class="img-fluid rounded float-start m-3 border-img" />
          </div>
        </div>
        <div class="col-md-8">
          <h2>War Game</h2>
        </div>
      </div>
    </header>

    <!-- Main Content Section -->
    <div class="container-fluid mt-5">
      <div class="col">
        <section class="container custom-container">
          <div class="d-flex justify-content-between align-items-center mb-3"></div>
          <div class="d-flex justify-content-between align-items-center">
            <!-- Botones pequeños en columna -->
            <div class="d-grid gap-2 col-4 mx-auto">
              <button class="btn btn btn-primary buton-perfil mb-2" @click="goToManageWarrior">Gestionar Guerreros</button>
              <button class="btn btn btn-primary buton-perfil mb-2" @click="goToManageTypeRace">Gestionar Tipos de Raza</button>
            </div>
            <!-- Logo al lado de los botones -->
            <div class="ms-4">
              <img src="../assets/img/logotipo.png" alt="Logo" class="img-fluid logo_perfil" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    document.title = "Mi Perfil | TaskMaster Pro";
  },
  name: 'PerfilCompleto',
  methods: {
    goToManageWarrior() {
      // Redirige a la página de gestión de roles
      this.$router.push("/administrar-guerreros");
    },
    goToManageTypeRace() {
      // Redirige a la página de gestión de usuarios
      this.$router.push("/administrar-razas");
    },
  }
}
</script>
<style scoped>
@import "@/../../assets/css/perfil.css";
</style>
