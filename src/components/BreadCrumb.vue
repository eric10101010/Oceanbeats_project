<template>
    <!-- breadcrumb -->
    <div class="breadcrumb">
        <nav aria-label="breadcrumb">
            <ul class="d-flex mt-lg-6 mt-md-4 mt-4" aria-label="breadcrumb ">
                <li class="breadcrumbItem">
                    <router-link to="/" class="text-decoration-none">
                    首頁 
                    </router-link>
                </li>
                <li class="breadcrumbItem text-secondary" aria-current="page">
                    <span class="px-2">/</span>{{ breadcrumbName }}
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: ['breadcrumbName'],
}
</script>

<style lang="scss" scoped>
.breadcrumb {
    font-family: 'GenSenRounded';
    &Item {
        a {
            color: #9EB8D9;
            &:hover {
                color: #9EB8D9;
                opacity: .7;
                transition: .3s;
            }
        }

    }
}
</style>