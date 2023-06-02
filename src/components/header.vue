<template>
    
    <header>
        <div class="headerLeftMenu">
          <img class="cobraIcon" src="../assets/cobra_icon.svg">
          <button type="button" class="headerManeMenu" @click="$router.push({ name: 'modelsList' })">3D Models</button>
          <button class="headerManeMenu" @click="$router.push({ name: 'uploadPage' })">Sell 3D Models</button>
          <button class="headerManeMenu" @click="$router.push({ name: 'modelPage' })">FAQ</button>
        </div>
        <div class="headerBaner">
          <a class="mainPageLink" href="/"><h1>3D HYDRA</h1></a>
        </div>
        <div class="headerRightMenu">
          <input class="headerInpSearch" type="text" >
          <button class="headerBtnSearch"></button>
          <button class="headerBtnLogin" @click="showLoginPole(), console.log(isLoginVisible)">Log In</button>
        </div>
    </header>
</template>

<script>
// import LoginReg from './LoginReg.vue'
import sign_inFildState from '../mixins/sign-inFildState.js'

    export default {
        name: 'headerPage',
        // components: {LoginReg},
        mixins: [sign_inFildState],
        data() {
          return {
            // isLoginVisible: false
          }
        },
        methods: {
          // awayclose(){
          //   this.isLoginVisible = false;
          // },
          // showLoginPole(){
          //   console.log(12121)
          //   this.isLoginVisible = true;
          // },
        }
        
    }
</script>

<style scoped>
    header {
    width: 100%;
    height: 75px;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }

.mainPageLink {
    text-decoration: none;
}

  .cobraIcon { 
    width: 75px;
    height: 100%;
    border-radius: 100%;
  }
  .headerLeftMenu{
    height: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 10px;
  }
  .headerManeMenu{
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
</style>