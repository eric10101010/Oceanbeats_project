<template>
    <!-- Banner -->
    <div class="bannerTop container-fluid d-flex align-items-center justify-content-center gx-0"
    :style="`background: url(${backList}) 50% 50%`">
        <div class="row bannerTopBox w-100">
            <div class="text-white text-center">
                <h2 class="text-center p-5">{{ subjectTilte }}</h2>
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
        // data () {
        //     return {
        //         backList: {
        //             Cover:'https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        //         },
        //     }
        // }
    }

</script>