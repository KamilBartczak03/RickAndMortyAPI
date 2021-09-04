export default {
  title: {
    required: true,
    required_msg: "Please enter the title",
    validator(v) {
      if (v.length < 3 || v.length > 32) return "Title should be between 3 and 32 characters long"
    }
  },
  message: {
    required: true,
    required_msg: "Please enter the message",
    validator(v) {
      if (v.length > 256) return "Message cannot be longer than 256 characters"
    }
  },
  character: {
    required: true,
    required_msg: "Please choose the character"
  },
  quickpost: {
    validator(v){
      null
    }
  }
}