<template>
    <div>
      <button @click="showNextLine">显示下一行</button>
      <pre>
        <code class="language-javascript">
        {{ displayedCode }}
      </code>
    </pre>

    
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        lines: [],
        currentLineIndex: 0,
        displayedCode: ""
      };
    },
    computed: {
      currentLine() {
        return this.lines[this.currentLineIndex];
      }
    },
    methods: {
      showNextLine() {
        if (this.currentLineIndex < this.lines.length - 1) {
          this.currentLineIndex++;
          this.displayedCode += "\n" + this.currentLine; // 追加新的行到已显示的代码
        }
      }
    },
    mounted() {
      this.lines = this.sourceCode.split("\n");
      this.displayedCode = this.lines[0]; // 初始化已显示的代码为第一行
    },
    props: {
      sourceCode: {
        type: String,
        required: true
      }
    }
  };
  </script>