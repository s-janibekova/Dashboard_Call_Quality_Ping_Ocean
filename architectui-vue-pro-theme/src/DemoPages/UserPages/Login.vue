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
                                <span>Please sign in to your account.</span>
                                <button @click="getProfileData()">Get profile data</button>
                            </h4>
                            <div class="divider"/>
                            <div>
                                <Form>
                                    <b-row form>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="exampleEmail">Email</Label>
                                                <b-form-input type="email" name="email" id="exampleEmail"
                                                              placeholder="Email here..."/>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="examplePassword">Password</Label>
                                                <b-form-input type="password" name="password" id="examplePassword"
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
import axios from 'axios'
    export default {
        data: () => ({

            slide: 0,
            sliding: null
        }),

        methods: {



// function getBoardData () {
//   return axios
//     .get('http://107.175.113.196:8080/api/v1/customers')
//     .then(data => {
//       data.data.forEach(element => {
//       return board
//     })




    login () {


        var session_url = 'https://api.pingocean.com:8081/auth';
        var uname = 'testregister@activ.kz';
        var pass = '123456';
        axios.post(session_url, {
            'email': uname,
            'password': pass
            }).then(function(response) {
            const token = "Bearer "+response.data.token;
            localStorage.setItem('user', JSON.stringify(token))
                console.log(token)
        }).catch(function(error) {
        console.log(error);
        });
                },


    getProfileData(){
    var session_url = 'https://api.pingocean.com:8081/profile';
    const token = localStorage.getItem('user')
    axios.defaults.headers.common['Authorization'] = JSON.parse(token)

    axios.get(session_url).then(function(response) {
    
    console.log(response)

    }).catch(function(error) {
    console.log(error);
    });
    }
        },
 
    }


//     Учетная запись:
// POST https://api.pingocean.com:8081/auth
// {
//   "email": "testregister@activ.kz",
//   "password":   "123456"
// }

// POST https://api.pingocean.com:8081/profile - передавать Bearer Token полученный в прошлом запросе
</script>
