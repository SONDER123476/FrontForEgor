export default {
    data() {
        return {
            isLoginVisible: false
        }
    },
    methods: {
        awayclose(){
          this.isLoginVisible = false;
        },
        showLoginPole(){
          this.isLoginVisible = true;
        },
      },
}