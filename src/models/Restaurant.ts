class Restaurant {
  title: string
  categories: string[]
  image: string
  rating: string
  text: string
  id: number

  constructor(
    title: string,
    categories: string[],
    image: string,
    rating: string,
    text: string,
    id: number
  ) {
    this.title = title
    this.categories = categories
    this.image = image
    this.rating = rating
    this.text = text
    this.id = id
  }
}

export default Restaurant
