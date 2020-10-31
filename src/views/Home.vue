<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WorkoutForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkoutForm from "../components/WorkoutForm";

export default {
  name: 'Home',
  components: {
    WorkoutForm
  }
}
</script>
