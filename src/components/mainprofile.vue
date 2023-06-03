<template>
  <div class="bodyProfile" >

    <div class="headerContaineProfile">
      <header-part />
    </div>
    
    
    
    

    <div class="manePart" :style="{ backgroundImage: backgroundUrl }">

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


          <button class="ButtonBitch" @click="openFileDialog" >Change the background</button>
          <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
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
                <tr v-for="(item, index) in tableData" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.render }}</td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.change }}</td>
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

          <div class="infoChel">
            <div class="profile" :for="'item-' + currentIndex">
              <div class="image">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <img :src="currentImage.src2" :width="currentImage.width" :height="currentImage.height" :alt="currentImage.alt">
              </div>
              <div class="name">{{ currentImage.name }}</div>
              <div class="job">{{ currentImage.job }}</div>
            </div>
            <div class="stats">
              <div class="box" v-for="(stat, index) in currentImage.stats" :key="index">
                <span class="value">{{ stat.value }}</span>
                <span class="parameter">{{ stat.parameter }}</span>
              </div>
            </div>
          </div>

          <div class="containerProfile" v-if="isModelsVisable">
            <div class="cards">
              <label class="card" :class="'song-' + index" v-for="(image, index) in imageData" :key="index" v-show="index === currentIndex">
                <img :src="image.src" :alt="image.alt">
              </label>
            </div>
            <div class="buttonContainer">
              <button class="big-button" @click="previousModel">Previous</button>
              <button class="big-button" @click="nextModel">Next</button>
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
      backgroundUrl: '',
      isInfoPopupVisible: false,
      isProfileVisable: false,
      isModelsVisable: false,
      isStatisticVisable: false,
      isContractVisable: false,
      currentIndex: 0,
      tableData: [
        { name: "AAC", 
          render: "AUSTRALIAN COMPANY", 
          category: "$1.38", 
          price: "+2.01", 
          change: "-0.36%" },
          { name: "AAC", 
          render: "AUSTRALIAN COMPANY", 
          category: "$1.38", 
          price: "+2.01", 
          change: "-0.36%" },
          { name: "AAC", 
          render: "AUSTRALIAN COMPANY", 
          category: "$1.38", 
          price: "+2.01", 
          change: "-0.36%" },
          { name: "AAC", 
          render: "AUSTRALIAN COMPANY", 
          category: "$1.38", 
          price: "+2.01", 
          change: "-0.36%" },
          { name: "AAC", 
          render: "AUSTRALIAN COMPANY", 
          category: "$1.38", 
          price: "+2.01", 
          change: "-0.36%" },
    ],
    imageData: [
        { src: "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
          src2: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1060&t=st=1685789836~exp=1685790436~hmac=4d2628be930322acd8acc36f3d7fe3177eb052acb69fb6d30763dd971061492a",
          width: 70,
          height: 70,
          alt: 'Jessica Potter',
          name: 'Jessica Potter',
          job: 'Visual Artist',
          stats: [
            { value: 523, parameter: 'Posts' },
            { value: 1387, parameter: 'Likes' },
            { value: 146, parameter: 'Followers' }
          ] },
        { src: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", 
          src2: "https://img.freepik.com/free-photo/handsome-young-man-in-white-t-shirt-cross-arms-chest-and-smiling-pleased_176420-21607.jpg?w=1060&t=st=1685789496~exp=1685790096~hmac=96686a23f29f437993b1b485350853580cdde86a20020f879cb2c8465a00ec8d",
          width: 70,
          height: 70,
          alt: 'Daun Mit',
          name: 'Daun Mit',
          job: 'Dolbaeb',
          stats: [
            { value: 400, parameter: 'Posts' },
            { value: 200, parameter: 'Likes' },
            { value: 1300, parameter: 'Followers' }
          ] },
        { src: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", alt: "song 3" },
        { src: "https://stihi.ru/pics/2022/10/30/6173.jpg", alt: "song 3" },
        { src: "https://mobimg.b-cdn.net/v3/fetch/c3/c348e4a1eb6625e4cec5d044be082b99.jpeg", alt: "song 3" },
        { src: "https://avatars.mds.yandex.net/get-mpic/7179065/img_id7790664592758262363.jpeg/orig", alt: "song 3" },
        { src: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649143490_6-vsegda-pomnim-com-p-priroda-islandii-foto-8.jpg", alt: "song 3" },
        // Добавьте другие объекты с данными в массив, если нужно
      ]
    }
    
  },
  computed: {
    selectedItem() {
      // Обеспечиваем циклическое перелистывание моделей
      return this.currentIndex % this.imageData.length;
    },
    currentImage() {
      return this.imageData[this.currentIndex];
    },
  },
  methods: {

    previousModel() {
      // Переключение на предыдущую модель
      this.currentIndex = (this.currentIndex - 1 + this.imageData.length) % this.imageData.length;
    },
    nextModel() {
      // Переключение на следующую модель
      this.currentIndex = (this.currentIndex + 1) % this.imageData.length;
    },
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.backgroundUrl = `url(${URL.createObjectURL(file)})`;
    },
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
:root {
  --colorShadeA: rgb(0, 0, 0);
  --colorShadeB: rgb(0, 0, 0);
  --colorShadeC: rgb(65, 65, 65);
  --colorShadeD: rgba(0, 238, 255, 0.753);
  --colorShadeE: rgb(255, 255, 255);
}
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
button.big-button {
  padding: 1em 2em;
  border: 2px solid var(--colorShadeA);
  border-radius: 1em;
  cursor: pointer;
  background: var(--colorShadeE);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  text-decoration: none;
  font-size: 0.8rem;
  color: var(--colorShadeA);
  font-weight: 600;
  text-transform: uppercase;
  font-family: inherit;
}
button.big-button::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--colorShadeC);
  border-radius: inherit;
  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.75em 0 0 var(--colorShadeA);
  transform: translate3d(0, 0.75em, -1em);
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
}

button.big-button:hover {
  background: var(--colorShadeD);
  transform: translate(0, 0.375em);
}

button.big-button:hover::before {
  transform: translate3d(0, 0.75em, -1em);
}

button.big-button:active {
  transform: translate(0em, 0.75em);
}

button.big-button:active::before {
  transform: translate3d(0, 0, -1em);

  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeB);
}


.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.previousButton {
  margin-right: 10px;
}

.nextButton {
  margin-left: 10px;
}
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

  img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
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