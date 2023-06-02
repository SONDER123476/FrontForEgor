<template>
    <div class="uploadPageBody">
        <div class="headerContaineProfile">
            <header-part />
        </div>
        
        <div class="container">
            <div class="uploadePageWrapper">
                <div class="uploadInpNamePrice">
                    <div class="uploadNameFild">
                        <span class="uploadTitles"></span>
                        <input class="uploadInpName">
                    </div>
                    <div class="uploadPriceFild">
                        <span class="uploadTitles"></span>
                        <input class="uploadInpPrice">
                    </div>
                    
                </div>
                <div class="uploadInpCategory">

                </div>
                <div class="uploadFileFild">
                    <span class="uploadTitles"></span>
                    <div class="uploadFileInpBtn">
                        <input class="uploadFileInp">
                    <button class="uploadFileBtn"></button>
                    </div>
                </div>
                <div class="uploadCountPoliFild">
                    <span class="uploadTitles"></span>
                    <input class="uploadCountPoliInp">
                </div>
                <div class="uploadCountVertFild">
                    <span class="uploadTitles"></span>
                    <input class="uploadCountVertInp">
                </div>
                <div class="uploadRendFild">
                    <span class="uploadTitles"></span>
                    <div class="uploadRendInpBtn">
                        <input class="uploadRendInp">
                    <button class="uploadRendBtn"></button>
                    </div>
                </div>
                <div class="uploadPicFild">
                    <span class="uploadTitles"></span>
                    <div class="uploadPicInpBtn">
                        <input class="uploadPicInp">
                    <button class="uploadPicBtn"></button>
                    </div>
                </div>
                <div class="uploadSizeFild">
                    <div class="uploadSizeFild">
                        <span class="uploadTitles"></span>
                        <div class="uploadSizeInpSel">
                            <input class="uploadSizeInp">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="uploadSizeFild">
                        <span class="uploadTitles"></span>
                        <div class="uploadSizeInpSel">
                            <input class="uploadSizeInp">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="uploadSizeFild">
                        <span class="uploadTitles"></span>
                        <div class="uploadSizeInpSel">
                            <input class="uploadSizeInp">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="uploadDiscritionFild">
                        <span class="uploadTitles"></span>
                        <input class="uploadDiscritionInp">
                    </div>
                    <div class="uploadSendingFild">
                        <button class="uploadSenModel"></button>
                        <div class="uploadAcceptFild">
                            <input class="uploadAcceptChk">
                            <span class="uploadTitles"><a class="uploadComditionRef"></a></span>
                        </div>
                    </div>
                </div>
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
    background-color: #181729;
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