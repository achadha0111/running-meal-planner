<template>
    <div class="main">
        <div class="container">

            <div class="col-md-12">

                <!-- Title Text -->
                <h1 class="title-text col-md-12"> Add Recipe </h1>
                <RecipeForm/>

            </div>

        </div>

    </div>
</template>

<script>
    import RecipeForm from "../components/RecipeForm.vue"

    export default {
        name: 'AddRecipes',
        components: {
            RecipeForm,
        }
    }

</script>

<style scoped>

</style>