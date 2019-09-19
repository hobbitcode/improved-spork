<template>
  <v-container fluid>
    <v-btn block @click="testHello">Hello Message</v-btn>
    <v-btn block @click="testSuccess">Success</v-btn>
    <v-btn block @click="testCancel">Cancel</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    testHello () {
      window.top.postMessage('hello', '*')
    },
    testSuccess () {
      window.top.postMessage('success', '*')
    },
    testCancel () {
      window.top.postMessage('cancel', '*')
    }
  }
}
    </script>
