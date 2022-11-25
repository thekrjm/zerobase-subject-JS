// do something!


export const StarRating=($container)=>{
    const starRatingContainer = document.createElement('div',{
        className:'star-rating-container'
    })

    star.classList.add('star-rating-container');

    const createStar= document.createElement('i',{
        className:'bx bxs-star hovered',
    });

    starRatingContainer.appendChild(createStar);
    document.body.appendChild(starRatingContainer);
}