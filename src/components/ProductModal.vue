<template>
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
            aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew === true">新增產品</span>
                <span v-else>編輯產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                <div class="col-sm-4">
                    <div class="mb-2">
                        <!-- v-if="newTempProduct.imagesUrl.length === 0" -->
                        <div class="mb-3"  v-if="newTempProduct.imagesUrl?.length === 0">
                            <label for="imageUrl" class="form-label">輸入圖片網址</label>
                            <input type="text" class="form-control"
                                    placeholder="請輸入圖片連結" v-model="newTempProduct.imageUrl">
                        </div>
                        <img class="img-fluid" :src="newTempProduct.imageUrl">
                    </div>
                    <h3 class="mb-3">多圖新增</h3>
                    <div v-if="Array.isArray(newTempProduct.imagesUrl)"> 
                        <div class="mb-1">
                            <div class="mb-3" v-for="(image, key) in newTempProduct.imagesUrl" :key="key + 123">
                                <img class="img-fluid" :src="image">
                                <input type="text" class="form-control" v-model="newTempProduct.imagesUrl[key]"
                                placeholder="請輸入圖片連結">
                            </div>
                        </div>
                            <button class="btn btn-outline-primary btn-sm d-block w-100" 
                            @click="newTempProduct.imagesUrl.push('')"
                            v-if="newTempProduct.imagesUrl.length === 0 || newTempProduct.imagesUrl[newTempProduct.imagesUrl.length -1]">
                                新增圖片
                            </button>
                            <button v-if="newTempProduct.imagesUrl.length !== 0" class="btn btn-outline-danger btn-sm d-block w-100" @click="newTempProduct.imagesUrl.pop()">
                                刪除圖片
                            </button>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="mb-3">
                        <label for="title" class="form-label">標題</label>
                        <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="newTempProduct.title">
                    </div>

                    <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">分類</label>
                        <input id="category" type="text" class="form-control"
                                placeholder="請輸入分類" v-model="newTempProduct.category">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="newTempProduct.unit">
                    </div>
                    </div>

                    <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="newTempProduct.origin_price">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control"
                                placeholder="請輸入售價" v-model="newTempProduct.price">
                    </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入產品描述" v-model="newTempProduct.description">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入說明內容" v-model="newTempProduct.content">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox"
                                :true-value="1" :false-value="0" v-model="newTempProduct['is_enabled']">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateTempProduct()">
                確認
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useToastMessageStore } from "../stores/toastMessage";

    export default {
        emits: ['update-temp-product'],
        props: ['tempProduct', 'isNew'],
        data() {
            return {
                productModal: null,
                newTempProduct: {
                    imagesUrl: [],
                    imageUrl:'',
                    length: '',
                },
            }
        },
        methods: {
            ...mapActions(useToastMessageStore, ['pushMessage']),
            openModal() {
                this.productModal.show();
            },
            closeModal() {
                this.productModal.hide();
            },
            updateTempProduct () {
                this.$emit('update-temp-product', this.newTempProduct)
            }
        },
        watch: {
            // 在 tempProduct 屬性變化時執行
            tempProduct: function (newVal, oldVal) {
                this.newTempProduct = newVal
            }
        },
        mounted() {
            this.productModal = new bootstrap.Modal(this.$refs.productModal);
        }
    }
</script>

