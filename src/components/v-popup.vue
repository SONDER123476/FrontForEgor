<template>
  <div class="v-popup">
    <p class="message">Открыть?</p>
    <div class="options">
      <button class="btn" @click="$router.push({ name: 'mainPage' }), logOut()">Yes</button>
      <button class="btn" @click="closePopup">No</button>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default{
    name: "v-popup",
    props: {},
    data(){
      return{}
    },
    methods: {
      ...mapActions('userStore', ['logOut']),
      closePopup(){
        this.$emit('closePopup')
      }
    }
  }

</script>
<style lang="scss">
  .v-popup{

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


    .message {
  font-size:1.1rem;
  margin-bottom: 1.6rem;
  margin-top: 0;
  color: white;
}
.btn {
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

.btn:last-child {
  margin: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
  }
  
</style>