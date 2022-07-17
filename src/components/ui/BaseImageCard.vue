<template>
  <a-card id="a-card-style" hoverable>
    <template #cover>
      <img id="img-style" alt="example" 
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png">
    </template>
    <h1 id="name-style">Adiel Caw</h1>
    <div id="divider-style"></div>
    <p>This is the description</p>
  </a-card>
</template>


<style scoped>
#a-card-style {
  width: 400px;
  padding-top: 10px;
  border-radius: 3vh; 
  text-align: center;
}
#img-style {
  position: relative; 
  width: 280px; 
  height: 280px; 
  overflow: hidden; 
  border-radius: 50%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#divider-style {
  border-top: 4px solid #042940;
  width: 45px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
#name-style {
  font-size: 40px;
  color: #042940;
  font-weight: 800;
}
</style>
