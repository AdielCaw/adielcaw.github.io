<template>
    <a-card id="border-style" hoverable style="width: 300px">
        <div id="icon-style">
            <slot></slot>
        </div>
        <a-card-meta title="Sample Vue Project" description="These are some of the things I can do with VUE!">
        </a-card-meta>
    </a-card>
</template>

<style scoped>
#border-style {
    border-radius: 8px;
}
#icon-style {
    font-size: 180px;
    text-align: center;
    color: #10454F;
}
</style>