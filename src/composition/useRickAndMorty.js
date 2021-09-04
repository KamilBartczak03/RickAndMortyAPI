import { reactive, ref, computed, watch } from "vue"

export default class RickAndMortyAPI{
  constructor(){
    this.pagination = 1
    this.maxPages = null
    this.queue = reactive([])
    this.loading = ref(false)
    
    /*
      Sprawdź czy w kolejce znajduję się string "LOADING" i na tej
      podstawie określ czy this.loading jest true czy false.
    */
    watch(this.queue, ()=>{
      if(this.queue.some(el => el === "LOADING")) this.loading.value = true
      else this.loading.value = false
    })
  }

  fetchMoreCharacters(){
    /* 
      Sprawdź czy osiągnięto maksymalny limit parametru page oraz
      czy aktualnie wykonuje się jakieś zapytanie do API.
    */
    if(this.pagination === this.maxPages || this.loading.value) return
    let currentPage = this.pagination
    this.queue[currentPage-1] = "LOADING"
    this.pagination++

    /*
      Wykonaj zapytanie do API. Jeśli jest to pierwszy fetch pobierz
      także informacje o tym jaki jest max. parametr ?page
    */
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(response => response.json())
    .then(response => {
      if(currentPage === 1) this.maxPages = response.info.pages
      this.queue[currentPage-1] = response.results.map(char => ({id: char.id, name: char.name, img: char.image}))
    })
  }

  get characterList(){
    // Zwraca listę postaci bez niepotrzebnych kluczy
    return computed(() => this.queue.flat().map(ch => ({value: ch.id, name: ch.name})  ))
  }
}