<template>
    <div id="delCouponModal" ref="delCouponModal" class="modal fade" tabindex="-1"
            aria-labelledby="delCouponodalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 id="delCouponModalLabel" class="modal-title">
                    <span>刪除優惠卷</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除優惠券：
                    <strong class="text-danger">
                        {{ newTempCoupon.title }}
                    </strong>
                    (刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    取消
                    </button>
                    <button type="button" class="btn btn-danger" @click="delCoupon()">
                    確認刪除
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['delCoupon', 'tempCoupon'],
        data() {
            return {
                delCouponModal: null,
                newTempCoupon: {},
            }
        },
        methods: {
            openModal() {
                this.delCouponModal.show();
            },
            closeModal() {
                this.delCouponModal.hide();
            }
        },
        watch: {
            tempCoupon: function (newVal, oldVal) {
                this.newTempCoupon = newVal;
            }
        },
        mounted() {
            this.delCouponModal = new bootstrap.Modal(this.$refs.delCouponModal);
        }
    }
</script>