<template>
	<div id="editor">
    <nav>
      <ul class="nav-bar">
        <li class="active">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-credential"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-xueli"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-skill"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use xlink:href="#icon-fav"></use>
          </svg>
        </li>
      </ul>
    </nav>
	</div>
</template>
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
</style>
