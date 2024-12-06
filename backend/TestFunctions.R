### Load in the functions
source("UtilityFunctions/fnAveragePrice.R")
source("UtilityFunctions/fnAveragePriceRange.R")
source("UtilityFunctions/fnCheckOverlap.R")
source("UtilityFunctions/fnCountryPercentage.R")
source("UtilityFunctions/fnFlexiFilterJobData.R")
source("UtilityFunctions/fnForecastJobDemand.R")
source("UtilityFunctions/fnGetAveragePriceAcrossExp.R")
source("UtilityFunctions/fnGetHourlyPostingDistribution.R")
source("UtilityFunctions/fnGetOptimalPostingTimeLocal.R")
source("UtilityFunctions/fnGetOptimalPostingTimeUTC.R")
source("UtilityFunctions/fnGetPriceRangesAcrossExp.R")
source("UtilityFunctions/fnJobDemandOverTime.R")
source("UtilityFunctions/fnVisualizeHourlyDistribution.R")

### Load Data
jobs_data <- read.csv('Data/Final_UpWork_Dataset_Cleaned_Stage3.csv', stringsAsFactors = FALSE)
alljobs_data <- read.csv('Data/All_Upwork_Jobs_Cleaned_Stage2.csv', stringsAsFactors = FALSE)

#### This is what comes in from the frontend
clientCountry <- "United States"
clientTimeZone <- "America/New_York"
skillArea = "Developer"
expectedExpLvel <- "Intermediate"

### All this stuff happens in R

# Filter data by skill and client country, for both datasets
filteredJobsData <- fnFlexiFilterJobData(jobs_data = jobs_data, filter_criteria = list(Client_Country = clientCountry, Search_Keyword = skillArea))
filteredAllJobsData <- fnFlexiFilterJobData(jobs_data = alljobs_data, filter_criteria = list(country = clientCountry, Category = skillArea))

# Filter only by skill area
filteredJobsDataGlobal <- fnFlexiFilterJobData(jobs_data = jobs_data, filter_criteria = list(Search_Keyword = skillArea))
# Get the density by country
countryCounts <- fnCountryPercentage(jobs_data = filteredJobsDataGlobal) # Use to plot the skill map

# Get the average price across all experience levels
# Should give a list of 3 lists with 2 elements - minimum and maximum average
# price for each experience level
price_ranges <- fnGetPriceRangesAcrossExp(jobs_data = filteredJobsData) # Plot this

# Get the absolute average for all experience levels
# Should give a list of 3 items, average price for each experience level
average_prices <- fnGetAveragePriceAcrossExp(jobs_data = filteredJobsData) # Could also plot this

# Check the overlap between different skill levels and show the matrix
# I will add some functionality to return a string describing any overlap
overlapCheckMatrix <- fnCheckOverlap(price_ranges = price_ranges)
print(overlapCheckMatrix)

# Get the distribution of job posts by hour
postingDist <- fnGetHourlyPostingDistribution(jobs_data = filteredAllJobsData)
# Can visualise it for sanity
fnVisualizeHourlyDistribution(jobs_data = filteredAllJobsData)

# Get the optimal posting hour (UTC)
optimalPostingHour <- fnGetOptimalPostingTimeUTC(postingDist = postingDist)
# Convert this to the specified time zone
optimalPostingTime <- fnGetOptimalPostingTimeLocal(optimalPostingHour = as.double(optimalPostingHour), timeZone = clientTimeZone)
# Display the optimal posting time
print(optimalPostingTime)


# Get the seasonal demand, looking at the next week
jobForecast <- fnForecastJobDemand(jobs_data = filteredAllJobsData, time_interval = "week") # Could plot this, but not critical

####### Pretty much all of the outputs can be sent to the frontend