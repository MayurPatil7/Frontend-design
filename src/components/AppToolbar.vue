<template>
  <v-toolbar >
    <div>
    <v-toolbar-title>FrontEnd-Design</v-toolbar-title>
    <v-spacer></v-spacer>
   
      <router-link to="/login">
      <v-tab flat>Login</v-tab>
      </router-link>  
      <router-link to="/Register">
      <v-tab flat>Register</v-tab>
      </router-link>
      <router-link to="/UserProfile">
      <v-tab flat>UserProfile</v-tab>
      </router-link>
    </div>
  </v-toolbar>
</template>