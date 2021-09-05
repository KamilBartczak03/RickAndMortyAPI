import { reactive } from "vue"

class Validator{

  clearErrors(){
    for (const key in this.error) {
      this.error[key] = null
    }
  }

  hasErrors(){
    for (const key in this.error) {
      if(this.error[key]) return this.error
    }
  }

  // Sprawdź czy pole w "schema" spełnia parametr "required"
  required_validator(model, data, key){
    if(model.required === true && !Boolean(data)){
      const error_message = model.required_msg || `Field ${key} is required. Got ${data}`
      this.error[key] = error_message
      console.error("require error: " + error_message)
      return false
    }
    return true
  }

  // Sprawdź dane za pomocą funkcji "validator(v)" z "schema"
  custom_validator(model, data, key){
    if(model.validator){
      let error = model.validator(data)
      if(error) {
        this.error[key] = error
        console.error("validator error: " +error)
      }
    }
  }

  //Wykonaj funckje sprawdzające poprawność danych
  validate(callback){
    for (const key in this.schema) {
      const model = this.schema[key]
      const data = this.state[key]

      const passed_required_validator = this.required_validator(model, data, key)
      if(passed_required_validator) this.custom_validator(model, data, key)
    }

    if(!this.hasErrors()) callback()
  }
}

/*
  Klasa validator została podzielona na dwie osobne
  deklaracje dla czytelności.
*/
export default class FormValidator extends Validator {
  constructor(schema) {
    super();
    this.schema = schema
    this.state = this.composeState(schema)
    this.error = this.composeError(schema)

  }

  //Stwórz reaktywny state formularza na podstawie "schema"
  composeState(schema) {
    let buffer = reactive({})
    for (const key in schema) {
      if (schema[key].type) {
        const type = (schema[key].type)()
        if (typeof type === "string") buffer[key] = ""
        else if (type instanceof Array) buffer[key] = []
        else if (typeof type === "object") buffer[key] = {}
        else if (typeof type === "number") buffer[key] = 0
        else if (typeof type === "boolean") buffer[key] = false
        else buffer[key] = null
      }
    }
    return buffer
  }

  //Stwórz reaktywny obiekt error na podstawie schema
  composeError(schema){
    let error = reactive({})
    for (const key in schema) {
      error[key] = null
    }
    return error
  }

  //Wywołaj validator i callback
  submit(callback){
    this.clearErrors()
    this.validate(() => callback(this.state))
  }
}