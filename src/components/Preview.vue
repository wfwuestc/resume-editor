<template>
	<div id="preview">
		<h1>{{resume.profile.name||'请填写姓名'}}</h1>
    <p>{{resume.profile.city||'请填写城市'}}</p>
    <hr>
    <section v-if="filter(resume.study).length>0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="item in resume.study">
          {{item.school}}
          {{item.degree}}
          {{item.specialty}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.skill).length>0">
      <h2>技能掌握</h2>
      <ul>
        <li v-for="item in resume.skill">
          {{item.type}}
          {{item.level}}
        </li>
      </ul>
    </section>
	</div>
</template>

<script>
  export default {
    props: ['resume'],
    methods: {
      filter(array) { //找出非空对象
        return array.filter(item => !this.isEmpty(item))
      },
      isEmpty:function (object) {
        let empty = true
        for(let key in object){
          if(object[key]){
            empty =false
            break
          }
        }
        return empty
      }
    }
  }
</script>
<style>
	#preview {
		border: 1px solid red;
		min-height: 100px;
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: white;
	}
</style>
