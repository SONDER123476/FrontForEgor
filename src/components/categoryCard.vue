<template>
    <div>
        
            <div class="category-card">
                <img class="categoryImg" :src="imgUrl">
                <h3 class="categoryTitle">{{ title }}</h3>
            </div>
    
    </div>
</template>

<script>

export default {
    name: "catCard",
    props: {
        title: {
            type: String,
            validator(value) {
                return value.length < 50;
            }
        },
        imgUrl: {
            type: String,
        },
    },
    data() {
        return {};
    },
    //components: { router }
}
</script>

<style>
    .category-card {
        position: relative;
        width: 100%;
        background-color: black;
        border: 2px solid rgb(223, 223, 223);
        border-radius: 30px;

        text-align: center;
        color: rgb(255, 255, 255);

        cursor: pointer;
    }

    .category-card::before {
        content: "";
        display: block;
        padding-top: 56%;
    }

    .categoryCardLink {
        text-decoration: none;
    }

    .categoryImg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0%;
        border-radius: 25px;
        width: 100%;
        height: 88%;
    }
</style>