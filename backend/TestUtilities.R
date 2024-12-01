source("UtilityFunctions/fnFlexiFilterJobData.R")
source("UtilityFunctions/fnAveragePriceRange.R")
source("UtilityFunctions/fnGetPriceRangesAcrossExp.R")
source("UtilityFunctions/fnCountryPercentage.R")
source("UtilityFunctions/fnGetAveragePriceAcrossExp.R")
source("UtilityFunctions/fnAveragePrice.R")

# Read CSV files
jobs_data <- read.csv('Data/aLL_uPWORK.csv', stringsAsFactors = FALSE)

# Get price ranges
price_ranges <- fnGetPriceRangesAcrossExp(jobs_data = jobs_data)
abs_avg_price_per_exp <- fnGetAveragePriceAcrossExp(jobs_data = jobs_data)
abs_avg_price <- fnAveragePrice(jobs_data = jobs_data)

#
filter_criteria = list(Client_Country = "United Kingdom", Search_Keyword = "Data_science")
flexiFilteredData1 <- fnFlexiFilterJobData(jobs_data = jobs_data, filter_criteria)
price_ranges_developer <- fnGetPriceRangesAcrossExp(jobs_data = flexiFilteredData1)
price_ranges_abs <- fnAveragePriceRange(filtered_data = flexiFilteredData1)

EL_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Entry level"))
Im_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Intermediate"))
XP_data <- fnFlexiFilterJobData(jobs_data = flexiFilteredData1, filter_criteria = list(EX_level_demand = "Expert"))

EL_range <- fnAveragePriceRange(filtered_data = EL_data)
Im_range <- fnAveragePriceRange(filtered_data = Im_data)
XP_range <- fnAveragePriceRange(filtered_data = XP_data)

### Testing the big dataset
alljobs_data <- read.csv('Data/All_Upwork_Jobs_Cleaned_Stage2.csv', stringsAsFactors = FALSE)
developerJobsData <- fnFlexiFilterJobData(jobs_data = alljobs_data, filter_criteria = list(Category = "Developer"))
source("UtilityFunctions/fnGetHourlyPostingDistribution.R")
source("UtilityFunctions/fnVisualizeHourlyDistribution.R")

postingDist <- fnGetHourlyPostingDistribution(jobs_data = developerJobsData)
fnVisualizeHourlyDistribution(developerJobsData)

## Plot job demand
source("UtilityFunctions/fnPlotJobDemandOverTime.R")
jobs_demand <- fnPlotJobDemandOverTime(developerJobsData, time_interval = "week")

## Forecasting
source("UtilityFunctions/fnForecastJobDemand.R")
forecastJobs <- fnForecastJobDemand(jobs_data = developerJobsData, time_interval = "week")