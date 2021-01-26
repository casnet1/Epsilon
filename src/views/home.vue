<template>
<div class="bg p-5">
  <div>
      <h1 class="mb-5 display-1">{{empresa.nombre}}</h1>
      <h3>El rendimiento total de la empresa es... <span id="porcentaje">{{empresa.rendimiento}}%</span></h3>
  </div>

  <div class="card">
  <h5 class="card-header">Nuevo producto</h5>
  <div class="card-body text-left">
<div class="mb-3">
  <label  class="form-label">Nombre del producto</label>
  <input  class="form-control" v-model="new_product.nombre">
</div>

   <div class="mb-3">
  <label  class="form-label">Piezas vendidas el ultimo mes</label>
  <input  class="form-control"  v-model="new_product.piezas">
</div>

  <div class="mb-3">
  <label class="form-label">Costo por pieza del ultimo mes</label>
  <input  class="form-control"  v-model="new_product.precio">
</div>
    <button type="button" class="btn btn-success " @click="nuevoProducto()">Añadir</button>
  </div>
</div>


  <div class="card">
  <h5 class="card-header">{{empresa.productos.p1.nombre}}</h5>
  <div class="card-body text-left">
<div class="row">
  
  <div class="col-6">
        <area-chart :data="empresa.productos.p1.points"></area-chart>
  </div>
  <div class="col-6">
    <h5>Nuevo checkpoint</h5>
      <input  class="form-control mb-3"  placeholder="Costo">
  <input  class="form-control mb-3" placeholder="Piezas vendidas">
<button type="button" class="btn btn-success  mb-3" @click="nuevoPoint(1)">Añadir</button>
  </div>
  
  <div class="col-12">
      <div class="d-flex justify-content-around my-5">
        <p>Oferta esperada: {{empresa.productos.p1.oferta}}</p>
        <p>Precio esperado: {{empresa.productos.p1.precio}}</p>
        <p>demanda esperada: {{empresa.productos.p1.demanda}}</p>
      </div>
  </div>

</div>
  </div>
</div>
</div>
</template>


<script>
import config from "../config/config.js";
import axios from 'axios'
export default {
  data (){
    return{
      empresa:{
        id:1,
        nombre:'GasMan',
        rendimiento:98,
        productos:{
          p1:{
            nombre:'producto 1',
            oferta:'x',
            precio:'y',
            demanda:'z',
            points:{'2017-01-01 00:00:00 ': 2,
             '2017-01-01 00:01:00 ': 1,
              '2017-01-01 00:03:00 ': 5
             }

          }

        }
      },

      new_product:{
        nombre:'',
        piezas:'',
        precio:''

      },
      new_point:{
        productId:'',
        precio:'',
        piezas:'',
        fecha:''
      }
    }
  },
 
  methods: {
   getData(){

   },
   nuevoProducto () {
    this.$swal('Heading', 'this is a Heading', 'success');

    const data = {
      
    }

    axios
    .post(`${config.api}/nuevo_producto`,data)
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    },
    nuevoPoint (id) {
    this.$swal('Heading', 'this is a Heading', 'success');

    const data = {
      id:id
      
    }

    axios
    .post(`${config.api}/nuevo_point`,data)
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

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
  .bg{
background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 22%, #39F3BB 100%);
  }
</style>