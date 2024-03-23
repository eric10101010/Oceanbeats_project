<template>
    <!-- breadcrumb -->
    <div class="breadcrumb container">
        <nav aria-label="breadcrumb row mb-3">
            <ul class="breadcrumb col-lg-12 col-md-12 col-12" aria-label="breadcrumb mb-3">
                <li class="breadcrumb-item">
                    <router-link to="/" class="text-secondary text-decoration-none">
                    首頁
                    </router-link>
                </li>
                <li class="breadcrumb-item active text-third" aria-current="page">
                    {{ breadcrumbName }}
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