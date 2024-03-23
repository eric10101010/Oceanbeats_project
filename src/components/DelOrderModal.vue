<template>
    <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1"
            aria-labelledby="delOrderodalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 id="delOrderModalLabel" class="modal-title">
                    <span>刪除訂單</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除編號：
                    <strong class="text-danger">
                        {{ newTempOrder.id }}
                    </strong> 訂單<br>(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    取消
                    </button>
                    <button type="button" class="btn btn-danger" @click="delOrder()">
                    確認刪除
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['delOrder', 'tempOrder'],
        data() {
            return {
                delOrderModal: null,
                newTempOrder: {},
            }
        },
        methods: {
            openModal() {
                this.delOrderModal.show();
            },
            closeModal() {
                this.delOrderModal.hide();
            }
        },
        watch: {
            tempOrder: function (newVal, oldVal) {
                this.newTempOrder = newVal;
            }
        },
        mounted() {
            this.delOrderModal = new bootstrap.Modal(this.$refs.delOrderModal);
        }
    }
</script>