<template>
    <div>
        <div class = "md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <h1>Workout Type (Rest, Normal, High)</h1>
                <md-field>
                    <label for="monday-workout-type">Monday</label>
                    <md-select name="monday-workout-type" v-model="mondayWorkoutType" id= "monday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="tuesday-workout-type">Tuesday</label>
                    <md-select name="tuesday-workout-type" v-model="tuesdayWorkoutType" id= "tuesday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="wednesday-workout-type">Wednesday</label>
                    <md-select name="wednesday-workout-type" v-model="wednesdayWorkoutType" id= "wednesday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="thursday-workout-type">Thursday</label>
                    <md-select name="thursday-workout-type" v-model="thursdayWorkoutType" id= "thursday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="friday-workout-type">Friday</label>
                    <md-select name="friday-workout-type" v-model="fridayWorkoutType" id= "friday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="saturday-workout-type">Saturday</label>
                    <md-select name="saturday-workout-type" v-model="saturdayWorkoutType" id= "saturday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="sunday-workout-type">Sunday</label>
                    <md-select name="sunday-workout-type" v-model="sundayWorkoutType" id= "sunday-workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
            </div>
            <div class="md-layout-item"></div>
        </div>

        <!-- Search Button -->
        <div class="button">
            <div class="md-layout" :class="`md-alignment`">

                <div class="md-layout-item" style="margin-bottom:20px;">
                    <md-button v-on:click="generatePlan" class="md-raised md-accent search-btn"
                    >Generate Meal Plan</md-button>
<!--                        <md-progress-spinner :md-diameter="20" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner> -->

                </div>


            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "WorkoutForm",
        data: () => ({
            mondayWorkoutType: '',
            tuesdayWorkoutType: '',
            wednesdayWorkoutType: '',
            thursdayWorkoutType: '',
            fridayWorkoutType: '',
            saturdayWorkoutType:'',
            sundayWorkoutType: '',
            generatingMealPlan: false
        }),
        methods: {
            generatePlan: function () {
                console.log("Push");
                this.$router.push({ path: 'mealplan', query: { mondayWorkoutType: this.mondayWorkoutType,
                        tuesdayWorkoutType: this.tuesdayWorkoutType, wednesdayWorkoutType: this.wednesdayWorkoutType,
                        thursdayWorkoutType: this.thursdayWorkoutType, fridayWorkoutType: this.fridayWorkoutType,
                        saturdayWorkoutType: this.saturdayWorkoutType,
                        sundayWorkoutType:  this.sundayWorkoutType} });
                console.log("Pushing");
            }
        }
    }
</script>

<style scoped>

</style>