<template>
    <!-- Banner -->
    <div class="bannerTop container-fluid d-flex align-items-center justify-content-center gx-0"
    :style="`background: url(${backList}) 30% 50% no-repeat` ">
        <div class="row bannerTopBox w-100">
            <div class="text-white text-center">
                <h2 class="text-center py-6">{{ subjectTilte }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner {
        &Top {
            height: calc(30vh + 50px);
            background-color: #ccc;
            background-size: cover;
            &Box {
                font-family: 'GenSenRounded';
                background-color: rgba(0, 0, 0, 0.7);
            }
        }
    }
</style>

<script>
    export default {
        props: ['subjectTilte', 'backList'],
    }

</script>