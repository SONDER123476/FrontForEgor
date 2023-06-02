<template>
    <div class="erorr404Page">
        <div class="container">
            <div class="erorrNumber">
                <h1 class="Number404">404</h1>
            </div>
            <div class="erorrText">
                <span class="Text404">Упс... похоже такой страницы не существует...</span>
            </div>
            <button class="erorr404GtmBtn" @click="$router.push({ name: 'mainPage' })">Вернуться на главную</button>    
        </div>
    </div>
</template>

<script>

export default {
    name: 'erorr404Page',
}

</script>

<style>

.erorr404Page {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #181729;
}

.erorrNumber {
    margin-top: 15%;
    border-bottom: 2px solid white;
}

.Number404 {
    color: white;
    font-size: 66px;
}

.erorrText {
    margin: 20px 0;
}

.Text404{
    color: white;
    font-size: 36px;
}

.erorr404GtmBtn{
    height: 50px;
    width: 300px;
    background-color: #e0e0e0;
    border: 2px solid black;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 600;

    transition: background .2s linear;
}

.erorr404GtmBtn:hover {
    background-color: #919191;
}

</style>

