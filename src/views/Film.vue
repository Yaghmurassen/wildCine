<template>
    <div class="container">
      <div class="row">
        <h1>{{films[0].Title}}</h1>
        <div class="gallery" v-for="film in films" v-bind:key>
            <img :src="films[0].Images">
            <img :src="films[0].Images[1]">
            <img :src="films[0].Images[2]">
            <img :src="films[0].Images[3]">
            <img :src="films[0].Images[4]">
            <img :src="films[0].Images[5]">
        </div>
      </div>
      <div class="row">
        <div class="col s4 m2 l1">
          <img :src="films[0].Flag" class="circle" style="height:60px">
        </div>
        <div class="col s4 m2 l1">
          <p>{{films[0].Year}}</p>
        </div> 
        <div class="col s4 m2 l1">
          <p>{{films[0].Runtime}}</p>
        </div> 
      </div>
      <div class="row">
        <div class="col s12 plot">
          <span>
            {{films[0].Plot}}
          </span>
        </div>
      </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    props: ['film'],
     computed: mapState({
    films: state => state.films
   })
}

</script>



<style lang="scss" scoped>

.container {
  min-height: 70vh !important;
}
.row {
  margin-top: 25px;
  margin-bottom: 40px;
}
h1 {
  text-align: left;
  @media screen and (max-width: 720px) {
    font-size: 26px;
    font-weight: bold;
  }
}


.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & img {
    // flex: 1 1 auto;
    width: 20vw;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    object-fit: cover;
    // transition: transform .6s;
    // &:hover{
    //   transform: scale(1.4);
    // }
    @media screen and (max-width: 992px) {
      width: 40vw;
    }
    @media screen and (max-width: 420px) {
      min-width: 120%;
    }
  }
}

p {
    background-color: #50626d;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: auto;
    color: white;
    padding: 18px 0;
}

.plot {
  background-color: #86a3b58f;
  border-radius: 4px;
  padding: 15px 30px 15px 30px;
  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
}

</style>

