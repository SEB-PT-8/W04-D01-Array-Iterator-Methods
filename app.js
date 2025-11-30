const myStudents = ['Hasan','Mohammad','Muqtada']


myStudents.forEach(function(oneStudent){
    console.log(oneStudent)
})



// map()

const newStudentsArr = myStudents.map(function(oneStudent){
    return oneStudent + ' is in software engineering cohort'

})


const myShoppingCart = [14, 11, 3, 9]

const cartWithVat = myShoppingCart.map(function(oneCartItem){
    return Number((oneCartItem * 1.10))
})

console.log(cartWithVat)


const movieRatings = [8.5, 9.1, 5.2, 7.8, 9.8]

// get all the movies with rating above 8

const allTopRatedMovies = movieRatings.filter(function(oneMovieRating){
    if(oneMovieRating < 8){
        return true
    } 
})


console.log(allTopRatedMovies)




const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 8.6
    },
    {
        title:"Fast And Furious",
        year: 2001,
        rating: 7.3
    }
]



const bestMoviesObjects = movies.filter(function(oneMovieObject){
    console.log(oneMovieObject)
    if(oneMovieObject.rating >= 8.8){
        return true
    }
})


console.log(bestMoviesObjects)