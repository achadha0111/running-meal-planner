<!--TODO Add form validation -->
<template>
    <div>
        <div class = "md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <md-field>
                    <label>Name</label>
                    <md-input id= "name" v-model="name" required placeholder= "Name of recipe"></md-input>
                    <span class="md-error">There is an error</span>
                </md-field>
                <md-field>
                    <label for="meal-type">Meal Type</label>
                    <md-select name="meal-type" v-model="mealType" id= "meal-type" required>
                        <md-option value="breakfast">Breakfast</md-option>
                        <md-option value="lunch">Lunch</md-option>
                        <md-option value="dinner">Dinner</md-option>
                    </md-select>
                    <span class="md-error">There is an error</span>
                </md-field>
                <md-field>
                    <label for="workout-type">Workout Type</label>
                    <md-select name="workout-type" v-model="workoutType" id= "workout-type" required>
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                    <span class="md-error">There is an error</span>
                </md-field>
                <md-field>
                    <label>Link</label>
                    <md-input id= "link" v-model="link" placeholder= "Link (to retrieve ingredients)" required></md-input>
                </md-field>
                <label>Contains Meat?</label>
                <div>
                    <md-radio v-model= "containsMeat" :value="false">False</md-radio>
                    <md-radio v-model="containsMeat" :value="true">True</md-radio>
                </div>
            </div>
            <div class="md-layout-item"></div>
        </div>

        <!-- Search Button -->
        <div class="button">
            <div class="md-layout" :class="`md-alignment`">

                <div class="md-layout-item" style="margin-bottom:20px;">
                    <md-button v-on:click="sendPost" class="md-raised md-accent search-btn"
                    >Submit</md-button>
                </div>

            </div>
        </div>
        <h1 class="title-text col-md-12" v-if="postFailed" style="color: darkred"> Sorry, we are having trouble
            saving this recipe. Please try again later. </h1>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "RecipeForm",
        data: () => ({
            name: '',
            mealType: '',
            workoutType: '',
            link: '',
            containsMeat: '',
            postFailed: false
        }),

        methods: {
            sendPost: function () {
                this.postMovie(this.name, this.mealType, this.workoutType, this.link, this.containsMeat)
                this.name = '';
                this.mealType = '';
                this.workoutType = '';
                this.link = '';
                this.containsMeat = '';
                this.postFailed = false;
            },

            postMovie: async function(name, mt, wt, link, cm) {
                let result = await axios.post(`http://127.0.0.1:5000/saverecipe?name=${name}
                &mealType=${mt}&workoutType=${wt}&link=${link}&containsMeat=${cm}`);

                if (result.status !== 200) {
                    this.postFailed = false;
                }

            }
        }
    }
</script>

<style scoped>

</style>