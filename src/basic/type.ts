type StrOrNum = string | number

let data: StrOrNum
data = 123
data = "123"

type TextLike = string | { text: string }
type Coordinate = [number, number]
type Callback = (data: string) => void
