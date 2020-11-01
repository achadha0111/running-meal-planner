<template>
    <div>
        <h1>Meal Plan</h1>
        <div v-if="mealPlanGenerated" class="md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item">
                <div class="button">
                    <div class="md-layout" :class="`md-alignment`">

                        <div class="md-layout-item" style="margin-bottom:20px;">
                            <md-button v-on:click="downloadPlan" class="md-raised md-accent search-btn"
                            >Download Plan</md-button>
                            <!--                        <md-progress-spinner :md-diameter="20" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner> -->

                        </div>


                    </div>
                </div>
                <h1>Monday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.mwt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.mwt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.mwt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Tuesday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.twt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.twt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.twt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Wednesday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.wwt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.wwt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.wwt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Thursday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.thwt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.thwt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.thwt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Friday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.fwt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.fwt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.fwt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Saturday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.swt.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.swt.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.swt.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
                <h1>Sunday</h1>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.sust.Breakfast[0].Name}}</div>
                        <div class="md-subhead">Breakfast</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.sust.Lunch[0].Name}}</div>
                        <div class="md-subhead">Lunch</div>
                    </md-card-header>
                </md-card>
                <md-card>
                    <md-card-header>
                        <div class="md-title">{{mealPlan.data.sust.Dinner[0].Name}}</div>
                        <div class="md-subhead">Dinner</div>
                    </md-card-header>
                </md-card>
            </div>
            <div class="md-layout-item"></div>
        </div>
        <div v-if="noMealPlan">No meal plan to display.</div>

    </div>


</template>

<script>

    import axios from 'axios';
    // import jsPDF from 'jsPDF';

    async function fetchMealPlan(qParams, callback) {
        try {
            let generatedMealPlan = await axios.get(`http://127.0.0.1:5000/getmealplan?mwt=${qParams.mondayWorkoutType}
                &twt=${qParams.tuesdayWorkoutType}&wwt=${qParams.wednesdayWorkoutType}&thwt=
                ${qParams.thursdayWorkoutType}&fwt=${qParams.fridayWorkoutType}&swt=${qParams.saturdayWorkoutType}
                &sust=${qParams.sundayWorkoutType}`);
            callback(null, generatedMealPlan);

        } catch (e) {
            callback(e, null);
            console.log(e);
        }

    }

    export default {
        name: "MealPlan",
        data: () => ({
            mealPlanGenerated: false,
            noMealPlan: true,
            error: null,
            mealPlan: null,
        }),

        beforeRouteEnter: (to, from, next) => {
            fetchMealPlan(to.query, (err, mealPlan) => {
                next(vm => vm.setData(err, mealPlan))
            });

        },

        beforeRouteUpdate: (to, from, next) => {
            this.mealPlan = null;
            fetchMealPlan(to.query, (err, mealPlan) => {
                this.setData(err, mealPlan);
                next()
            })
        },

        methods: {

            setData(err, mealPlan) {
                if (err) {
                    this.error = err.toString();
                    console.log(err);
                } else {
                    this.noMealPlan = false;
                    this.mealPlanGenerated = true;
                    this.mealPlan = mealPlan;

                    const ingredients = this.mealPlan.data.Ingredients;

                    console.log(ingredients);

                }

            },

            downloadPlan: () => {
                // const doc = new jsPDF();

                const ingredients = this.mealPlan.data.Ingredients;

                console.log(ingredients);
            },
        }
    }
</script>

<style scoped>

</style>