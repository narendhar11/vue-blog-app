<template>
    <div class="card">
        <div class="card-header">{{article.title}}</div>
        <div class="card-body">
            <p class="my-3" v-html="article.content.substring(0, 200)"></p>
            <router-link class="btn btn-primary" :to="`/article/${article.id}`">Read more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["article"]
}
</script>