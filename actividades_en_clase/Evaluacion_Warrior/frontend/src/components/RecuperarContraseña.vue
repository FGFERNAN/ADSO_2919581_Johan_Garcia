<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center">
          <h1 class="d-block mt-3">Recuperar Contraseña</h1>
        </div>
        <form @submit.prevent="handleSubmit" class="mx-auto needs-validation custom-recuperarContraseña">
          <!-- Campo para Correo Electrónico -->
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
              <div class="form-floating">
                <input v-model="email" type="email" class="form-control border-input" id="email"
                  placeholder="Correo electrónico" required />
                <label for="email">Correo Electrónico</label>
                <div class="invalid-feedback">
                  Por favor ingrese su correo electrónico.
                </div>
              </div>
            </div>
          </div>

          <!-- Campo para Código Enviado -->
          <div class="mb-3 mt-4">
            <label for="code" class="form-label">Código Enviado</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-solid fa-hashtag"></i></span>
              <div class="form-floating">
                <input v-model="code" type="number" class="form-control border-input" id="code" placeholder="Código"
                  min="100000" max="999999" maxlength="6" required />
                <label for="code">Código</label>
                <div class="invalid-feedback">
                  Por favor ingrese su código (6 caracteres).
                </div>
              </div>
            </div>
          </div>

          <!-- Botón de Enviar -->
          <div class="d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-primary mt-3 buton-recuperar-contraseña" type="submit">Siguiente</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    document.title = "Recuperar Contraseña | TaskMaster Pro";
  },
  data() {
    return {
      email: '',
      code: ''
    };
  },
  methods: {
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una solicitud al backend.
      alert(`Correo: ${this.email}, Código: ${this.code}`);
    }
  }
};
</script>

