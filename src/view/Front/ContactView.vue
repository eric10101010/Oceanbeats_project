<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <!-- breadcrumb -->
    <section class="contactBack">
        <div class="container gx-0">
            <BreadCrumb :breadcrumb-name="breadcrumbName"></BreadCrumb>
            <ul class="row ps-0 pt-lg-6 pt-md-6 pt-0 pb-lg-6 pb-md-4 pb-4 mb-0 d-md-flex justify-content-md-center justify-content-center mx-0 list-unstyled" data-aos="fade-up" data-aos-duration="1500">
                <li class="contactItem col-lg-6 col-md-10 col-10 ps-0">
                    <div class="contactPhoto d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1567787899110-e8399c09cbe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80') 50% 45%;">
                        <h3 class="display-5 text-light text-center">Oceanbeats<br>台北館</h3>
                        <div class="contactText pt-lg-5 pt-lg-4 pt-md-4 pt-2 pb-lg-4 pb-md-4 pb-0">
                            <p>地點:台北市大安區復興南路二段202號</p>
                            <p>電話：(02)2266-2188</p>
                            <p>營業時間：週一至週日10:00~21:00</p>
                        </div>
                    </div>
                </li>
                <li class="contactMap col-lg-6 col-md-10 col-10 px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.174076873652!2d121.54138231633563!3d25.028165844676465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzQxLjQiTiAxMjHCsDMyJzM2LjkiRQ!5e0!3m2!1szh-TW!2stw!4v1619939605303!5m2!1szh-TW!2stw"
                            width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" style="border: 0px;">
                    </iframe>
                </li>
            </ul>
            <ul class="row ps-0 pb-lg-6 pb-md-5 pb-4 mb-0 d-flex flex-row-reverse justify-content-center mx-0 list-unstyled" data-aos="fade-up" data-aos-duration="1500">
                <li class="contactItem col-lg-6 col-md-10 col-10 ps-0">
                    <div class="contactPhoto d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80') 60% 20%;">
                        <h3 class="display-5 text-light text-center">Oceanbeats<br>台中館</h3>
                        <div class="contactText pt-lg-5 pt-lg-4 pt-md-4 pt-2 pb-lg-4 pb-md-4 pb-0">
                            <p>地點:台中市西屯區台灣大道三段251號</p>
                            <p>電話：(04)2433-6688</p>
                            <p>營業時間：週一至週日10:00~21:00</p>
                        </div>
                    </div>
                </li>
                <li class="contactMap col-lg-6 col-md-10 col-10 px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.2111658086787!2d120.64233391634967!3d24.164325978751187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8cea6a6b63%3A0xafd8ce8af60532e9!2zNDA35Y-w5Lit5biC6KW_5bGv5Y2A5Y-w54Gj5aSn6YGT5LiJ5q61MjUx6Jmf6Jmf!5e0!3m2!1szh-TW!2stw!4v1628666284446!5m2!1szh-TW!2stw"
                                width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" style="border: 0px;">
                    </iframe>
                </li>

            </ul>
            <ul class="row ps-0 pt-0 pb-8 mb-0 d-md-flex justify-content-md-center justify-content-center mx-0 list-unstyled" data-aos="fade-up" data-aos-duration="1500">
                <li class="contactItem col-lg-6 col-md-10 col-10 ps-0">
                    <div class="contactPhoto d-flex justify-content-center align-items-center" style=" background: url('https://i.imgur.com/UV7vCdq.jpg') 30% 20%;">
                        <h3 class="display-5 text-light text-center">Oceanbeats<br>高雄館</h3>
                        <div class="contactText pt-lg-5 pt-lg-4 pt-md-4 pt-2 pb-lg-4 pb-md-4 pb-0">
                            <p>地點:高雄市前鎮區中華五路789號</p>
                            <p>電話：(07)8261-1264</p>
                            <p>營業時間：週一至週日10:00~21:00</p>
                        </div>
                    </div>
                </li>
                <li class="contactMap col-lg-6 col-md-10 col-10 px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5706866394285!2d120.30473501634249!3d22.595154737833504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0372ebc9d327%3A0x92317d11de68daf9!2z5aSi5pmC5Luj6LO854mp5Lit5b-DIERyZWFtIE1hbGw!5e0!3m2!1szh-TW!2stw!4v1628666381525!5m2!1szh-TW!2stw"
                                width="100%" height="100%" frameborder="0" ria-hidden="false" tabindex="0" style="border: 0px;">
                    </iframe>
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
            subjectTilte: '聯絡資訊',
            breadcrumbName:'聯絡資訊',
            backList:  'https://i.imgur.com/pnDEi7J.jpeg',
        }
    },
    components: {
        BannerTop,
        BreadCrumb,
    },
    mounted () {
        AOS.init();
    }
}

</script>

<style lang="scss" scoped>
.contact {
    &Back {
        font-family: 'GenSenRounded';
        background-image: url("https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80");
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &Item {
        position: relative;
        overflow: hidden;
        height: 480px;
        cursor: pointer;
        @media (max-width:992px) {
            height: 360px;
        }
        @media (max-width:767px) {
            height: 240px;
        }
        &:hover {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
            .contactText {
                opacity: 1;
                visibility: visible;
                transform: translateY(0%);
                @media (max-width:767px) {
                    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
                    transform: translateY(0%);
                }
            }
        }
    }
    &Photo {
        transition: 1s ease-in-out;
        content: '';
            position: absolute;
            width: 100%;
            height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        @media (max-width:992px) {
            h3 {
                font-size: 56px;
            }
        }
        @media (max-width:767px) {
            h3 {
                font-size: 36px;
            }
        }
    }
    &Text {
        position: absolute;
        bottom: 0;
        z-index: 1;
        background-color: rgba(2, 2, 2, 0.5);
        opacity: 0.8;
        visibility: hidden;
        transform: translateY(50%);
        transition: 0.3s ease-in-out;
        width: 100%;
        color: #fff;
        text-align: center;
        p {
            font-size: 20px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 8px;
            @media (max-width:992px) {
                font-size: 18px;
            }
            @media (max-width:767px) {
                font-size: 12px;
            }
        }
    }
    &Map {
        height: 480px;
        @media (max-width:992px) {
            height: 100%;
        }
    }
}

</style>