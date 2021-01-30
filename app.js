const projectclass = document.getElementById('projectdoh')
const mainf = document.getElementById('mainf')
const mainshit = document.getElementById('mainshitbro')
const closebtn = document.getElementById('close')

projectclass.addEventListener('click', function(){
    mainf.style.display='none'
    mainshit.style.display='block'
}) 

closebtn.addEventListener('click', function(){
    mainf.style.display='block'
    mainshit.style.display='none'

})