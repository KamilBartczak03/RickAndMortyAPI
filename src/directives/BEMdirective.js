/*
  Dyrektywa, która dodaje sprecyzowane w jej argumentach
  modyfikatory w zależności czy zostanie do niej przekazana
  wartość true czy false.
*/
export default {
  mounted(el, binding){
    el.classList.add(binding.arg.split("--")[0])
    if(binding.value){
      el.classList.add(binding.arg)
    }else{
      el.classList.remove(binding.arg)
    }
  },

  updated(el, binding){
    if(binding.value){
      el.classList.add(binding.arg)
    }else{
      el.classList.remove(binding.arg)
    }
  },
}