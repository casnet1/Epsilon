<template>
<div >
  <div class="d-flex tem justify-content-center align-items-center">
      
      <div class="containerr ">
<h1 class="mb-5">Iniciar Sesion</h1>
<form >
  <div class="form-group text-left">
    <label for="exampleInputEmail1">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group text-left">
    <label for="exampleInputPassword1 ">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
</form>
<router-link to="/home">
  <button type="button" class="btn btn-primary">enviar</button>
</router-link>
</div>

      </div>
  </div>
</template>
<style scoped>
.containerr{
  width: 40%;
}
.tem{
  height: 100vh;
}
</style>