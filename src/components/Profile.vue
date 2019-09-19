<template>
    <v-container>
        <v-layout>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                label="Outlined"
                outlined
                v-model="firstName"
              ></v-text-field>
            </v-col>
        </v-layout>
        <v-layout>
            <v-col cols="12" sm="6" md="3">
                <v-btn block @click="submitProfile">Button</v-btn>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data: () => ({
        firstName: ''
      }),
      watch: {
        firstName () {
            if (this.firstName.length > 4) {
                alert('Too Long!')
            }
        }
      },
      methods: {
        submitProfile () {
            alert('Submitted: ' + this.firstName)
        }
      },
      created: function () {
        window.scrollTo(0,0)
      }
    }
</script>
