<template>
    <div class="uploadPageBody">
        <div class="headerContaineProfile">
            <header-part />
        </div>
        
        <div class="container">
            <div class="uploadePageWrapper">
                <div class="uploadInpNamePrice">
                    <div class="uploadNameFild">
                        <span class="uploadTitles">Название</span>
                        <div class="uploadIntContainer">
                            <input class="uploadInpName" placeholder="Введите название">
                        </div>
                    </div>
                    <div class="uploadPriceFild">
                        <span class="uploadTitles">Цена</span>
                        <div class="uploadIntContainer">
                            <input class="uploadInpPrice" placeholder="Введите стоимость">
                        </div>
                        
                    </div>
                    
                </div>
                <div class="uploadInpCategory">
                    <span class="uploadTitles">Выберите категорию</span>


                </div>
                <div class="uploadFileFild">
                    <span class="uploadTitles">Файл модлеи</span>
                    <div class="uploadIntContainer">
                        <input class="uploadFileInp" placeholder="Выберите файл в формате .zip, .rar">
                        <button class="uploadUpBtn">Загрузить</button>
                    </div>
                </div>
                <div class="uploadCountPoliFild">
                    <span class="uploadTitles">Количество полигонов</span>
                    <div class="uploadIntContainer">
                      <input class="uploadCountPoliInp" placeholder="Введите количество полигонов">  
                    </div>
                </div>
                <div class="uploadCountVertFild">
                    <span class="uploadTitles">Количество вершин</span>
                    <div class="uploadIntContainer">
                        <input class="uploadCountVertInp" placeholder="Введите количество вершин">
                    </div>
                </div>
                <div class="uploadRendFild">
                    <span class="uploadTitles">Изображение для превью</span>
                    <div class="uploadIntContainer">
                        <input class="uploadRendInp" placeholder="Выберите файл в формате .jpeg, .png">
                        <button class="uploadUpBtn">Загрузить</button>
                    </div>
                </div>
                <div class="uploadPicFild">
                    <span class="uploadTitles">Изображения модели</span>
                    <div class="uploadIntContainer">
                        <input class="uploadPicInp" placeholder="Выберите файл в формате .jpeg, .png">
                        <button class="uploadUpBtn">Загрузить</button>
                    </div>
                </div>
                <div class="uploadSizeFild">
                    <div class="uploadSizeYFild">
                        <span class="uploadTitles">Длина</span>
                        <div class="uploadIntContainer">
                            <input class="uploadSizeInp" placeholder="Введите значение">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="uploadSizeXFild">
                        <span class="uploadTitles">Ширина</span>
                        <div class="uploadIntContainer">
                            <input class="uploadSizeInp" placeholder="Введите значение">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="uploadSizeZFild">
                        <span class="uploadTitles">Высота</span>
                        <div class="uploadIntContainer">
                            <input class="uploadSizeInp" placeholder="Введите значение">
                            <select class="uploadUnitsSelect" >
                                <option ></option>
                            </select>
                        </div>
                    </div>
                </div>
                    <div class="uploadDiscritionFild">
                        <span class="uploadTitles">Описание</span>
                        <div class="uploadIntContainer">
                            <input class="uploadDiscritionInp" placeholder="Введите текст не более хуй знает скольки символов">
                        </div>                        
                    </div>
                    <div class="uploadSendingFild">
                        <div class="uploadInfContainer">
                            <button class="uploadSenModel">Отправить на модерацию</button>
                            <input type="checkbox" class="uploadAcceptChk">
                            <span class="uploadTitles">Я принимаю <a class="uploadComditionRef">условия пользования для авторов</a></span>
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
    padding: 50px 70px;
}

.uploadTitles {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: white;
    }

.uploadInpNamePrice {
    display: flex;
    justify-content: flex-start;
    gap: 40px;
}

input {
    height: 30px;
    width: 400px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #ffffff11;

    margin-right: 10px;
    padding-left: 10px;

    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: white;   
}

input:focus {
    outline: 0;
    background-color: rgba(43, 43, 43, 0.603);
}
input::placeholder {
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.486); 
}

.uploadInpPrice {
    height: 30px;
    width: 200px;
}


.uploadIntContainer {
    margin-bottom: 20px;
}

.uploadUpBtn {
    text-align: center;
    height: 32px;
    width: 100px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #ffffff11;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: white; 

    cursor: pointer;

    transition: background .2s linear;
}

.uploadUpBtn:hover {
    background-color: #ffffff44;
}

.uploadUpBtn:active {
    background-color: #8a8a8a44;
}

.uploadSenModel {
    text-align: center;
    height: 32px;
    width: 200px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #ffffff11;
    font-family: 'M PLUS 1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: white; 

    cursor: pointer;

    transition: background .2s linear;
}

.uploadSenModel:hover {
    background-color: #ffffff44;
}

.uploadSenModel:active {
    background-color: #8a8a8a44;
}


.uploadSizeFild {
    display: flex;
    gap: 20px;
}

.uploadSizeInp {
    width: 130px;
}

.uploadUnitsSelect {
    height: 32px;
    width: 50px;

    outline: 0;

    cursor: pointer;

    border: 1px solid white;
    border-radius: 10px;
    background-color: #ffffff11;
}

.uploadComditionRef {
    color: #1b13c0;
    cursor: pointer;
}

.uploadInfContainer {
    display: flex;
    align-items: center;
}

.uploadAcceptChk {
    height: 20px;
    width: 20px;
    margin: 0 20px;
    padding: 0;

    background-color: #ffffff11;
    border-radius: 5px;
}

</style>