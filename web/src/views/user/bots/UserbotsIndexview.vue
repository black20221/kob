<template>
    <ContentField>
        我的Bots
    </ContentField>
</template>
<script>
import ContentField from '../../../components/ContentField.vue'
import $ from 'jquery'
import { useStore } from 'vuex'
export default {
    components: {
        ContentField
    },
    setup() {
        const store = useStore();
        /* $.ajax({
            url: "http://127.0.0.1:3000/user/bot/add/",
            type: "post",
            data: {
                title: "bot的标题",
                description: "Bot的描述",
                content: "Bot的代码",
            },
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.logZ(resp);
            }
        })
        $.ajax({
            url: "http://127.0.0.1:3000/user/bot/remove/",
            type: "post",
            data: {
                bot_id: 4,
            },
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.logZ(resp);
            }
        }) */
        /* $.ajax({
            url: "http://127.0.0.1:3000/user/bot/update/",
            type: "post",
            data: {
                bot_id: 5,
                title: "bot的标题5",
                description: "Bot的描述5",
                content: "Bot的代码5",
            },
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.logZ(resp);
            }
        }) */
        $.ajax({
            url: "http://127.0.0.1:3000/user/bot/getlist/",
            type: "get",
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp) {
                console.log(resp);
            },
            error(resp) {
                console.logZ(resp);
            }
        })

    }
}
</script>
<style scoped></style>
