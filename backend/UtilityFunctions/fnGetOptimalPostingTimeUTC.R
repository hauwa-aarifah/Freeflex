fnGetOptimalPostingTimeUTC <- function(postingDist) {
  optimalPostingIdx <- which.max(postingDist$Normalized_Distribution$Freq)
  
  optimalPostingHour <- as.double(optimalPostingIdx) - 1
  
  return(optimalPostingHour)
}
  
  
