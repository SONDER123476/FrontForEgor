<template>
  <div>
    <LoginReg
          v-if="isLoginVisible"
          @away="awayclose"
          />
    <header class="mainPageHeader">
        <div class="headerLeftMenu">
          <img class="cobraIcon" src="../assets/cobra_icon.svg">
          <button type="button" class="headerManeMenu" @click="$router.push({ path: '/models' })">3D Models</button>
          <button class="headerManeMenu" >Sell 3D Models</button>
          <button class="headerManeMenu" >FAQ</button>
        </div>
        <div class="headerBaner">
          <a class="mainPageLink" href="/"><h1>3D HYDRA</h1></a>
        </div>
        <div class="headerRightMenu">
          <input class="headerInpSearch" type="text" >
          <button class="headerBtnSearch"></button>
          <button class="headerBtnLogin" @click="showLoginPole()">Log In</button>
        </div>
    </header>
    <div class="manePart">
        <div class="welcToHydra">
          <h2>Wellcome to <br>3d Hydra</h2>
        </div>
        <button class="categoryMP">Category</button>
    </div>
    <div class="info">
      <div class="container">  
        <!-- <h3>FAQ:</h3> -->
        <!-- <div class="faqAccordion" v-for="(section, index) in sections" :key="index">
          <div @click="toggleSection(index)">{{ section.title }}</div>
          <div v-if="section.open">{{ section.content }}</div>
        </div> -->
  <div class="accordion">
    <div class="accordion-item" id="question1">
      <a class="accordion-link" href="">
        <div class="flex">
          <h3>BRANDING</h3>
          <ul>
            <li>#Figma</li>
            <li>#Sketch</li>
            <li>#Adobe</li>
            <li>#Invision</li>
            <li>#Protopie</li>
          </ul>
        </div>
        <i class="icon ion-md-arrow-forward"></i>
        <i class="icon ion-md-arrow-down"></i>
      </a>
      <div class="answer">
        <p> We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this</p>
      </div>
      <hr>
  </div>
    <div class="accordion-item" id="question2">
      <a class="accordion-link" href="">
        <div class="flex">
          <h3>UX/UI DESIGN</h3>
          <ul>
            <li>#Figma</li>
            <li>#Sketch</li>
            <li>#Adobe</li>
            <li>#Invision</li>
            <li>#Protopie</li>
          </ul>
        </div>
        <i class="icon ion-md-arrow-forward"></i>
        <i class="icon ion-md-arrow-down"></i>
      </a>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
      </div>
      <hr>
  </div>
    <div class="accordion-item" id="question3">
      <a class="accordion-link" href="">
        <div class="flex">
          <h3>FRONTEND DEVELOPMENT</h3>
          <ul>
            <li>#Figma</li>
            <li>#Sketch</li>
            <li>#Adobe</li>
            <li>#Invision</li>
            <li>#Protopie</li>
          </ul>
        </div>
        <i class="icon ion-md-arrow-forward"></i>
        <i class="icon ion-md-arrow-down"></i>
      </a>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
      </div>
      <hr>
  </div>
    <div class="accordion-item" id="question4">
      <a class="accordion-link" href="">
        <div>
          <h3>BACKEND DEVELOPMENT</h3>
          <ul>
            <li>#Figma</li>
            <li>#Sketch</li>
            <li>#Adobe</li>
            <li>#Invision</li>
            <li>#Protopie</li>
          </ul>
        </div>
        <i class="icon ion-md-arrow-forward"></i>
        <i class="icon ion-md-arrow-down"></i>
      </a>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
      </div>
      <hr>
  </div>
</div>


      </div>
    </div>
      <div class="category">
        <div class="container">
          <ul class="list-default">
                  <li 
                      v-for="(category, index) in categorys"
                      :key="index"
                  >
                      <category-card 
                          :title="category.title"
                          :img-url="category.imgUrl"
                      />
                  </li>
              </ul>
        </div>
      </div>

      
      <footer-part />
  </div>
</template>



<script>
//import { computed } from 'vue';
import CategoryCard from './categoryCard.vue';
import footerPart from './footer.vue';
import LoginReg from './LoginReg.vue'
// import headerPart from './header.vue';
//import categorysList from './categorys.vue';

export default {
  name: 'mainPage',
  components: {CategoryCard, footerPart, LoginReg},
  data () {
    return {
      isLoginVisible:false,
      sections: [
        { title: 'Заголовок раздела 1', content: 'Содержимое раздела 1', open: false },
        { title: 'Заголовок раздела 2', content: 'Содержимое раздела 2', open: false },
        { title: 'Заголовок раздела 3', content: 'Содержимое раздела 3', open: false }
      ],
      categorys: [
                    {
                        title: 'Aircraft 3D Models',
                        imgUrl: require('../assets/categoryPlane.png'),
                    },
                    {
                        title: 'Animal 3D Models',
                        imgUrl: require('../assets/categoryAnimal.png'),
                    },
                    {
                        title: 'Architectural 3D Models',
                        imgUrl: require('../assets/categoryArchitectural.png'),
                    },
                    {
                        title: 'Car 3D Models',
                        imgUrl: require('../assets/categoryCar.png'),
                    },
                    {
                        title: 'Character 3D Models',
                        imgUrl: require('../assets/categoryCharacter.png'),
                    },
                    {
                        title: 'Exterior 3D Models',
                        imgUrl: require('../assets/categoryExterior.png'),
                    },
                    {
                        title: 'Food 3D Models',
                        imgUrl: require('../assets/categoryFood.png'),
                    },
                    {
                        title: 'Furniture 3D Models',
                        imgUrl: require('../assets/categoryFurniture.png'),
                    },
                    {
                        title: 'Household 3D Models',
                        imgUrl: require('../assets/categoryHousehold.png'),
                    },
                    {
                        title: 'Industrial 3D Models',
                        imgUrl: require('../assets/categoryIndastrial.png'),
                    },
                    {
                        title: 'Military 3D Models',
                        imgUrl: require('../assets/categoryMilitary.png'),
                    },
                    {
                        title: 'Plant 3D Models',
                        imgUrl: require('../assets/categoryPlant.png'),
                    },
                    {
                        title: 'Space 3D Models',
                        imgUrl: require('../assets/categorySpace.png'),
                    },
                    {
                        title: 'Vehicle 3D Models',
                        imgUrl: require('../assets/categoryVehicle.png'),
                    },
                    {
                        title: 'Watercraft 3D Models',
                        imgUrl: require('../assets/categoryWatercraft.png'),
                    }
                  ],
    };
  },
  methods: {
    toggleSection(index) {
      this.sections[index].open = !this.sections[index].open;
    },
    awayclose(){
      
      this.isLoginVisible = false;
    },
    showLoginPole(){
      this.isLoginVisible = true;
    },
  },
  computed: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@600&family=Sarala&family=Satisfy&display=swap');
  *{
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0px;
    padding: 0px;
  }
  .mainPageHeader {
    position: fixed;
    width: 100%;
    height: 75px;
    background-color: #000000c7;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  .cobraIcon {  
    width: 75px;
    height: 75px;
    border-radius: 100%;
    padding: 0px;
  }

  .mainPageLink {
    text-decoration: none;
}

  .headerLeftMenu{
    display: flex;
    align-items: center;
  }
  .headerManeMenu{
    font-family: 'M PLUS 1', sans-serif;
    margin: 15px;
    text-decoration:none;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;
    color: #FFFFFF;

    border: none;
    background-color: rgba(255, 255, 255, 0);

    transition: text .2s linear, color .2s linear;
  }
  .headerManeMenu:hover {
    text-decoration: underline;
    color: #bebebe;
  }
  .headerManeMenu:active {
    color: #6e6e6e;
  }
  h1 {
    margin-right: auto;
    color: white;
  }
  .headerRightMenu {
    margin: 15px;
    display: flex;
    align-items: center;
  }
  .headerInpSearch {
    width: 250px;
    height: 20px;
    margin: 5px;
    padding: 0 10px;
    background-color: #00000000;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-size: 15px;
  }
  .headerBtnSearch {
    height: 25px;
    width: 25px;
    margin: 5px;
    padding: 2px;
    background-color: #00000000;
    background-image: url('../assets/searchLoupeIcon.svg');
    background-position:center;
    background-repeat:no-repeat;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 5px;
    cursor: pointer;

    transition: border .2s linear;
  }
  .headerBtnSearch:hover {
    border-color: rgb(255, 255, 255);
  }
  .headerBtnSearch:active {
    border-color: rgb(92, 92, 92);
  }
  .headerBtnLogin {
    height: 25px;
    width: 75px;
    margin: 5px;
    color: white;
    background-color: #00000000;
    border: 1px solid white;
    border-radius: 10px ;
    cursor: pointer;

    transition: background .2s linear, color .2s linear;
  } 
  .headerBtnLogin:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
  }
  .headerBtnLogin:active {
    background-color: rgb(92, 92, 92);
    color: rgb(0, 0, 0);
  }

 .container{
    margin-top: 0px;
    padding: 0px 12.5%;
  }

  .manePart {
    margin: 0px;
    width: 100%;
    height: 910px;
    min-height: 100%;
    background-image: url('../assets/maneBackground.svg');
    background-position:center;
    background-repeat:no-repeat;
    background-size: cover ;
    padding: 10px 0;
  }
  .welcToHydra {
    width: 487px;
    height: 246px;
    margin-top: 450px; 
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-color: black;
    background: rgba(0, 0, 0, 0.08);
    box-shadow: 2px 4px 40px 10px rgba(255, 255, 255, 0.85), inset 0px 4px 40px rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2.5px);
    border-radius: 100px;
    z-index: 0;
  }
  h2 {
    font-family: 'Satisfy', cursive;
    font-size: 48px;
    font-weight: 400;
  }
  .categoryMP {
    width: 330px;
    height: 70px;
    margin-top: 60px;
    margin-left: 300px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #FFFFFF;
    border-radius: 38px;
    font-family: 'Sarala';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    color: #FFFFFF;

    cursor: pointer;

    transition: border .2s linear, color .2s linear, background .2s linear;
  }
  .categoryMP:hover {
    background: rgba(255, 255, 255, 0.493);
    color: rgb(59, 59, 59);
    border: none;
  }

  .info {
    height: 100%;
    width: 100%;
    padding: 30px 0;
    background-color: #000000;
    margin: 0px;
    border-top: 3px solid rgb(223, 223, 223);
    border-bottom: 3px solid rgb(223, 223, 223);
  }

 
  
  .accordion-item{
  background-color: #000000;
  border-radius: .4rem;
}

.accordion-item hr{
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.accordion-link{
  font-size: 1.6rem;
  color: rgba(255,255,255,.8);
  text-decoration: none;
  background-color: #000000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.accordion-link h3{
  font-weight:500;
  font-size: 20px;
}

.accordion-link i{
  color: #e7d5ff;
  padding: .5rem;
  
}

.accordion-link ul{
  display:flex;
  align-items: flex-end;
  list-style-type: none;
  margin-left: 25px;
}

.accordion-link li{
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  padding: 0 0 1px 5px;
}

.accordion-link div{
  display: flex;
}

.accordion-link .ion-md-arrow-down{
  display: none;
}

.answer{
  max-height: 0;
  overflow: hidden;
  background-color: #000;
  transition: max-height 650ms;
}



.answer p{
  color: #fff;
  font-size: 15px;
  padding: 2rem;
  
}

.accordion-item:target .answer{
  max-height: 20rem;
}

.accordion-item:target .accordion-link .ion-md-arrow-forward{
  display: none
}

.accordion-item:target .accordion-link .ion-md-arrow-down{
  display: block;
}

.category {
  height: 100%;
  width: 100%;
  background-color: #181729;
}

.list-default {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0 1.25%;
}
.list-default li {
    list-style: none;
    flex: 0 0 30%;
    margin: 1.25%;  
}


</style>
