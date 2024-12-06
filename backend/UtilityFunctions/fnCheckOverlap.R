fnCheckOverlap <- function(price_ranges) {
  # Initialize a 6x2 matrix with all FALSE values
  overlapCheckMatrix <- matrix(FALSE, nrow = 6, ncol = 2)
  
  range_contains_value <- function(value, outer_range) {
    return(outer_range[1] < value && outer_range[2] > value)
  }
  
  overlapCheckMatrix[1,1] <- range_contains_value(price_ranges$`Entry level`$Average_Min_Price, price_ranges$`Intermediate`)
  overlapCheckMatrix[1,2] <- range_contains_value(price_ranges$`Entry level`$Average_Max_Price, price_ranges$`Intermediate`)
  overlapCheckMatrix[2,1] <- range_contains_value(price_ranges$`Entry level`$Average_Min_Price, price_ranges$`Expert`)
  overlapCheckMatrix[2,2] <- range_contains_value(price_ranges$`Entry level`$Average_Max_Price, price_ranges$`Expert`)
  overlapCheckMatrix[3,1] <- range_contains_value(price_ranges$`Intermediate`$Average_Min_Price, price_ranges$`Entry level`)
  overlapCheckMatrix[3,2] <- range_contains_value(price_ranges$`Intermediate`$Average_Max_Price, price_ranges$`Entry level`)
  overlapCheckMatrix[4,1] <- range_contains_value(price_ranges$`Intermediate`$Average_Min_Price, price_ranges$`Expert`)
  overlapCheckMatrix[4,2] <- range_contains_value(price_ranges$`Intermediate`$Average_Max_Price, price_ranges$`Expert`)
  overlapCheckMatrix[5,1] <- range_contains_value(price_ranges$`Expert`$Average_Min_Price, price_ranges$`Entry level`)
  overlapCheckMatrix[5,2] <- range_contains_value(price_ranges$`Expert`$Average_Max_Price, price_ranges$`Entry level`)
  overlapCheckMatrix[6,1] <- range_contains_value(price_ranges$`Expert`$Average_Min_Price, price_ranges$`Intermediate`)
  overlapCheckMatrix[6,2] <- range_contains_value(price_ranges$`Expert`$Average_Max_Price, price_ranges$`Intermediate`)
  
  # Create a 1x6 matrix with the logical OR of all rows for each column
  # this is simple overlap
  overlapMatrix <- matrix(apply(overlapCheckMatrix, 1, any), nrow = 6, ncol = 1)
  
  # Create a 1x6 matrix with the logical OR of all rows for each column
  # this is when a price range is entirely within another
  withinMatrix <- matrix(apply(overlapCheckMatrix, 1, all), nrow = 6, ncol = 1)
  
  # Display the result
  return(overlapCheckMatrix)
}
  
  
  