<template>
    <div id="container-style">
        <div id="title">EXPERIENCE</div>
        <div id="divider"></div>
        <a-row :gutter="16">
            <a-col :span="12" >
                <a-card id="border-style" title="Super 8 Retail Systems" :bordered="false" hoverable>
                    <p>Position: Systems Programmer</p>
                    <p>September 2017 - February 2022 </p>
                </a-card>
            </a-col>
            <a-col :span="12">
                <a-card id="border-style" title="PCCW Solutions Limited" :bordered="false" hoverable>
                    <p>Position: Systems Programmer</p>
                    <p>February 2022 - June 2022 </p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
#title {
    margin: 0;
}

#border-style {
    border-radius: 8px;
}
.ant-card {
    color: #042940 !important;
    text-align: justify !important;
}
.ant-card-head {
    text-align: center !important;
}
</style>