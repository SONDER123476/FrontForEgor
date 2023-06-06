<template>
    <div class="pay-wallet">

        <div class="modal-content">
          <h2 class="Popoln">Пополнение средств</h2>
          <input type="number" v-model="amount" placeholder="Введите сумму">
          <div class="modal-buttons">
            <button class="btn2" @click="addMoney" >Пополнить</button>
            <button class ="btn2" @click="closePopup">Отмена</button>
          </div>
        </div>

    </div>
  </template>
  
  <script>
import { mapActions } from 'vuex';

  export default{
    name: "pay-wallet",
    amount: null,
    props: {},
    data(){
      return{}
    },
    methods: {
      ...mapActions('userStore',['walletUpdate']),
      addMoney(){
        console.log(this.amount)
        
          this.walletUpdate(this.amount)
        if (this.amout > 0){
          this.closePopup()
        } else {
          console.log(this.amount)
        }
        
      },
      closePopup(){
        this.$emit('closePopup')
      }
    }
  }
  </script>
  
  <style lang="scss">
  /* Стили для модального окна */

  
  .modal-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 3rem;
    border: 3px solid black;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.644);
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .btn2 {
  color:inherit;
    font-family:inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;
}

.btn2:last-child {
  margin: 0;
}

.btn2:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn2:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}
.Popoln{
    color: white;
}
  </style>