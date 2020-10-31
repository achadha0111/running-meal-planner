<template>
    <div>
        This is the meal plan page.
        <div v-if="noMealPlan">No meal plan to display.</div>
    </div>

</template>

<script>
    function fetchMealPlan(qParams, callback) {
        console.log(qParams);
        setTimeout(() => {
            callback(null, "MealPlan");
        }, 3000);

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
            console.log("beforerouteupdate")
            this.mealPlan = null;
            fetchMealPlan(to.query, (err, mealPlan) => {
                this.setData(err, mealPlan);
                next()
            })
        },

        methods: {

            setData(err, mealPlan) {
                if (err) {
                    this.error = err.toString()
                } else {
                    this.noMealPlan = false;
                    this.mealPlanGenerated = true;
                    this.mealPlan = mealPlan;

                }

            }
        }
    }
</script>

<style scoped>

</style>