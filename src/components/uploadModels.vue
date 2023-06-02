<template>
    <div class="uploadPageBody">
        <div class="headerContaineProfile">
            <header-part />
        </div>
        
        <div class="container">
            <div class="uploadePageWrapper">
                
            </div>
        </div>

        <footer-part />
    </div>
</template>

<script>
import headerPart from './header.vue';
import footerPart from './footer.vue';

export default {
    name: 'uploadModelPage',
    components: { headerPart, footerPart },
    data() {
        return {

        }
    },
}
</script>

<style>
.uploadPageBody {
    background-image: url('../assets/backgorundSellModelsPage.png');
    background-image: no-repeat;
    height: 100%;
}

.uploadePageWrapper {
    margin-top: 40px;
    background-color: rgba(255, 255, 255, 0.29);
    border-radius: 20px;
    height: 1200px;
}

</style>