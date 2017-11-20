<template>
	<div id="editor">
    <nav>
      <ul class="nav-bar">
        <li v-bind:class="{active: currentTab === 0}" v-on:click="currentTab = 0">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-credential"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab === 1}" v-on:click="currentTab = 1">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-xueli"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab === 2}" v-on:click="currentTab = 2">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-skill"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab === 3}" v-on:click="currentTab = 3">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li v-bind:class="{active: currentTab === 4}" v-on:click="currentTab = 4">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-fav"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="edit-content">
      <li v-bind:class="{active: currentTab === 0}">
        tab0
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        tab1
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        tab2
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        tab3
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        tab4
      </li>
    </ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        currentTab: 0
      }
    }
  }
</script>
<style lang="scss">
	#editor {
		border: 1px solid black;
    width: 30em;
    margin: 16px 8px 16px 16px;
    background: white;
	}
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #000;
    li > svg {
      fill: white;
    }
    li.active {
      background: white;
      svg {
        fill: black;
      }
    }
  }
  .edit-content {
    li {
      display: none;
    }
    li.active {
      display: block;
    }
  }
</style>
