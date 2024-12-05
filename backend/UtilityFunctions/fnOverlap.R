# Define the ranges for different skill levels
rates <- data.frame(
  level = c("Entry", "Intermediate", "Expert"),
  start = c(12, 15, 35),
  end = c(35, 50, 75)
)

# Initialize a 6x2 matrix with all FALSE values
matrix <- matrix(FALSE, nrow = 6, ncol = 2)

# Function to check if one range is contained within another
range_contains <- function(inner_range, outer_range) {
  return(outer_range[1] < inner_range[1] || outer_range[2] > inner_range[2])
}

range_contains_value <- function(value, outer_range) {
  return(outer_range[1] < value && outer_range[2] > value)
}

# Fill in the matrix with TRUE/FALSE based on the condition
for (i in 1:nrow(rates)) {
  for (j in 1:nrow(rates)) {
    if (i != j) {  # Skip checking against the same range
      # Check if the start and end of the current range fall into the other ranges
      matrix[(i - 1) * 2 + 1, 1] <- matrix[(i - 1) * 2 + 1, 1] || range_contains_value(rates$start[i], c(rates$start[j], rates$end[j]))
      matrix[(i - 1) * 2 + 2, 2] <- matrix[(i - 1) * 2 + 2, 2] || range_contains_value(rates$end[i], c(rates$start[j], rates$end[j]))
    }
  }
}

# Display the matrix
print(matrix)

range_contains_value(rates$start[1], c(rates$start[2], rates$end[2]))
range_contains_value(rates$start[1], c(rates$start[3], rates$end[3]))
range_contains_value(rates$end[1], c(rates$start[2], rates$end[2]))
range_contains_value(rates$end[1], c(rates$start[3], rates$end[3]))