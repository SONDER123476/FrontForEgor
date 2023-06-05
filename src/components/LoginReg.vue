<template>
	<div class="sign-inContainer">
		<div class="LoginReg"  v-click-outside="away" >
			<body class="bdb">
				<div class="main"> 
					
					<input class="gg" type="checkbox" id="chk" aria-hidden="true">
					<button id='close' @click="away">Cancel</button>

						<div class="signup">
							<form >
								<label class="sdf" for="chk" aria-hidden="true">Sign up</label>
								<input class="gg" type="text" placeholder="User name" required="" v-model="formSignUp.name">
								<input class="gg" type="email" placeholder="Email" required="" v-model="formSignUp.email">
								<input class="gg" type="password" placeholder="Password" required="" v-model="formSignUp.password">
								<button class="sign" @click.prevent="signUpBtn()">Sign up</button>
							</form>
						</div>

						<div class="login">
							<form class="logan">
								<label class="sdf" for="chk" aria-hidden="true">Login</label>
								<input class="gg" type="email" name="email" placeholder="Email" required="" v-model="formLogIn.email">
								<input class="gg" type="password" name="pswd" placeholder="Password" required="" v-model="formLogIn.password">
								<button class="sign" @click.prevent="huets()">Login</button>
							</form>
						</div>
				</div>
			</body>
		</div>
    </div>

</template>


<script>
import { mapActions } from 'vuex';

  export default{
    name: "LoginReg",
    props: {},
    data(){
        return {
			formSignUp: {
				name: '',
				email: '',
				password: '',	
			},
			formLogIn: {
				email: '',
				password: '',	
			},
		}
    },
    methods: {
		...mapActions( 'userStore', ['signUp', 'logIn']),
        away(){
            this.$emit('away');

        },
		huets(){
			console.log(this.form.name)
		},
		signUpBtn() {
			this.signUp(this.formSignUp)
		},
		logInBtn(){
			this.logIn(this.formLogIn)
		}
    }
}

</script>
<style lang="scss">
#close {
	overflow: hidden;
	position: relative;
	border: none;
	padding: 0;
	width: 2em; height: 2em;
	border-radius: 50%;
	background: transparent;
	color: #1da1f2;
	font: inherit;
	text-indent: 100%;
	cursor: pointer;
    margin-left: 300px;
	
	&:focus {
		outline: solid 0 transparent;
		box-shadow: 0 0 0 2px #8ed0f9
	}
	
	&:hover {
		background: rgba(29, 161, 142, .1)
	}
	
	&:before, &:after {
		position: absolute;
		top: 15%; left: calc(50% - .0625em);
		width: .125em; height: 70%;
		border-radius: .125em;
		transform: rotate(45deg);
		background: currentcolor;
		content: ''
	}
	
	&:after { transform: rotate(-45deg); }
}
.logan{
    background: gray;

    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
}

.sign-inContainer{
	position: fixed;
	background-color: #00000013;
	backdrop-filter: blur(5px);
	width: 100%;
	height: 100%;
	z-index: 1100;
}

.LoginReg{
	position: absolute;
    top: 50%;
	left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem 3rem;
    border-radius: 10px;
	z-index: 10;
}
.bdb{
    background: none;
}
.main{
	width: 350px;
	height: 500px;
	background-color: rgb(0, 0, 0);
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #ffffff96;
	padding-top: 15px;
}
#chk{
	display: none;
}
.signup{
	position: relative;
    
	width:100%;
	height: 100%;
}
.sdf{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
.gg{
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
.sign{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #000000ad;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
    border: 2px solid #FFFFFF;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;


}
.sign:hover{
    color: #000000;
	background: #ffffffb0;
}
.login{
	height: 460px;
	background: #000000;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #000000;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}
</style>