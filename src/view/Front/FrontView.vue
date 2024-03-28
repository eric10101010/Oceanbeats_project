<template>
    <header class="header bg-primary">
        <div class="headerBox container px-0 d-block d-lg-flex d-md-flex">
            <div class="headerLogo d-lg-block d-md-block d-none">
                <routerLink to="/"><h1>Oceanbeats</h1></routerLink>
            </div>
            <nav class="headerList">
                <ul class="headerMenu list-unstyled mb-0">
                    <li class="headerItem me-3">
                        <routerLink to="/about" class="text-white text-decoration-none">關於我們</routerLink> 
                    </li>
                    <li class="headerItem me-3">
                        <routerLink to="/products" class="text-white text-decoration-none">產品列表</routerLink> 
                    </li>
                    <li class="headerItem me-3">
                        <routerLink to="/contact" class="text-white text-decoration-none">聯絡資訊</routerLink>
                    </li>
                    <li class="headerItem me-3 position-relative">
                        <routerLink to="/cart" class="text-white text-decoration-none">
                            <i class="bi bi-cart-fill" style="font-size: 1.5rem;"></i>
                            <span class="rounded-pill bg-danger text-white position-absolute px-2"
                                style="right: -20px; top: -16px;">
                                {{ this.carts?.length }}
                            </span>
                        </routerLink>
                    </li>
                </ul>
            </nav>
            <nav class="hamburgerBox d-flex align-items-center justify-content-between d-lg-none d-md-none d-flex">
                <div class="headerLogo">
                    <a href="/"><h1>Oceanbeats</h1></a>
                </div>
                <input type="checkbox" id="toggler" class="d-none">
                <label for="toggler">
                    <div class="btn hamburger d-lg-none d-md-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <ul class="hamburger-menu bg-primary text-white d-flex list-unstyled">
                    <li class="headerItem pb-lg-0 pb-md-0 mb-3">
                        <a class="nav-link pt-4" href="/Oceanbeats_project/#/about">關於我們</a>
                        <!-- <routerLink to="/about" class="pageScroll text-decoration-none">關於我們2</routerLink>  -->
                    </li>
                    <li class="headerItem pb-lg-0 pb-md-0 mb-3">
                        <a class="nav-link" href="/Oceanbeats_project/#/products">商品列表</a>
                        <!-- <routerLink to="/products" class="pageScroll text-decoration-none">產品列表</routerLink>  -->
                    </li>
                    <li class="headerItem pb-lg-0 pb-md-0 mb-3">
                        <a class="nav-link" href="/Oceanbeats_project/#/contact">聯絡資訊</a>
                        <!-- <routerLink to="/contact" class="pageScroll text-decoration-none">聯絡資訊</routerLink> -->
                    </li>
                    <li class="headerItem position-relative"> 
                        <!-- 購物車 -->
                        <a href="/Oceanbeats_project/#/cart" class="nav-link text-decoration-none">
                            購物車
                            <span class="rounded-pill bg-danger text-white position-absolute px-2 ms-1"
                                style="right: -18px; top: -10px;">
                                {{ this.carts?.length }}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <RouterView></RouterView>
    <div class="footer bg-primary py-6">
        <div class="container">
            <ul class="footer-expend-lg d-flex justify-content-evenly mb-3 list-unstyled">
                <li>
                    <h4 class="text-light mb-4 ps-3 h5">公司資訊</h4>
                    <ul class="ps-3 list-unstyled text-center">
                        <li class="mb-4">
                            <router-link to="/about" class="text-light text-decoration-none">
                            關於我們
                            </router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/products" class="text-light text-decoration-none">
                            商品選購
                            </router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/contact" class="text-light text-decoration-none">
                            門市資訊
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 class="text-light mb-4 ps-3 h5">服務範圍</h4>
                    <ul class="ps-3 list-unstyled text-center">
                        <li class="mb-4">
                            <router-link to="/" class="text-light text-decoration-none">
                            維修保固
                            </router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="text-light text-decoration-none">
                            客服諮詢
                            </router-link>
                        </li>
                            <li class="mb-4">
                            <router-link to="/" class="text-light text-decoration-none">
                            軟體支援
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 class="text-light mb-4 ps-3 h5">
                    後台管理
                    </h4>
                    <ul class="ps-3 list-unstyled text-center">
                        <li class="mb-2">
                            <router-link class="text-light text-decoration-none" to="/login">
                                登入後台
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <hr class="border border-white">
        <div class="container d-flex flex-column align-items-center justify-content-center mt-lg-8 mt-md-6 mt-6">
            <p class="text-light">© 2024 Oceanbeat</p>
            <p class="text-light">僅供個人學習使用 無商業用途</p>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    font-family: 'GenSenRounded';
    @media (max-width:992px) {
        padding: 0 39px;
    }
    @media (max-width:767px) {
        padding: 0 15px;
    }
    &Logo {
        width: 80px;
        padding: 30px 0;
        background: url(../../assets/logo.png) no-repeat center;
        background-size: contain;
        white-space: nowrap;
        overflow: hidden;
        text-indent: 101%;
        @media (max-width:992px) {
                width: 60px;
            }
        @media (max-width:767px) {
            width: 40px;
            padding: 20px 0;
        }
        &:hover{
            opacity: 0.5;
            transition: all .3s;
        }
    }
    &Box {
        justify-content: space-between;
        align-items: center;
    }
    &Item {
        a {
            color: #FFF;
            font-size: 24px;
            cursor: pointer;
            &:hover{
                opacity: 0.5;
                transition: all .3s;
            }
            @media (max-width:992px) {
                font-size: 20px;
            }
            @media (max-width:767px) {
                font-size: 16px;
            }
        }
        @media (max-width:992px) {
            font-size: 16px;
        }
    }
    &Menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width:767px) {
            display: none;
        }
    }
}
.footer {
    font-family: 'GenSenRounded';
}
.hamburger-menu {
    opacity: 0.97;
    z-index: 100;
    width: 100%;
    height:250px;
    position: absolute;
    top: 80px;
    right: 0;
    transform: scaleY(0);
    transition: transform .3s ease-in-out;
    transform-origin: 50% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#toggler:checked ~ .hamburger-menu {
    transform: scaleY(1);
}

.hamburger  {
    margin: 0 8px;
    position: relative;
    width: 36px;
    height: 26px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
}
.hamburger span{
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #FFF;
    border-radius: 10px;
    opacity: 1;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}
.hamburger span:nth-child(1) {
    top: 0px;
}
.hamburger span:nth-child(2),.hamburger span:nth-child(3) {
    top: 12px;
}
.hamburger span:nth-child(4) {
    top: 24px;
}
.hamburger.open span:nth-child(1) {
    top: 12px;
    width: 0%;
    left: 50%;
}
.hamburger.open span:nth-child(2) {
    transform: rotate(45deg);
}
.hamburger.open span:nth-child(3) {
    transform: rotate(-45deg);
}
.hamburger.open span:nth-child(4) {
    top: 12px;
    width: 0%;
    left: 50%;
}
</style>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('open');
    });
});

export default {
    computed: {
        ...mapState(cartStore, ['carts']),
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),

    },
    mounted() {
        this.getCart();
    }
}



</script>

