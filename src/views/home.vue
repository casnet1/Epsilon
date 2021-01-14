<template>
<div>
  <div>
      <h1 class="my-5">Amazon Web Services</h1>
      <h3>El rendimiento total de la empresa es... <span id="porcentaje">91%</span></h3>
  </div>

  <div class="card">
  <h5 class="card-header">Nuevo producto</h5>
  <div class="card-body text-left">
<div class="mb-3">
  <label  class="form-label">Nombre del producto</label>
  <input type="email" class="form-control" placeholder="name@example.com">
</div>

   <div class="mb-3">
  <label  class="form-label">Piezas vendidas el ultimo mes</label>
  <input type="email" class="form-control"  placeholder="name@example.com">
</div>

  <div class="mb-3">
  <label class="form-label">Costo por pieza del ultimo mes</label>
  <input type="email" class="form-control"  placeholder="name@example.com">
</div>
    <button type="button" class="btn btn-success ">Enviar</button>
  </div>
</div>




  <div class="card">
  <h5 class="card-header">Producto 1</h5>
  <div class="card-body text-left">
<div class="row">
  
  <div class="col-6">
        <area-chart :data="{'2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5}"></area-chart>
  </div>
  <div class="col-6">
    <h5>Nuevo checkpoint</h5>
      <input type="email" class="form-control"  placeholder="Costo">
  <input type="email" class="form-control" placeholder="Piezas vendidas">
<button type="button" class="btn btn-success ">Añadir</button>
  </div>
  
  <div class="col-12">
      <div class="d-flex justify-content-around my-5">
        <p>Oferta esperada: X</p>
        <p>Precio esperado: X</p>
        <p>demanda esperada: X</p>
      </div>
  </div>

</div>
  </div>
</div>








</div>
</template>
<script>
export default {
  data () {
    return {
      height: 300
    }
  },
  methods: {
    increase () {
     this.height += 10
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>

<style>
.card{
  width: 70%;
  margin: 5rem auto;
}
#porcentaje{
  font-size: 5rem;
}
.small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>