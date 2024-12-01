fnVisualizeHourlyDistribution <- function(jobs_data) {
  
  # Ensure the necessary column exists
  if (!"hour" %in% colnames(jobs_data)) {
    stop("The 'hour' column is missing in the input dataset.")
  }
  
  # Calculate the hourly distribution
  hourly_distribution <- table(jobs_data$hour)
  
  # Create the bar plot
  barplot(
    hourly_distribution,
    main = "Hourly Distribution of Job Postings",
    xlab = "Hour of the Day",
    ylab = "Number of Postings",
    col = "skyblue",
    names.arg = as.numeric(names(hourly_distribution)), # Ensure hour labels
    border = "white"
  )
}
