<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <div class="h-100">
                <b-row class="h-100 no-gutters">
                    <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
                        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
                            <div class="app-logo"/>
                            <h4 class="mb-0">
                                <div>Welcome back,</div>
                            </h4>
                            <div class="divider"/>
                            <div>
                                <Form>
                                    <b-row form>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="exampleEmail">Email</Label>
                                                <b-form-input  v-model="email" type="email" name="email" id="exampleEmail"
                                                              placeholder="Email here..."/>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="examplePassword">Password</Label>
                                                <b-form-input v-model="password" type="password" name="password" id="examplePassword"
                                                              placeholder="Password here..."/>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    <div class="divider"/>
                                    <div class="d-flex align-items-center">
                                        <div class="ml-auto">
                                            <b-button variant="primary" size="lg" @click="login()">Login to Dashboard</b-button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </b-col>
                    </b-col>
                </b-row>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data: () => ({
            email: '',
            password: '',
            slide: 0,
            sliding: null,
            loggedIn: false 
        }),

        methods: {
        login () {
        var uname = this.email;
        var pass = this.password;
        this.$store.dispatch('login', {"email": uname, "password": pass})   
        },
        getUserData(){
        this.$store.dispatch('getUserData') 
   
    }
        },
 
    }
</script>
