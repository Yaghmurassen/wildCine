<template>
    <div class="container">
      <div class="row">
        <h1>{{films[0].Title}}</h1>
        <div class="gallery" v-for="film in films">
		        <img :src="films[0].Images">
            <img :src="films[0].Images[1]">
            <img :src="films[0].Images[2]">
            <img :src="films[0].Images[3]">
            <img :src="films[0].Images[4]">
            <img :src="films[0].Images[5]">
        </div>
      </div>
      <div class="row">
        <div class="col s2 l1">
          <img :src="films[0].Flag" class="circle" style="height:60px">
        </div>
        <div class="col s2 l1">
          <p>{{films[0].Year}}</p>
        </div> 
        <div class="col s2 l1">
          <p>{{films[0].Runtime}}</p>
        </div> 
      </div>
      <div class="row">
        <div class="col s12" style="padding-top: 25px;">
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
     computed: mapState({
		films: state => state.films
	 })
}

console.log(this.films)
</script>

<style lang="scss" scoped>

.container {
  min-height: 90vh !important;
}
.row {
  margin-top: 25px;
}
h1 {
  text-align: left;
  @media screen and (max-width: 720px) {
    font-size: 20px;
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
    width: 32%;
    height: auto;
    margin-bottom: 10px;
    object-fit: cover;
    transition: transform .6s;
    &:hover{
      transform: scale(2.5);
    }
    @media screen and (max-width: 992px) {
      min-width: 450px;
    }
    @media screen and (max-width: 540px) {
      min-width: 300px;
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

</style>

