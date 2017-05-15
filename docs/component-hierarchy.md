## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Home

**HeaderContainer**
  - Header

**BusinessIndexContainer**
  - BusinessIndex

**BusinessIndex**
  - BusinessIndexItem
  - BusinessDetailContainer

**UserContainer**
  - UserDetail
    * FeaturedBusiness
  - UserBookmarksContainer
  - UserReviewsContainer

**UserBookmarksContainer**
  - UserBookmarksContainer
    * UserBookmarkItem

**UserReviewsContainer**
  - UserReviews
    * UserReviewItem


## Routes
|Path   | Component   |
|-------|-------------|
| "/" | "SessionFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/business" | "BusinessIndexContainer" |
| "home/business/:businessId" | "BusinessDetailContainer"
| "home/user/:userId" | UserContainer |
| "home/user/:userId/bookmarks" | UserBookmarksContainer |
| "home/user/:userId/reviews" | UserReviewsContainer |