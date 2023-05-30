<template>
    <div>
        
            <div class="modelCard">
                <div class="modelImgCardContainer">
                    <img class="modelImgCard" :src="imgUrl">
                </div>
                    
                <div class="modelInfoCardContainer">
                    <div class="modelInfoCard">
                        <h5 class="modelTitleCard">{{ title }}</h5>
                        <div class="modelRatingCard">
                            <img class="likeModelRatingCard" src="../assets/likeModelCard.svg">
                            <span>4</span>
                            <img class="dislikeModelRatingCard" src="../assets/disLikeModelCard.svg">
                            <span>5</span>
                        </div>
                    </div>
                </div>
                
            </div>
    
    </div>
</template>

<script>
//import router from '@/router';

export default {
    name: "modelCard",
    props: {
        title: {
            type: String,
            validator(value) {
                return value.length < 50;
            }
        },
        imgUrl: {
            type: String,
        }
    },
    data() {
        return {};
    },
    //components: { router }
}
</script>

<style>

    .modelCardLink {
        text-decoration: none;
    }
    .modelCard {
        width: 100%;
        cursor: pointer;
        
    }
    .modelImgCardContainer {
        position: relative;
        width: 100%;
    }
    .modelImgCardContainer::before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    .modelImgCard {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0 0 0 15px;
        width: 100%;
        height: 100%;
    }    
    .modelInfoCardContainer {
            display: flex;
            justify-content: flex-end;
        }
    .modelInfoCard {
        background-color: black;
        display: flex;
        justify-content: space-between;
        width: 80%;
        
        border-radius: 0 0 5px 10px;
        padding: 5px 10px;
    }
    
    .modelTitleCard {
        color: white;
        font-size: 18px;
    }

    .modelRatingCard {
        display: flex;
        align-items: center;
    }

    .modelRatingCard img {
        margin-left: 15px;
        margin-right: 5px;
    }

    .modelRatingCard span {
        color: white;
    }

</style>