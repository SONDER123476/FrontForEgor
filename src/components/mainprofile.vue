<template>
  <div class="bodyProfile" >

    <div class="headerContaineProfile">
      <header-part />
    </div>
    
    
    
    

    <div class="manePart">

      <vPopup
        v-show="isInfoPopupVisible"
        @closePopup="closePopupInfo"
      />
      
      <div class="block TopBlock">

        <div class="AvatarBlock"><img class="Avatar" src="../assets/Avatar.png"></div>

        <div class="InfoBlock">
          <a class="TopBlocktext">Nickname</a>
          <a class="TopBlocktext">N models sold</a>
          <a class="TopBlocktext">N reputation</a> 
        </div>
        
        <div class="ButtonBlock"> 
          <button class="ButtonBitch" @click="showLoginPole">Withdrawal<br></button>
          <button class="ButtonBitch" @click="showPopupInfo">Log out</button>


          <button class="ButtonBitch">Change the background</button>
        </div>
      </div>
      <div class="BottomBlock">
          <div class="tabs">
            <button type="button" class="dig" @click="showProfile()">Profile</button>
            <button class="dig" @click="showModels">Models</button>
            <button class="dig">Favourites</button>
            <button class="dig" @click="showStatistick">Statistic</button>
            <button class="dig">Contract</button>
            <button class="dig">Portfolio</button>
          </div>
          <div 
            class="table1"
            v-if="isStatisticVisable">
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Render</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Change %</th>
                  </tr>
                </thead>
              </table>
            </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>-0.36%</td>
                </tr>
                <tr>
                  <td>AAD</td>
                  <td>AUSENCO</td>
                  <td>$2.38</td>
                  <td>-0.01</td>
                  <td>-1.36%</td>
                </tr>
                <tr>
                  <td>AAX</td>
                  <td>ADELAIDE</td>
                  <td>$3.22</td>
                  <td>+0.01</td>
                  <td>+1.36%</td>
                </tr>
                <tr>
                  <td>XXD</td>
                  <td>ADITYA BIRLA</td>
                  <td>$1.02</td>
                  <td>-1.01</td>
                  <td>+2.36%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div 
        class="table2"
        v-if="isProfileVisable"
        >
          <div class="InfoBlockBottom">
            <a class="TopBlocktext1">FullName:</a>
            <a class="TopBlocktext1">Email:</a>
            <a class="TopBlocktext1">PhoneNumber</a> 
            <a class="TopBlocktext1">Gender:</a>
            <a class="TopBlocktext1">Birth Date:</a>
          </div>
        </div>
        <div class="Models" v-if="isModelsVisable">

          <!-- <div class="infoChel">
            <div class="profile" for="item-1">
              <div class="image">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <img src="https://100dayscss.com/codepen/jessica-potter.jpg" width="70" height="70" alt="Jessica Potter">
              </div>
			
              <div class="name">Jessica Potter</div>
              <div class="job">Visual Artist</div>
        

            </div>
            <div class="stats">
              <div class="box">
                <span class="value">523</span>
                <span class="parameter">Posts</span>
              </div>
              <div class="box">
                <span class="value">1387</span>
                <span class="parameter">Likes</span>
              </div>
              <div class="box">
                <span class="value">146</span>
                <span class="parameter">Follower</span>
              </div>
            </div>
          </div> -->

          <div class="containerProfile" v-if="isModelsVisable">
            <input type="radio" name="slider" id="item-1" checked>
            <input type="radio" name="slider" id="item-2">
            <input type="radio" name="slider" id="item-3">
          <div class="cards">
            <label class="card" for="item-1" id="song-1">
              <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
              <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
              <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song">
            </label>
          </div>
        </div>
          
          
        
         </div>
        
      </div>
    </div>
    <footer-part />
  </div>
</template>
<script>


import vPopup from './v-popup.vue'
import headerPart from './header.vue'
import footerPart from './footer.vue'

export default {
  name: 'ProfilePage',
  components: {
    vPopup,
    headerPart,
    footerPart,
},
  data(){
    return{
      isInfoPopupVisible: false,
      isProfileVisable: false,
      isModelsVisable: false,
      isStatisticVisable: false,
      isContractVisable: false,
    }
    
  },
  methods: {
    
    showPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closePopupInfo(){
      this.isInfoPopupVisible = false;
    },
    
    showStatistick() {
      this.isStatisticVisable=true;
      this.isProfileVisable = false;
      this.isModelsVisable = false;
      this.isContractVisable =false;
      
    },
    showProfile() {
      this.isProfileVisable = true;
      this.isModelsVisable = false;
      this.isContractVisable =false;
      this.isStatisticVisable=false;
      console.log(this.isProfileVisable)
      
    },
    showModels() {
      this.isProfileVisable = false;
      this.isModelsVisable = true;
      this.isContractVisable =false;
      this.isStatisticVisable=false;
    },
  },

}
</script>


<style lang="scss">

  .table1{
    margin-top: 30px;
  }
  body {
    margin: 0px;
  }
  
.headerContaineProfile{
  background-color: #000000;
}

  .bodyProfile {
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: 'Roboto', sans-serif;
}

  .manePart {
    width: 100%;
    height: 900px;
    background-image: url('../assets/back.svg');
    background-position:center;
    background-repeat:no-repeat;
    background-size: cover;
    padding: 10px 0px
  }
  .block{
    margin-top: 10px;
    margin-left: 100px;
    margin-right: 100px;
  }
  .TopBlock{
    display: flex;
    align-items: center;
    width: 1420px;
    height: 207px;

    background: rgba(24, 24, 24, 0.7);
  }
  .BottomBlock{
    margin-left: 100px;
    margin-top: 10px;
    width: 1420px;
    height: 550px;
    background: rgba(24, 24, 24, 0.7);

  }
  .AvatarBlock{
    margin: 30px;

    width: 146px;
    height: 137px;
    background: #FFFFFF;
    border: 4px solid #FFFFFF;
    border-radius: 360px;
    background-image: url('../assets/Avatar.png');
  }
  .InfoBlock{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .ButtonBlock{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .TopBlocktext{
    margin-top: 5px;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: rgb(134, 134, 134);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 }
 .TopBlocktext1{
    margin-top: 30px;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 20px;

    color: rgb(134, 134, 134);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 }
 .ButtonBitch{
    margin-top: 10px;
    margin-left: 300px;
    width: 216px;
    height: 45px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #FFFFFF;
    border-radius: 38px;

    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;
 }
 .ButtonBitch:hover{
  background: rgba(255,255,255,.2);
 }
 .ButtonBitch:active{
  background: white;
 }


.ButtonB{
  margin-left: 120px;

  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #5d6463;
  background-color: transparent;
  height: 50px;
  width: 80px;

  font-size: 1em;
  color: rgb(134, 134, 134);
}
.ButtonB:hover{
  border: 1px solid #FFFFFF;


}



.tabs {
	display: flex;
	justify-content: space-evenly;
	color: var(--c-text-tertiary);
	border-bottom: 1px solid var(--c-gray-600);

	a {
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-decoration: none;
		border-top: 2px solid transparent;
		display: inline-flex;
		transition: 0.25s ease;
    color: rgb(134, 134, 134);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		&.active,
		&:hover,
		&:focus {
			color: var(--c-text-primary);
			border-color: var(--c-text-primary);
		}
	}
  .dig{
    background-color: #00000000;
    padding-top: 1rem;
		padding-bottom: 1rem;
		text-decoration: none;
		border-top: 2px solid rgba(255, 0, 0, 0);
    border-bottom: none;
    border-left: none;
    border-right: none;
		display: inline-flex;
		transition: 0.25s ease;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: rgb(134, 134, 134);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		&.active,
		&:hover,
		&:focus {
			color: var(--c-text-primary);
			border-top-color: var(--c-text-primary);
		}

  }
}
:root {
	--c-gray-900: #000000;
	--c-gray-800: #1f1f1f;
	--c-gray-700: #2e2e2e;
	--c-gray-600: #313131;
	--c-gray-500: #969593;
	--c-gray-400: #a6a6a6;
	--c-gray-300: #bdbbb7;
	--c-gray-200: #f1f1f1;
	--c-gray-100: #ffffff;

	--c-green-500: #45ffbc;
	--c-olive-500: #e3ffa8;

	--c-white: var(--c-gray-100);

	--c-text-primary: var(--c-gray-100);
	--c-text-secondary: var(--c-gray-200);
	--c-text-tertiary: var(--c-gray-500);
}

table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:410px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}


/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

section{
  margin: 50px;
}

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}


.InfoBlockBottom{
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

input[type=radio] {
  display: none;
}

.card {
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform .4s ease;
  cursor: pointer;
}

.Models{
  width: 1400px;
  height: 600px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
.containerProfile {

  width: 100%;
  max-width: 600px;
  max-height: 400px;
  height: 100%;
  transform-style: preserve-3d;

}

.cards {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
  
  img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  }
}

.player {
  background-color: #fff;
  border-radius: 8px;
  min-width: 320px;
  padding: 16px 10px;
}

.upper-part {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 36px;
  overflow: hidden;
}

.play-icon{ margin-right: 10px; }

.song-info {
  width: calc(100% - 32px);
  display: block;
}

.song-info .title {
  color: #403d40;
  font-size: 14px;
  line-height: 24px;
}

.sub-line {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.subtitle, .time {
  font-size: 12px;
  line-height: 16px;
  color: #c6c5c6;
}

.time {
  font-size: 12px;
  line-height: 16px;
  color: #a5a5a5;
  font-weight: 500;
  margin-left: auto;
}

.progress-bar {
  height: 3px;
  width: 100%;
  background-color: #e9efff;
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  display: block;
  position: relative;
  width: 60%;
  height: 100%;
  background-color: #2992dc;
  border-radius: 6px;
}

.info-area {
  width: 100%;
  position: absolute;
  top: 0;
  left: 30px;
  transition: transform .4s ease-in;
}

#item-2:checked ~ .player #test {
  transform: translateY(0);
}

#item-2:checked ~ .player #test  {
  transform: translateY(-40px);
}

#item-3:checked ~ .player #test  {
  transform: translateY(-80px);
}
.infoChel{

  margin-top: 50px;
}

.profile {
	float: left;
	width: 200px;
	height: 300px;
	text-align: center;
  background-color: rgba(255, 255, 255, 0.514);
	
	.image {
		position: relative;
		width: 70px;
		height: 70px;
		margin: 38px auto 0 auto;
		
		
		img {
			display: block;
			border-radius: 50%;
			background: #ff6a00;
		}
		
		&:hover {
			cursor: pointer;

		
		}
		
	}
	
	.name {
		font-size: 25px;
		font-weight: 600;
		margin-top: 20px;
	}
	
	.job {
		font-size: 15px;
		line-height: 15px;
	}
	
	
}

.stats {
	float: left;
	
	.box {
		box-sizing: border-box;
		width: 120px;
		height: 100px;
		background: #f5e8df50;
		text-align: center;
		padding-top: 28px;
		transition: all .4s ease-in-out;
		
		&:hover {
			background: #E1CFC2;
			cursor: pointer;
		}
		
		&:nth-child(2) {
			margin: 0px 0;
		}
		
	}
	
	span {
		display: block;
	}
	
	.value {
		font-size: 20px;
		font-weight: 600;
	}
	
	.parameter {
		font-size: 15px;
	}
}
</style>