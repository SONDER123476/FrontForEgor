<template>
    <header>
        <div class="headerLeftMenu">
          <img class="cobraIcon" src="../assets/cobra_icon.svg">
          <button type="button" class="headerManeMenu" @click="$router.push({ name: 'modelsList' })">3D Models</button>
          <button class="headerManeMenu" >Sell 3D Models</button>
          <button class="headerManeMenu" >FAQ</button>
        </div>
        <div class="headerBaner">
          <a class="mainPageLink" href="/"><h1>3D HYDRA</h1></a>
        </div>
        <div class="headerRightMenu">
          <input class="headerInpSearch" type="text" >
          <button class="headerBtnSearch"></button>
          <button class="headerBtnLogin">Log In</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'headerPage',
        data() {

        }
    }
</script>

<style>
    header {
    /* position: fixed; */
    width: 100%;
    height: 75px;
    background-color: #000000;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

.mainPageLink {
    text-decoration: none;
}

  .cobraIcon {  
    border-radius: 100%;
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
</style>