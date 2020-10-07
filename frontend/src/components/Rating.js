import React from 'react'

export default function Rating(props){
    const {rating, numReviews} = props; // Get rate and reviews from props
    return(
        <div className="rating">
            <span> <i 
                        className={ 
                            rating>=1?"fa fa-star":             // If rating > 1 Then 1-Satar
                            rating>=0.5?'fa fa-star-half-o':    // Else If rating >= 0.5 Then half-Satar
                            'fa fa-star-o'}                     //Else no-Satar
                    ></i>
            </span>
            <span> <i 
                        className={ 
                            rating>=2?"fa fa-star":             
                            rating>=1.5?'fa fa-star-half-o':    
                            'fa fa-star-o'}                    
                    ></i>
            </span>
            <span> <i 
                        className={ 
                            rating>=3?"fa fa-star":             
                            rating>=2.5?'fa fa-star-half-o':    
                            'fa fa-star-o'}                    
                    ></i>
            </span>
            <span> <i 
                        className={ 
                            rating>=4?"fa fa-star":             
                            rating>=3.5?'fa fa-star-half-o':    
                            'fa fa-star-o'}                     
                    ></i>
            </span>
            <span> <i 
                        className={ 
                            rating>=5?"fa fa-star":             
                            rating>=4.5?'fa fa-star-half-o':    
                            'fa fa-star-o'}                     
                    ></i>
            </span>
            <span>{'  ' + numReviews + ' reviews'}</span>
        </div>
    )
}