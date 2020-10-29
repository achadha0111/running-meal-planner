<template>
    <div>

        <!-- Search Field -->
        <div class = "md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <md-field>
                    <label>Name</label>
                    <md-input id= "name" placeholder= "Name of recipe"></md-input>
                </md-field>
                <md-field>
                    <label for="meal-type">Meal Type</label>
                    <md-select name="meal-type" id= "meal-type">
                        <md-option value="breakfast">Breakfast</md-option>
                        <md-option value="lunch">Lunch</md-option>
                        <md-option value="dinner">Dinner</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label for="workout-type">Workout Type</label>
                    <md-select name="workout-type" id= "workout-type">
                        <md-option value="rest">Rest</md-option>
                        <md-option value="normal">Normal</md-option>
                        <md-option value="heavy">Heavy</md-option>
                    </md-select>
                </md-field>
                <md-field>
                    <label>Link</label>
                    <md-input id= "link" placeholder= "Link (to retrieve ingredients)"></md-input>
                </md-field>
                <label>Contains Meat?</label>
                <div>
                    <md-radio :value="false">True</md-radio>
                    <md-radio :value="true">False</md-radio>
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
        name: "RecipeForm"
    }
</script>

<style scoped>

</style>