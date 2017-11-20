<template>
  <div id="editor">
    <nav>
      <ul class="nav-bar">
        <li v-for="i in [0,1,2,3,4]"
            v-bind:class="{active: currentTab === i}"
            v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use v-bind:xlink:href="`#icon-${icon[i]}`"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="edit-content">
      <li v-for="i in [0,1,2,3,4]"
          v-bind:class="{active: currentTab === i}">
        tab0
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentTab: 0,
        icon: ['credential', 'xueli', 'skill', 'work', 'fav'],
      }
    },
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
    width: 1em;
    height: 1em;
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
