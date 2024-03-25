<template>
    <!---首頁區塊1-banner--->
    <div class="indexBanner container-fluid d-flex align-items-center justify-content-center">
        <div class="row indexBannerBox text-white">
            <div class="col-12 text-center">
                <h2 class="pt-4">Oceanbeats</h2>
                <h2 class="typing px-lg-4 px-md-4 px-0">『專注聽覺深度沉浸體驗』</h2>
                <div class="text-center py-4">
                    <router-link to="/products" class="fw-bolder text-decoration-none py-2 px-4 btn btn-outline-light">
                        <span class="px-2 ">由此前往選購</span>
                        <i class="bi bi-caret-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!---首頁區塊2-品牌介紹--->
    <div class="indexAbout container d-flex flex-column my-lg-6 my-md-6 my-lg-6 my-md-6 my-4">
        <ul class="row list-unstyled mb-0 d-flex justify-content-center mb-lg-0 mb-md-0 mb-4">
            <li class="col-lg-6 col-md-6 col-10 gx-0" data-aos="fade-up" data-aos-duration="2000">
                <img class="object-fit-cover w-100" src="https://i.imgur.com/XQWFiqx.jpg" alt="aboout-1">
            </li>
            <li class="indexAboutText col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center text-center px-lg-4 px-md-4 px-3">
                <h3 class="pb-lg-4 pb-md-2 pb-1 pt-lg-0 pt-md-0 pt-3">品牌願景</h3>
                <p class="px-lg-0 px-md-0 px-4">Oceanbeats提供頂級音質與最舒適的佩戴體驗，<br>
                    致力於降躁科技的開發研究與舒適度調整改良，<br>
                    戴上Oceanbeats耳機後在音樂世界中盡情遨遊。
                </p>
            </li>
        </ul>
        <ul class="row list-unstyled mb-0 d-flex flex-lg-row-reverse flex-md-row flex-column align-items-center mb-lg-0 mb-md-0 mb-4 mt-lg-0 mt-md-4 mt-0">
            <li class="col-lg-6 col-md-6 col-10 gx-0" data-aos="fade-up" data-aos-duration="2000">
                <img class="object-fit-cover w-100" src="https://i.imgur.com/4RCfmNd.jpg" alt="aboout-1">
            </li>
            <li class="indexAboutText col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center text-center px-lg-4 px-md-4 px-3">
                <h3 class="pb-lg-4 pb-md-2 pb-1 pt-lg-0 pt-md-0 pt-3">品牌風格</h3>
                <p class="px-lg-0 px-md-0 px-4 mb-0">品牌風格主打海洋輕盈風，若用海洋來比擬音樂，<br>
                    不管是暴風雨的驚滔駭浪，亦或是海底安寧沉穩，<br>
                    獨家晶片皆會為您真實重現各式不同的最好音質
                </p>
            </li>
        </ul>
    </div>
    <!---首頁區塊3-產品分類--->
    <div class="indexCatelogBack container-fluid d-flex align-items-center justify-content-center">
        <ul class="row list-unstyled gx-0 mt-3 d-flex justify-content-center">
            <li class="indexCatelogItem col-lg-3 col-md-3 col-3 change mx-lg-2 mx-md-2 mx-3">
                <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=60');">
                    <div class="contents">
                        <router-link to="/products?category=有線耳機" class="text-decoration-none text-light text-center px-3 border border-light">
                            有線耳機
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/UHUqSwd.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=有線耳機" class="text-decoration-none text-light text-center px-3 border border-light">
                            有線耳機
                        </router-link>
                    </div>
                </div>
            </li>
            <li class="indexCatelogItem col-lg-3 col-md-3 col-3 change mx-lg-2 mx-md-2 mx-3">
                <div class="rotate-one" style="background-image: url('https://i.imgur.com/xtSWZJu.jpg');">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳機" class="text-decoration-none text-light text-center px-3 border border-light ">
                            藍芽耳機
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://images.unsplash.com/photo-1606400082792-fe14743a8e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳機" class="text-decoration-none text-light text-center px-3 border border-light ">
                            藍芽耳機
                        </router-link>
                    </div>
                </div>
            </li>
            <li class="indexCatelogItem col-lg-3 col-md-3 col-3 change mx-lg-2 mx-md-2 mx-3 mt-lg-0 mt-md-0 mt-3">
                <div class="rotate-one" style="background-image: url('https://i.imgur.com/MyRVJ7R.jpg'); background-position: 50% 50%">
                    <div class="contents">
                        <router-link to="/products?category=有線耳罩" class="text-decoration-none text-light text-center px-3 border border-light">
                            有線耳罩
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/gsPBD5L.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=有線耳罩" class="text-decoration-none text-light text-center px-3 border border-light">
                            有線耳罩
                        </router-link>
                    </div>
                </div>
            </li>        
            <li class="indexCatelogItem col-lg-3 col-md-3 col-3 change mx-lg-2 mx-md-2 mx-3 mt-lg-0 mt-md-0 mt-3">
                <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=60');  background-position: 35% 50%">
                    <div class="contents"          >
                        <router-link to="/products?category=藍芽耳罩" class="text-decoration-none text-light text-center px-3 border border-light">
                            藍芽耳罩
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/8BbcyqU.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳罩" class="text-decoration-none text-light text-center py-1 px-3 border border-light">
                            藍芽耳罩
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <!---首頁區塊4-產品輪播--->
    <div class="container my-lg-6 my-md-6 my-4">
        <swiper
            :slides-per-view="3"
            :space-between="20"
            :loop="true"
            :autoplay="autoplay"
            :loopFillGroupWithBlank="true"
            :navigation="true" :lazy="true"
            :breakpoints="{
                320: {
                slidesPerView: 1.2,
                spaceBetween: 10
                },
                480: {
                slidesPerView: 2,
                spaceBetween: 20
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 50
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 20
                }
            }"
            >
            <swiper-slide  v-for="item in hotSales" :key="item.id">
                <div class="indexSalesList shadow-sm pb-2 mb-1 bg-body rounded d-flex flex-column align-items-center">
                    <div class="d-flex">
                        <router-link :to="`/product/${item.id}`" class="position-relative object-fit-cover border-bottom">
                            <img :src="item.imageUrl" alt="hot-sale-photo"
                                    class="card-img-top"
                            >
                            <div class="indexSalesView position-absolute">
                                <span class="h5"><i class="bi bi-search me-2"></i>查看商品</span>
                            </div>
                        </router-link>
                    </div>
                    <ul class="list-undtyled mt-4">
                        <li class="d-flex align-items-center ps-4">
                            <div class="fw-bolder badge bg-secondary me-3">
                                <span>
                                    {{ item.category }}
                                </span>
                            </div>
                            <div class="fw-bolder">
                                <h3>
                                    {{ item.title }}
                                </h3>
                            </div>
                        </li>
                        <li class="d-flex mx-4 mt-2">
                            <div class="card-text  text-decoration-line-through">
                                <small class="me-1">原價</small>
                                <span>NT {{ item.origin_price }}</span>
                            </div>
                            <div class="card-text price mb-2">
                                <span class="me-1">特價:</span>
                                <span class="fw-bolder text-danger">NT{{ item.price }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!---首頁區塊5-訂閱--->
    <div class="indexSubscribe d-flex align-items-center justify-content-center">
        <div class="indexSubscribeBox px-4 pt-3 pb-4 w-100">
            <div class="text-white mb-3 mt-lg-0 mt-md-0 mt-5" :class="show ? '' : 'd-none d-md-none'">
                <h3>現在訂閱電子報</h3>
                <h3>即可獲得8折優惠劵!</h3>
            </div>
            <!--Pc+Pad-->
            <VeeForm class="g-0" :class="show ? '' : 'd-none d-md-none'"
                    v-slot="{ errors }" @submit="sendSubmit" id="subscribe">
                <div class="d-flex">
                    <VeeField  type="email" id="email" name="Email"
                            class="form-control w-75 d-lg-block " :class="{ 'is-invalid': errors['Email'] }"
                            :disabled="idDisabled" placeholder="name@mail.com" rules="email|required"
                            inputmode="email" v-model="email" autocomplete="off">
                    </VeeField>
                    <button type="submit" class="btn btn-primary text-white w-25 h-50" :disabled="idDisabled" @submit="sendSubmit">
                        訂閱
                    </button>
                </div>
            </VeeForm>
            <!--優惠卷-->
            <div class="text-white fade text-center" v-if="email" ref="done">
                <h4 class="mb-1 mt-3">
                    <span class="text-info">{{ email }}</span>
                </h4>
                <h4 class="text-white px-2 mb-3">已成功訂閱電子報</h4>
                <ul class="list-unstyled d-flex align-items-center justify-content-center">
                    <li>
                        <p class="mx-2 h4">8折優惠劵:</p>
                        <p class="h5" >
                            <i class="bi bi-patch-check-fill text-success"></i>
                            ocean2024
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Autoplay]);

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data () {
        return {
            show: true,
            idDisabled: false,
            mainProduct: [],
            productsData: [],
            email: '',
            hotSales: [
                {
                    id: '-Me8IdRogwlJlGDNC8Lx',
                    title: 'Whsa-024',
                    category: '藍芽耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1627033055985.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AWfVaeRiqiVs6uPX%2FcZf1ITCi3Wu9L00jJVwE9IxEIBj3rV7E5VWiDo%2B13Cj5dspMIS5qK65yz8CjBBNMVAiLdTkNZGwrcIkzt3Ftnly7R4USCud8pc8TdqVzCYXfglqkEPJVsaDW4ply79XVaJocZXs8N3IshJXuBDkf2EhaF18M%2B%2FUcVC52dzzmo3zh83MHG2%2FdkSmEIA%2BZw1rFNDA5BuPgYEopXE233apanI87b5ijoEMYw23wex%2BZCAp9sR8xt%2BcBXUtxOIRu7NoeDdDtuCS3KJ33xfQC85J1%2BeHQOtj%2Bj4AQYr%2BiMGrW2UNQc6u4prwkumkqFZZCtjqqOVz1g%3D%3D',
                    origin_price: 6000,
                    price: 5000
                },
                {
                    id: '-Me8DcAL4oCP1yFgBOp3',
                    title: 'Whsa-124',
                    category: '藍芽耳罩',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625848362921.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a86GeqR5BY4GX4UJNeK0l4c9a4591Z2RlhVqxibDg%2FnHbweok2hmk%2BITe9%2BXF%2BrWYS2B4Qx%2FPMrq2e4pXHE11GokoYcp%2BraW1b8sGw%2FrCst5SwTOXhZdmH2419egnUptX%2FAcH6hvOvAf4waybNz5NNInZG5y9gk4XKXSe20uL1d0SeoHGpjGIKrVLzRVNXQqEkw9APXD5b%2BoVGZgyqiHa4KkkPSSUPOKZZumAtut9XS6G%2Bl1s6IuS1NWwLyw68gtI2Z6ajtG7%2FwfjOsOBfRGTibsZCbPpRmliDAQCrYF6ZZZLX5rxf%2FoM3TRU1IMRZIgQzoCKrZB9Ccd65LY8Fv0sA%3D%3D',
                    origin_price: 4000,
                    price: 3000
                },
                {
                    id: '-Me8FCubDIljeTPSudXo',
                    title: 'Whsa-085',
                    category: '藍芽耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873767329.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PIb8HYob4ZPOvnBkG4s7f0T%2F%2BIBdhsqJfR3KbMdRCSELz4%2F7BOK%2Bs74LUidx0q0fFZpA%2BU7XolHcILcUeappEWwGS7aixHe8%2BL9jPnt4ZqxtF%2FNY2cqIP4XxQ%2BOTwTAgvtWDXs11O96fJ3pdXpzcZKEnOd5vst25C3ruYC2bL91cldYIi%2BBosFYVkj0nMaVmgonPwIpd%2F5%2BEH37xfmoRSmepWLswc9G4OKu6l29tYBAp2SWkA8KdLFNQTtustfzEitr2xFGy5F%2FoE5OCzrmLO65HkORKi3CVmWxMbonN6nkaKSQrOvTzKBreCnk3twL80QfW7yzFVdZhWbzKtYRqZw%3D%3D',
                    origin_price: 6000,
                    price: 5000
                },
                {
                    id: '-Me8EN4uFnRtPUFWw4bU',
                    title: 'Whsa-002',
                    category: '藍芽耳罩',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625884050628.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BGKq%2FsS9MIzw4eO%2FC%2Fe%2Bwq9zb59cJYO%2F5Ak5gnUiOKag80F0RGQ0MQZcr7a8ZqO%2FvTqsZ%2FOpvzwXbnf4edYgPNlEIPHehMsOJmqcIgdIWQJVBQm0aDY3EjffWjj0XgEmcUjB8dShhVfqwahn6uA8%2BXwmzXOaNJ2Qjh%2BM6xMyN4JcYXZzSOjUBdVLU1ZJ%2FIkwPWLHrQjfmyOeOkvKv%2FR%2B7WVxk2xZEd5nZIyTsEFjg8gCvmn6DlN1yTubvu3I9f89TOSIZQgsKYZEmgWKuDI%2BizvNWO8rt6hzKK8MpZwh5qjyXSDkIOBndAW6gXFiUDZIopbVIbW78ghNjtzK5%2Be9mg%3D%3D',
                    origin_price: 4000,
                    price: 3000
                },
                {
                    id: '-Me8IT2myUwaIEgQQLOg',
                    title: 'Whsa-177',
                    category: '有線耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873926424.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=akmbNsTmjgQ%2FLtGccjg7sCX4NOn9y%2Fus9Za3GAKNPcp%2F6D92LkgbcweOUxMOk%2FpuE6RGe%2Bvzsaq2%2F7zlr3b%2BMhNfE8Q%2FAIoqfU4kJjbRx6U4mo0MTCIpVCVossNJyBtmh8Pyq%2Bq3Fws1tGW5VrehpTNL3%2FyS8HlDKXQhsdybrffnNpIedDTWnZSOFuChaBifOYX%2FU%2FaPkZny%2B6OyNBDnGdyhoCAhBnTdDU6HvEDiqu%2BVB37w2Gkq%2FeNzq70QaA3QoVnJhNbOvvM5PRYMGgaXlHVbBiTRtxFadZGqYiE%2F%2FcjAMv5pAVfsskwqjKz%2Fz6EuXS6VaO%2FD0kskZfw5TYi5LA%3D%3D',
                    origin_price: 3000,
                    price: 2000
                }
            ],
            autoplay: {
                delay: 2500
            },
        }
    },
    methods: {
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
                axios.get(api)
                    .then(res => {
                        this.products = res.data.products;
                        // vm.isLoading = false;
                        // this.calculateCategories();
                        // console.log(res.data);
                    })
                    .catch(err => {
                        console.dir(err);
                    })
        },
        sendSubmit () {
            this.idDisabled = true
            setTimeout(() => {
                this.idDisabled = false;
                this.$refs.done.classList.add('show');
                this.show = false;
            }, 1500)
        },
    },
    mounted () {
        this.getProducts();
        AOS.init();
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>


<style lang="scss">
.index {
    &Banner {
        font-family: 'GenSenRounded';
        height:88vh;
        background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
        background-position:75% 50%;
        background-size: cover;
        @media (max-width: 992px) {
            height: 60vh;
        }
        @media (max-width: 767px) {
            height: 50vh;
        }
        &Box {
            background-color: rgba(0, 0, 0, 0.7);
            @media (max-width: 992px) {
                h2 {
                    font-size: 40px;
                }
            }
            @media (max-width: 767px) {
                h2 {
                    font-size: 24px;
                }
            }
        }
    }
    &About {
        &Text {
            h3 {
                font-family: 'GenSenRoundedBold';
                font-size: 36px;
                @media (max-width: 992px) {
                    font-size: 24px;
                }
            }
            p {
                font-family: 'GenSenRounded';
                font-weight: bold;
                font-size: 20px;
                line-height: 2.5rem;
                @media (max-width: 992px) {
                    font-size: 14px;
                    line-height: 2rem;
                }
                @media (max-width: 767px) {
                    line-height: 1.5em;
                }
            }
        }
    }
    &Catelog {
        &Back {
            font-family: 'GenSenRoundedBold';
            height:40vh;
            background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
            background-position: 80% 50%;
            background-size: cover;
            @media (max-width: 992px) {
                height: 25vh;
            }
            @media (max-width: 767px) {
                height: 30vh;
            }
        }
    }
    &Sales {
        &View {
            color: #fff;
            bottom: 0px;
            left: 0;
            right:0;
            top:0px;
            background-color: #000000;
            border-radius: 12px 12px 0px 0px;
            z-index: 10;
            padding: 8px 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: 0.5s;
            &:hover {
                opacity: .7;
            }
        }
        &List {
            font-family: 'GenSenRounded';
            h3 {
                font-family: 'GenSenRoundedBold';
            }
            @media (max-width: 992px) {
                max-width: 300px;
            }
            img {
                width: 100%;
                border-radius: 12px 12px 0px 0px;
            }
        }
    }
    &Subscribe {
        font-family: 'GenSenRounded';
        height:45vh;
        background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
        background-position: 80% 50%;
        background-size: cover;
        @media (max-width: 992px) {
                height: 30vh;
        }
        &Box {
            max-width: 600px;
            width: 100%;
            max-height: 200px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            @media (max-width: 992px) {
                h3 {
                    font-size: 24px;
                }
            }
            @media (max-width: 767px) {
                h3 {
                    font-size: 20px;
                }
            }
        }
    }
}
.change{
    width: 200px;
    height: 200px;
    position: relative;
    @media (max-width: 992px) {
        width: 160px;
        height: 160px;
    }
    @media (max-width: 767px) {
        width: 120px;
        height: 70px;
    }
}
.rotate-one, .rotate-two{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
    perspective: 1000px;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease-in;
}
.change .rotate-two{
    transform: rotateY(180deg);
}
.contents{
    transform: translateZ(100px);
    backface-visibility: hidden;
    @media (max-width: 767px) {
        a {
            font-size: 14px;
        }
    }
}
.change:hover .rotate-one{
    transform: rotateY(-180deg);
}
.change:hover .rotate-two{
    transform: rotateY(0deg);
}
.typing {
    width: 450px;
    animation: typing 5s steps(16), blink .8s infinite alternate;
    animation-iteration-count: infinite;
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    font-size: 2em;
    @media (max-width: 992px) {
        width: 300px;
    }
    @keyframes typing {
        from {
            width: 0%;
        }
    }
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
    
}
.swiper-button-next, .swiper-button-prev{
    display: none;
}
</style>
