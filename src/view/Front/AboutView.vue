<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <!-- breadcrumb -->
    <!-- <BreadCrumb :breadcrumb-name="breadcrumbName"></BreadCrumb> -->
    <!-- About -->
    <section class="aboutBack">
        <div class="container-fluid ">
            <ul class="aboutText row mb-0 list-unstyled py-lg-8 py-md-6 py-4">
                <li class="col-lg-5 col-md-6 col-10 d-flex justify-content-center px-0" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-offset="150">
                    <img src="../../assets/about.jpg" alt="" class="object-fit-cover w-100">
                </li>
                <li class="col-lg-7 col-md-6 text-white text-center" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-offset="150">
                    <h2 class="display-5 fw-bolder pt-lg-4 pt-md-4 pt-3">Oceanbeats</h2>
                    <p class="px-lg-0 px-md-3 h5 pb-0">
                        Oceanbeats理念是全力以赴，不斷自我挑戰<br>
                        讓用戶在使用時能有最好的聽感體驗。<br>
                        專注打造出最純粹，最頂級的音質，<br>
                        為您呈現音樂本質是Oceanbeats的使命，<br>
                        讓您享有舒適的配戴體驗更是我們的榮幸。
                    </p>
                </li>
            </ul>
            <ul class="row aboutInfor list-unstyled mb-0">
                <li class="aboutInforItem aboutInforOne col-lg-4 col-md-4 col-10 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white px-lg-5 px-md-2 px-3" >
                        <h3 class="pt-3 fw-bold">核心技術</h3>
                        <p class="pt-lg-1">
                            QCC514X晶片高速運算，降低延遲，<br>
                            ANC主動降噪技術精準抵消外界噪音，<br>
                            最新版藍牙5.2，支援SBC、AAC音頻。
                        </p>
                    </div>
                </li>
                <li class="aboutInforItem aboutInforTwo col-lg-4 col-md-4 col-10 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white px-lg-5 px-md-2 px-3">
                        <h3 class="pt-3 fw-bold">創新研發</h3>
                        <p class="pt-lg-1">
                            設計翻新，融合前沿科技與時尚元素，<br>
                            由創新材料和工藝，打造輕巧耐用產品，<br>
                            讓用戶享受音樂時尚與科技的便利。
                        </p>
                    </div>
                </li>
                <li class="aboutInforItem aboutInforThree col-lg-4 col-md-4 col-10 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white px-lg-5 px-md-2 px-3">
                        <h3 class="pt-3 fw-bold">專業服務</h3>
                        <p class="pt-lg-1">
                            Oceanbeat提供完整的產品售後服務，<br>
                            即時處理用戶遭遇問題，給予即時協助。<br>
                            包括產品使用諮詢，產品維修諮詢。
                        </p>

                    </div>
                </li>
            </ul>
            <ul class="aboutText row mb-0 list-unstyled py-lg-8 py-md-6 py-4 d-flex flex-row-reverse">
                <li class="col-lg-5 col-md-6 d-flex justify-content-center"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                    <img src="https://images.unsplash.com/photo-1646500366920-b4c5ce29237d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="object-fit-cover w-100">
                </li>
                <li class="col-lg-7 col-md-6 text-white text-center" data-aos="zoom-in-up" data-aos-duration="1500">
                    <h2 class="display-5 fw-bolder pt-lg-4 pt-md-4 pt-3">Oceanbeats</h2>
                    <p class="px-lg-0 px-md-3 h5">
                        我們的耳機融合了優雅設計與卓越音質，<br>
                        成為您日常生活的時尚配件。<br>
                        注入創新與精湛工藝，呈現獨特的品牌風格。<br>
                        無論您是追求極致音質還是注重時尚潮流，<br>
                        Oceanbeats都能滿足您的需求。
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import BannerTop from '../../components/BannerTop.vue';
import BreadCrumb from '../../components/BreadCrumb.vue';

export default {
    data() {
        return {
            subjectTilte: '關於我們',
            breadcrumbName:'關於我們',
            backList:  'https://i.imgur.com/pnDEi7J.jpeg',
        }
    },
    components: {
        BannerTop,
        BreadCrumb
    },
    mounted () {
        AOS.init();
    }
}
</script>
<style lang="scss" scoped>
.about {
    &Text {
        font-family: 'GenSenRounded';
        p{
            line-height: 2.5rem;
        }
        @media (max-width: 992px) {
            h2 {
                font-size: 36px;
            }
            p {
                font-size: 16px;
                line-height: 2rem;
            }
        }
        @media (max-width: 767px) {
            display: flex;
            justify-content: center;
            h2 {
                font-size: 28px;
            }
            p {
                font-size: 14px;
                line-height: 1.5rem;
                
            }
        }
        img {
            @media (max-width: 767px) {
                max-height: 360px;
            }
        }
    }
    &Back {
        background-image: url("https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80");
        min-height: 50vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;       
    }
    &Infor {
        &One {
            background: url("https://i.imgur.com/34gNpiJ.jpg");
        }
        &Two {
            background: url("https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=2275&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        }
        &Three {
            background: url("https://i.imgur.com/BsWYQWr.jpg");
        }
        @media (max-width: 767px) {
            display: flex;
            justify-content: center;
        }
        &Item {
            font-family: 'GenSenRounded';
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 250px;
            @media (max-width: 992px) {
                min-height: 240px;
                h3 {
                    font-size: 24px;
                }
                p {
                    font-size: 12px;
                }
            }
            @media (max-width: 767px) {
                min-height: 140px;
                h3 {
                    font-size: 20px;
                }
                p {
                    font-size: 14px;
                }
            }
            img {
                max-width: 100%;

            }
        }
        &Text {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
}
</style>
