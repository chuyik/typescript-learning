function formatCommandline(command: string[] | string) {
  let line = ""
  if (typeof command === "string") {
    line = command.trim()
  } else {
    line = command.join(" ").trim()
  }
  return line
}

var myType: string[] | string | number | boolean

myType = "type"
myType = ["a", "b", "c"]
myType = 100
myType = false
