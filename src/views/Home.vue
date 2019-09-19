<template>
  <v-container fluid>
    <v-btn block @click="testSuccess">Success</v-btn>
    <v-btn block @click="testCancel">Cancel</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    testSuccess () {
      window.top.postMessage('success', '*')
    },
    testCancel () {
      window.top.postMessage('cancel', '*')
    }
  }
}
    </script>
