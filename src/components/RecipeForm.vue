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
                    <md-input id= "link" v-model="link" placeholder= "Link (to retrieve ingredients)"></md-input>
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
                    <md-button class="md-raised md-accent search-btn"
                    >Submit</md-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecipeForm",
        data: () => ({
            name: '',
            mealType: '',
            workoutType: '',
            link: '',
            containsMeat: ''
        }),
    }
</script>

<style scoped>

</style>