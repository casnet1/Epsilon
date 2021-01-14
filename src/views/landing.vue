<template>
  <div>
    <header>
      <div class="hero d-flex align-items-center justify-content-center">
        <div class="logo"></div>
        <div class="centro text-light">
          <h1>Epsilon System</h1>
          <h6>No maś decisiones dificiles</h6>
          
            <router-link to="/login"><button type="button" class="btn btn-light">Iniciar Sesion</button>
            </router-link>
        </div>
      </div>
    </header>

    <section class="row section1">
      <div class="col-5 offset-1">
        <img src="../assets/undraw_wallet.svg" alt="My Happy SVG" class="svg" />
      </div>
      <article class="col-5">
        <h1>Que es Epsilon</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt reprehenderit pariatur eius adipisci placeat quibusdam, illo
          vitae minus veritatis? Excepturi molestiae voluptate adipisci nam
          placeat explicabo delectus dicta voluptas!
        </p>
      </article>
    </section>

    <section class="mt-5">
      <h1>Prueba nuestro sistema</h1>
      <div class="row px-5 my-5">
        <div class="col">
          <p>Vendi...</p>
        </div>
        <div class="col">
          <input
            type="email"
            class="form-control"
            placeholder="el mes pasado"
          />
          <input type="email" class="form-control" placeholder="este mes" />
        </div>
        <div class="col">
          <p>piezas a un precio de...</p>
        </div>
        <div class="col">
          <input
            type="email"
            class="form-control"
            placeholder="precio anterior"
          />
          <input type="email" class="form-control" placeholder="precio nuevo" />
        </div>
      </div>
      <button type="button" class="btn btn-light bg-success text-white">
        Calcular
      </button>
      <div class="d-flex justify-content-around my-5">
        <p>Oferta esperada: X</p>
        <p>Precio esperado: X</p>
        <p>demanda esperada: X</p>
      </div>
    </section>

    <section>
      <h1>Por que usar Epsilon</h1>
      <ul class="listaCool row">
        <div class="col-6">
          <li>
            <div class="d-flex">
              <i class="fas fa-tachometer-alt icon fa-lg"></i>
              <p>Es más rapido</p>
            </div>
          </li>
          <li >
            <div class="d-flex">
            <i class="far fa-laugh-beam icon"></i>
            <p>es facil de usar</p>
            </div>
          </li>
          <li >
            <div class="d-flex">
            <i class="fas fa-user-shield icon"></i>
            <p>es seguro</p>
            </div>
          </li>
        </div>
        <div class="col-6">
          <li >
            <div class="d-flex">
            <i class="fas fa-globe-americas icon"></i>
            <p>el mas usado</p>
            </div>
          </li>
          <li >
            <div class="d-flex">
            <i class="fas fa-wrench icon"></i>
            <p>soporte 24 horas</p>
            </div>
          </li>
          <li >
            <div class="d-flex ">
            <i class="fab fa-uncharted icon"></i>
            <p>actualizaciones constantes</p>
            </div>
          </li>
        </div>
      </ul>
    </section>

    <section class="clientes">
      <h1>Algunos de nuestros clientes</h1>
      <div class="d-flex justify-content-around my-5">
        <img
          src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
          alt=""
        />
        <img
          src="https://www.aspel.com.mx/assets/aspelcom/images/alianzas/logo_mercadolibre.png"
          alt=""
        />
      </div>
    </section>

    <footer>
      <p class="text-white">© Copyright DevelopersCool</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scope>
.hero {
  height: 50vh;
  background-image: url("https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.svg {
  height: 200px;
}
section {
  margin: 7rem 0;
}
.listaCool li {
  list-style: none;
}
.icon {
  background-color: #8dd070 !important;
  color: white;
  padding: 1.5rem;
  width: 34px;
  font-size: 6.2em;
  margin: 1rem;
  border-radius: 4rem;
}
.listaCool div li div {
  align-items: center;
  justify-content: center;
}

.clientes img {
  width: 30%;
}
li div p{
  width: 10rem !important;
}
footer{
  background-color: teal;
  padding: 1rem;
}




</style>