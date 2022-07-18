<template>
  <a-card id="a-card-style" hoverable>
    <template #cover>
      <img id="img-style" alt="example" 
      src="https://media-exp1.licdn.com/dms/image/C5103AQHSlhB4venPcQ/profile-displayphoto-shrink_800_800/0/1578227697148?e=1663804800&v=beta&t=q2fDIXGT7QcnHitOt7Zn9Tmc1Lssg_uSH-Fww1N325Y">
    </template>
    <h1 id="name-style">Adiel Caw</h1>
    <div id="divider-style"></div>
    <p>Software Developer</p>
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
