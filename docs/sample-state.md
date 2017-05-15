```js

{
  session: {
    currentUser: {
      id: 1,
      username: "brandon"
    },
    errors: []
  },

  businesses: {
    1: {
      name: "Super Duper Burger",
      address: "98 Mission St",
      city: "San Francisco",
      state: "CA",
      zip: 94105,
      phone_number: "(415) 974-1200",
      description: "Best burgers in SF"
      photos: {
        1: {
          image_url: "Link to photo"
          description: "Cool place!"
          tag: "Inside"
        }
      }
    }
  }

  reviews: {
    1: {
      rating: 5,
      review: "Great happy hour!",
      reviewer_id: 1,
      business_id: 1
    }
  }
}
```