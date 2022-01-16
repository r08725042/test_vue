const vm = new Vue({
    el:'#vm',
    delimiters: ['[[', ']]'],
    data:{
      userName:'Celeste',
      message:'apple',

    },
    methods:{
      greet1: function(){
        document.getElementById('btn1').disabled=true
        document.getElementById('btn2').disabled=false
      },
      greet2: function(){
        document.getElementById('btn1').disabled=false
        document.getElementById('btn2').disabled=true
      }
    }
    
  })