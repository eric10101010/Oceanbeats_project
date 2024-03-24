<template>
    <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
            aria-hidden="true">
        <div class="modal-dialog modal-l">
            <div class="modal-content border-0">
            <div class="modal-header bg-primary text-white">
                <h5 id="couponModalLabel" class="modal-title">
                    <span v-if="isNew === true">新增優惠券</span>
                    <span v-else>編輯優惠券</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row ">
                    <div class="col-sm-12">
                        <div class="mb-3">
                            <label for="coupon_title" class="form-label">優惠券名稱:</label>
                            <input id="coupon_title" type="text" class="form-control" placeholder="請輸入優惠券名稱"
                            v-model="newTempCoupon.title">
                        </div>
                        <div class="mb-3">
                            <label for="coupom_code" class="form-label">優惠碼:</label>
                            <input id="coupom_code" type="text" class="form-control" placeholder="請輸入優惠碼"
                            v-model="newTempCoupon.code">
                        </div>
                        <div class="mb-3">
                            <label for="due_date">到期日:</label>
                            <input id="due_date" type="date" class="form-control" v-model="due_date">
                        </div>
                        <div class="mb-3">
                            <label for="coupon_precent" class="form-label">折扣百分比:</label>
                            <input id="coupon_precent" type="number" min="0" max="100" class="form-control" placeholder="請輸入折扣百分比"
                            v-model.number="newTempCoupon.percent">
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                                    v-model="newTempCoupon.is_enabled" id="is_enabled">
                                <label class="form-check-label" for="is_enabled">
                                    是否啟用
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateTempCoupon()">
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
        emits: ['update-temp-coupon'],
        props: ['tempCoupon', 'isNew'],
        data() {
            return {
                coupounModal: null,
                newTempCoupon: {},
                due_date: ''
            }
        },
        methods: {
            ...mapActions(useToastMessageStore, ['pushMessage']),
            openModal() {
                this.couponModal.show();
            },
            closeModal() {
                this.couponModal.hide();
            },
            updateTempCoupon() {
                this.$emit('update-temp-coupon', this.newTempCoupon);
            }
        },
        watch: {
            tempCoupon: function (newVal, oldVal) {
                this.newTempCoupon = newVal;
                const dateAndTime = new Date(this.newTempCoupon.due_date * 1000).toISOString().split('T');
                [this.due_date] = dateAndTime;
            },
            due_date() {
                this.newTempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
            },
        },
        mounted() {
            this.couponModal = new bootstrap.Modal(this.$refs.couponModal);
        }
    }
</script>

