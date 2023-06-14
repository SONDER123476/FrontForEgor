<template>
    <div class="modelPageBody">
        <div class="headerContaineProfile">
            <header-part />
        </div>
        <div class="container">
            <div class="nodelPageImgWrapper">
                <img class="modelPageMainImg" :src="!currentImg ? getModel().render : currentImg">
                <div class="modelPageListImg">
                    <ul class="modelPageListImgWrapper">
                        <li v-for="(model, index) in getModel().photos" :key="index" class="modelPageSmallListImg">
                            <img class="modelPageSmallImg" @click="setModelImg(model)" :src="model">
                        </li>
                    </ul>
                </div>
            </div>
                
            <div class="modelPageWrapper">
                
                <div class="modelPageFildInfo">
                    <div class="modelPageFirstInfoFild">
                        <div class="modelPageSellerAndTitle">
                            <button class="modelPageSeller">
                                <img class="modelPageSellerAvatar" src="../assets/Avatar.png">
                                <span class="modelPageSellerNickname">{{ getModel().author }}</span>
                            </button>
                            <h3 class="modelPageTitle">{{ getModel().name }}</h3>
                        </div>
                        <div class="modelPageBuyMenu">
                            <h4 class="modePagePrice">{{ getModel().price + "Р" }}</h4>
                            <button class="modelPageBuyBtn" >Купить</button>
                            <button class="modelPageAtfBtn" @click="addToFavorit()">
                                <img :src=curAtfBtn>
                            </button>
                        </div>
                    </div>
                    <div class="modelPageSecondInfoFild">
                        <span class="modelPageModelInfo">{{ getModel().description }}</span>
                    </div>
                    <div class="modelPageThridInfoFild">
                        <div class="modePageCharactLeft">
                            <ul>
                                <li v-for="(param, index) in params1" :key="index" class="modelPageParams">
                                    <h5 class="modelPageParamsName">{{  param.name + ":" }}</h5>
                                    <img v-if="(param.value === true)" class="modelPageParamsState" src="../assets/paramsTrue.svg">
                                    <img v-else-if="(!param.value)" class="modelPageParamsState" src="../assets/paramsFalse.svg">
                                    <span v-else class="modelPageParamsValue">{{ param.value }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="modePageCharactRight">
                            <ul>
                                <li v-for="(param, index) in params2" :key="index" class="modelPageParams">
                                    <h5 class="modelPageParamsName">{{  param.name + ":" }}</h5>
                                    <img v-if="(param.value === true)" class="modelPageParamsState" src="../assets/paramsTrue.svg">
                                    <img v-else-if="(!param.value)" class="modelPageParamsState" src="../assets/paramsFalse.svg">
                                    <span v-else class="modelPageParamsValue">{{ param.value }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>

        </div>


        <footerPart />
    </div>
</template>

<script>
import headerPart from './header.vue'
import footerPart from './footer.vue'
import { mapActions, mapGetters } from 'vuex'

export default {

    name: 'TheModelPage',
    components: { headerPart, footerPart},
    data() {
        return {
            currentImg: null,
            curAtfBtn: require('../assets/modelIsNotFavorit.svg'),
            modelFavorit: false,
            modelTitle: "Всякие модели там разные",
            modelPrice: 3500,
            modelInfo: "Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности позволяет выполнить важнейшие задания по разработке существующих финансовых и административных условий. Не следует, однако, забывать о том, что реализация намеченного плана развития создаёт предпосылки качественно новых шагов для позиций, занимаемых участниками в отношении поставленных задач.",
            models: [
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
            params1: [
                {
                    name: "Платформа",
                    value: "Blender",
                },
                {
                    name: "Дата публикации",
                    value: "12.03.2023",
                },
                {
                    name: "Полигоны",
                    value: 26731,
                },
                {
                    name: "Вершины",
                    value: 27391,
                },
                {
                    name: "Текстуры",
                    value: true,
                },
            ],
            params2: [    
                {
                    name: "Материалы",
                    value: true,
                },
                {
                    name: "UV развертка",
                    value: true,
                },
                {
                    name: "PBR",
                    value: true,
                },
                {
                    name: "Анимация",
                    value: false,
                },
                {
                    name: "Риги",
                    value: false,
                },
            ],
        }
    },

    created(){
        console.log(this.$route.params.modelID)
        this.loadModelById(parseInt(this.$route.params.modelID))
    },
    methods: {
        ...mapActions('storeModelById', ['loadModelById']),
        ...mapGetters('storeModelById', ['getModel']),
        setModelImg(value){
            this.currentImg = value
        },
        addToFavorit(){
            if(this.modelFavorit){
                this.curAtfBtn = require('../assets/modelIsNotFavorit.svg')
                this.modelFavorit = false
            }else {
                this.curAtfBtn = require('../assets/modelIsFavorit.svg')
                this.modelFavorit =true
            }
        },
    }
}

</script>

<style>

.modelPageBody {
    background-color: #181729;
    background-image: url('../assets/backgroundModelPage.png');
    background-image: no-repeat;
    height: 100%;
}

.modelPageWrapper{
    background-color: #5C5C5C;
    border-radius: 10px;
    padding: 20px 15px;
}

.nodelPageImgWrapper{
    margin-top: 30px;
    margin-bottom: 20px;
    height: 700px;
    display: flex;
}

.modelPageMainImg{
    width: 80%;
    background-color: white;
    border-radius: 10px  ;
    
}

.modelPageListImg{
    width: 19%;
    margin-left: 1%;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 10px;
}

.modelPageSmallImg {
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
}

.modelPageFirstInfoFild{
    display: flex;
    justify-content: space-between;
}

.modelPageSeller {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    background-color: #9a9a9a00;
    cursor: pointer;

    transition: background  .2s linear;
}

.modelPageSeller:hover {
    background-color: #444444;
}

.modelPageSellerAvatar{
    border-radius: 20px;
    height: 100%;
}

.modelPageSellerNickname {
    font-family: 'M PLUS 1';
    font-size: 16px;
    color: white;
    font-weight: 400;
}

.modelPageTitle {
    margin-top: 10px;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
    color: white;

    cursor: default;
}

.modelPageBuyMenu {
    display: flex;
    gap: 14px;
    align-items: center;
}

.modePagePrice {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;

    color: #FFFFFF;
}

.modelPageBuyBtn {
    height: 50px;
    width: 200px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 30px;

    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #747474;
    cursor: pointer;

    transition: background .2s linear, color .2s linear;
}

.modelPageBuyBtn:hover {
    background-color: #b3b3b3;
    color: #e7e6e6;
}

.modelPageAtfBtn {
    border: none;
    background-color: #44444400;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.modelPageAtfBtn img {
    height: 100%;
}

.modelPageSecondInfoFild {
    border-top: 3px solid #88888835;
    border-bottom: 3px solid #88888835;
    padding: 20px 5px;
    margin: 20px 0;
}

.modelPageModelInfo {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;
    cursor: default;

    user-select: none;
}

.modelPageThridInfoFild {
    display: flex;
    justify-content: space-between;
}

.modelPageThridInfoFild div {
    flex: 48%;
    padding: 10px 5px;
    gap: 2%;
}

.modePageCharactLeft {
    border-right: 3px solid #88888835;
}

.modePageCharactRight {
    margin-left: 10px;
}

.modelPageParams {
    display: flex;
    justify-content: space-between;
    cursor: default;
}

.modelPageParamsState {
    height: 20px;
    width: 20px;
}

.modelPageParamsName {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;
}

.modelPageParamsValue {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    color: #b6b6b6;
}

</style>